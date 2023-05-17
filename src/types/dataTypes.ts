export type User = { id: string; userName: string };

export type Post = {
  id: string;
  userId: string;
  image: string;
  caption: string;
  likes: number;
  createdAt: Date;
};
