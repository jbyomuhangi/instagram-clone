export type User = {
  id: string;
  userName: string;
  profilePictureImage: string;
};

export type Post = {
  id: string;
  userId: string;
  image: string;
  caption: string;
  commentIds: string[];
  likes: number;
  createdAt: string;
};

export type Comment = {
  id: string;
  userId: string;
  postId: string;
  comment: string;
  likes: number;
  createdAt: string;
};
