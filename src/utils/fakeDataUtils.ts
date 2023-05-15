import { faker } from "@faker-js/faker";

type User = { id: string; userName: string };

export const createUser = (): User => {
  return { id: faker.string.uuid(), userName: faker.person.firstName() };
};

type Post = {
  id: string;
  userId: string;
  caption: string;
  likes: number;
  createdAt: Date;
};

export const createPost = (user: User): Post => {
  return {
    id: faker.string.uuid(),
    userId: user.id,
    caption: faker.lorem.lines({ min: 1, max: 5 }),
    likes: faker.number.int({ min: 0 }),
    createdAt: faker.date.recent({ days: 90 }),
  };
};
