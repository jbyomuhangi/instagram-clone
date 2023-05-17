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
  likes: number;
  createdAt: string;
};
