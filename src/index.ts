import { users, ads, comments, posts } from "./mockdata";
import { RankedPost } from "./types";

const myUserId = "1";
const nonSortedPosts: RankedPost[] = [];
const sortedPosts: RankedPost[] = [];
const today = new Date();
// implement facebook ranking algorithm

// 1. Get User from userId
const myUser = users.find((user) => user.id === myUserId);

// 2. Get all posts from friends
const userFriends = users.find((user) => user.id === myUserId)?.friends;
const friendsPosts: RankedPost[] = posts
  .filter((post) => userFriends?.includes(post.userId))
  .map((post) => {
    return { ...post, rank: 1 };
  });

// 3. Get posts that friends liked
const friendsLikedPosts: RankedPost[] =
  myUser?.friends
    .map((friendId) => {
      return posts.filter(
        (post) =>
          post.likes.includes(friendId) && !post.likes.includes(myUserId)
      );
    })
    .reduce((acc, val) => acc.concat(val), [])
    .map((post) => {
      return { ...post, rank: 1 };
    }) || [];

// 4. Get posts that friends commented on
const friendsComments = comments.filter((comment) =>
  userFriends?.includes(comment.userId)
);
const friendsCommentedPostsIds: string[] = friendsComments.map(
  (comment) => comment.postId
);
const friendsCommentedPosts: RankedPost[] = posts
  .filter((post) => friendsCommentedPostsIds.includes(post.id))
  .map((post) => {
    return { ...post, rank: 1 };
  });

// 5. Get posts that share interests with user
const userInterests = users.find((user) => user.id === myUserId)?.interests;
const postsWithSharedInterests: RankedPost[] = posts
  .filter((post) => {
    const postUser = users.find((user) => user.id === post.userId);
    return postUser?.interests.some((interest) =>
      userInterests?.includes(interest)
    );
  })
  .map((post) => {
    return { ...post, rank: 1 };
  });

// 6. Mix all posts together
// concat friendsPosts and friendsLikedPosts and increase rank by 1 if repeated post
const postsWithFriends: RankedPost[] = [];
for (let i = 0; i < friendsPosts.length; i++) {
  for (let j = 0; j < friendsLikedPosts.length; j++) {
    if (friendsPosts[i].id === friendsLikedPosts[j].id) {
      friendsPosts[i].rank += 1;
    } else if (
      postsWithFriends.filter((post) => post.id === friendsLikedPosts[j].id)
        .length === 0
    ) {
      postsWithFriends.push(friendsLikedPosts[j]);
    }
  }
  postsWithFriends.push(friendsPosts[i]);
}

console.log(postsWithFriends);
// rules of ranking
// 1. If a post is liked by a friend, add 1 to the rank
// 2. If a post is published by a friend, add 1 to the rank
// 3. If a post is commented by a friend, add 1 to the rank
// 4. If a post is published by a user who shares an interest with the current user, add 1 to the rank
