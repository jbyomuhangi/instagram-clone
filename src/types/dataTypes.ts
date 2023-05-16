export type User = { id: string; userName: string };

export type Post = {
  id: string;
  userId: string;
  caption: string;
  likes: number;
  createdAt: Date;
};
