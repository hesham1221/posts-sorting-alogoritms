export interface User {
  id: string;
  name: string;
  interests: string[];
  friends: string[];
  age: number;
}

export interface Post {
  id: string;
  userId: string;
  content: string;
  likes: string[];
  comments: string[];
  createdAt: Date;
}

export interface RankedPost extends Post {
  rank: number;
}

export interface Comment {
  id: string;
  postId: string;
  userId: string;
  content: string;
  likes: string[];
}

export interface Ad {
  id: string;
  content: string;
  targetInterests: string[];
  targetAge: [number, number];
}
