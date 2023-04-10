// implement facebook ranking algorithm

import { users, ads, comments, posts } from "./mockdata";
import { Ad, RankedPost } from "./types";

const myUserId = "5";
const sortedPosts: RankedPost[] = [];
const sortedWithAds: (RankedPost | Ad)[] = [];
const userInterests = users.find((user) => user.id === myUserId)?.interests;
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

// 6. Mix all posts together and sort by rank and createdAt

const combinedArr = friendsPosts.concat(
  friendsLikedPosts,
  friendsCommentedPosts,
  postsWithSharedInterests
);

combinedArr.forEach((obj) => {
  const existingObj = sortedPosts.find((o) => o.id === obj.id);
  existingObj ? (existingObj.rank += 1) : sortedPosts.push(obj);
});

sortedPosts.sort((a, b) => {
  // Compare by rank first
  if (a.rank > b.rank) return -1;
  else if (a.rank < b.rank) return 1;

  // If rank is the same, compare by createdAt
  if (a.createdAt > b.createdAt) return -1;
  else if (a.createdAt < b.createdAt) return 1;

  return 0;
});

// get ads that are relevant to the user
const relevantAds = ads.filter((ad) => {
  const data = ad.targetInterests.map(
    (interest) => userInterests?.includes(interest) && true
  );
  return (
    data.includes(true) &&
    (myUser
      ? myUser?.age >= ad.targetAge[0] && myUser?.age <= ad.targetAge[1]
      : false)
  );
});

// insert ads into the sorted posts
sortedWithAds.push(...sortedPosts);
const randomIndexs: number[] = [];
let randomIndex;
relevantAds.forEach((ad) => {
  while (true) {
    randomIndex = Math.floor(Math.random() * (sortedWithAds.length - 1)) + 1;
    if (!randomIndexs.includes(randomIndex)) break;
  }
  sortedWithAds.splice(randomIndex, 0, ad);
});

console.log(sortedWithAds);

// rules of ranking
// 1. If a post is liked by a friend, add 1 to the rank
// 2. If a post is published by a friend, add 1 to the rank
// 3. If a post is commented by a friend, add 1 to the rank
// 4. If a post is published by a user who shares an interest with the current user, add 1 to the rank
