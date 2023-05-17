import { faker } from "@faker-js/faker";

import { Post, User } from "@/types/dataTypes";
import { generateRandomNumber } from "@/utils/commonUtils";

export const createUser = (): User => {
  return { id: faker.string.uuid(), userName: faker.person.firstName() };
};

type createPostInput = { user: User; prevPostDate?: Date };
export const createPost = ({ user, prevPostDate }: createPostInput): Post => {
  return {
    id: faker.string.uuid(),
    userId: user.id,
    caption: faker.lorem.lines({ min: 1, max: 5 }),
    likes: faker.number.int({ min: 0, max: 1000 }),
    createdAt: faker.date.recent({
      days: generateRandomNumber({ min: 1, max: 10 }),
      refDate: prevPostDate,
    }),
  };
};
