import { faker } from "@faker-js/faker";

import { PostsMap, UserMap } from "@/reducers/dataReducer";
import { Post, User } from "@/types/dataTypes";
import { generateRandomNumber } from "@/utils/commonUtils";

export const createUser = (): User => {
  return {
    id: faker.string.uuid(),
    userName: faker.person.firstName(),
    profilePictureImage: faker.image.avatar(),
  };
};

type createPostInput = { userId: string; prevPostCreatedAt?: string };
export const createPost = ({
  userId,
  prevPostCreatedAt,
}: createPostInput): Post => {
  return {
    id: faker.string.uuid(),
    userId,
    image: faker.image.urlPicsumPhotos(),
    caption: faker.lorem.lines({ min: 1, max: 5 }),
    likes: faker.number.int({ min: 0, max: 1000 }),
    createdAt: faker.date
      .recent({
        days: generateRandomNumber({ min: 1, max: 10 }),
        refDate: prevPostCreatedAt ? new Date(prevPostCreatedAt) : undefined,
      })
      .toUTCString(),
  };
};

export const createUserMap = (count = 5): UserMap => {
  const usersMap: UserMap = {};

  for (let i = 0; i < count; i++) {
    const user = createUser();
    usersMap[user.id] = user;
  }

  return usersMap;
};

type createPostMapInput = {
  usersMap: UserMap;
  count?: number;
  postAfter?: Post;
};
export const createPostMap = ({
  usersMap,
  count = 10,
  postAfter,
}: createPostMapInput): PostsMap => {
  const postsMap: PostsMap = {};
  const userIds = Object.keys(usersMap);
  let prevPost = postAfter;

  for (let i = 0; i < count; i++) {
    const userIndex = generateRandomNumber({ min: 0, max: userIds.length });
    const userKey = userIds[userIndex];
    const user = usersMap[userKey];

    const post = createPost({
      userId: user.id,
      prevPostCreatedAt: prevPost?.createdAt,
    });
    postsMap[post.id] = post;
    prevPost = post;
  }

  return postsMap;
};
