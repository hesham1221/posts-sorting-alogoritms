import { User, Post, Comment, Ad } from "./types";

// Mock user data
export const users: User[] = [
  {
    id: "1",
    name: "Alice",
    interests: ["music", "movies", "travel"],
    friends: ["2", "3", "4"],
    age: 25,
  },
  {
    id: "2",
    name: "Bob",
    interests: ["sports", "technology"],
    friends: ["1", "4", "5"],
    age: 30,
  },
  {
    id: "3",
    name: "Charlie",
    interests: ["food", "fashion"],
    friends: ["1", "6", "5"],
    age: 35,
  },
  {
    id: "4",
    name: "Dave",
    interests: ["music", "movies", "travel"],
    friends: ["2", "3", "5"],
    age: 25,
  },
  {
    id: "5",
    name: "Eve",
    interests: ["sports", "technology"],
    friends: ["1", "4", "6"],
    age: 11,
  },
  {
    id: "6",
    name: "Frank",
    interests: ["food", "fashion"],
    friends: ["1", "6", "5"],
    age: 35,
  },
];

// Mock post data
export const posts: Post[] = [
  {
    id: "1",
    userId: "2",
    content: "Just finished a great workout!",
    likes: ["1", "3" , "4" , "5" , "6"],
    comments: [],
    createdAt: new Date("2023-04-09T10:00:00Z"),
  },
  {
    id: "2",
    userId: "1",
    content: "I love this song!",
    likes: ["2", "5" , "6"],
    comments: [],
    createdAt: new Date("2023-04-08T15:00:00Z"),
  },
  {
    id: "3",
    userId: "3",
    content: "Check out this new fashion trend!",
    likes: ["2", "3"],
    comments: [],
    createdAt: new Date("2023-04-07T12:00:00Z"),
  },
  {
    id: "4",
    userId: "1",
    content: "Just got back from an amazing trip!",
    likes: ["2", "3", "5" , "6"],
    comments: [],
    createdAt: new Date("2023-04-06T18:00:00Z"),
  },
  {
    id: "5",
    userId: "2",
    content: "I can't wait for the new iPhone!",
    likes: ["1", "5" , "6"],
    comments: [],
    createdAt: new Date("2023-04-05T09:00:00Z"),
  },
  {
    id: "6",
    userId: "3",
    content: "This recipe is a must-try!",
    likes: ["5" , "6"],
    comments: [],
    createdAt: new Date("2023-04-04T14:00:00Z"),
  },
  {
    id: "7",
    userId: "2",
    content: "Excited to announce our new product launch!",
    likes: ["4" , "2"],
    comments: [],
    createdAt: new Date("2023-04-03T11:00:00Z"),
  },
  {
    id: "8",
    userId: "1",
    content: "Happy birthday to my best friend!",
    likes: ["3"],
    comments: [],
    createdAt: new Date("2023-04-02T20:00:00Z"),
  },
  {
    id: "9",
    userId: "3",
    content: "I'm going to the beach today!",
    likes: ["1", "2" , "3"],
    comments: [],
    createdAt: new Date("2023-04-02T20:00:00Z"),
  },
  {
    id: "10",
    userId: "1",
    content: "I'm going to the beach today!",
    likes: ["1", "2" , "5"],
    comments: [],
    createdAt: new Date("2023-04-02T20:00:00Z"),
  },
  {
    id: "11",
    userId: "1",
    content: "I'm going to the beach today!",
    likes: ["1", "2", "6"],
    comments: [],
    createdAt: new Date("2023-04-02T20:00:00Z"),
  },
];

// Mock comment data
export const comments: Comment[] = [
  { id: "1", postId: "1", userId: "1", content: "Great job!", likes: [] },
  {
    id: "2",
    postId: "2",
    userId: "3",
    content: "I love this song too!",
    likes: ["1"],
  },
  {
    id: "3",
    postId: "10",
    userId: "5",
    content: "That looks amazing!",
    likes: ["3"],
  },
  {
    id: "4",
    postId: "6",
    userId: "4",
    content: "Where did you go?",
    likes: [],
  },
  {
    id: "4",
    postId: "5",
    userId: "3",
    content: "Where did you go?",
    likes: [],
  },
  {
    id: "4",
    postId: "1",
    userId: "3",
    content: "Where did you go?",
    likes: [],
  },
  {
    id: "4",
    postId: "4",
    userId: "2",
    content: "Where did you go?",
    likes: [],
  },
];

// Mock ad data
export const ads: Ad[] = [
  {
    id: "1",
    content: "Get 50% off your first order!",
    targetInterests: ["food", "technology", "travel"],
    targetAge: [18, 30],
  },
  {
    id: "2",
    content: "Upgrade your phone today!",
    targetInterests: ["food", "technology", "travel"],
    targetAge: [18, 50],
  },
  {
    id: "3",
    content: "Discover your next travel destination!",
    targetInterests: ["food", "technology", "travel"],
    targetAge: [18, 40],
  },
];
