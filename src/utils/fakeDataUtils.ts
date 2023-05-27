import { faker } from "@faker-js/faker";

import { CommentsMap, PostsMap, UserMap } from "@/reducers/dataReducer";
import { Comment, Post, User } from "@/types/dataTypes";
import { generateRandomNumber } from "@/utils/commonUtils";

export const createUser = (): User => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.firstName();

  return {
    id: faker.string.uuid(),
    userName: `${firstName[0]}${lastName}`,
    fullName: `${firstName} ${lastName}`,
    profilePictureImage: faker.image.avatar(),
    followerCount: faker.number.int({ min: 10, max: 872 }),
    followingCount: faker.number.int({ min: 1, max: 1000 }),
  };
};

type CreateCommentInput = {
  userId: string;
  postId: string;
  prevCommentCreatedAt?: string;
};
const createComment = ({
  postId,
  userId,
  prevCommentCreatedAt,
}: CreateCommentInput): Comment => {
  return {
    id: faker.string.uuid(),
    comment: faker.lorem.lines({ min: 1, max: 5 }),
    likes: faker.number.int({ min: 0, max: 1000 }),
    postId,
    userId,
    createdAt: faker.date
      .recent({
        days: faker.number.int({ min: 1, max: 10 }),
        refDate: prevCommentCreatedAt
          ? new Date(prevCommentCreatedAt)
          : undefined,
      })
      .toUTCString(),
  };
};

type CreateCommentsInput = {
  postId: string;
  postCreatedAt?: string;
  userIds: string[];
};
const createComments = ({
  postId,
  postCreatedAt,
  userIds,
}: CreateCommentsInput) => {
  const commentsMap: CommentsMap = {};
  const commentIds: string[] = [];

  const numberOfComments = faker.number.int({ min: 1, max: 10 });
  let prevCommentCreatedAt = postCreatedAt;

  for (let i = 0; i < numberOfComments; i++) {
    const userIndex = generateRandomNumber({ min: 0, max: userIds.length });
    const userId = userIds[userIndex];

    const comment = createComment({ userId, postId, prevCommentCreatedAt });

    commentsMap[comment.id] = comment;
    commentIds.push(comment.id);
    prevCommentCreatedAt = comment.createdAt;
  }

  return { commentsMap, commentIds };
};

type createPostInput = {
  userId: string;
  prevPostCreatedAt?: string;
  userIds: string[];
};
export const createPost = ({
  userId,
  prevPostCreatedAt,
  userIds,
}: createPostInput) => {
  const id = faker.string.uuid();
  const createdAt = faker.date
    .recent({
      days: generateRandomNumber({ min: 1, max: 10 }),
      refDate: prevPostCreatedAt ? new Date(prevPostCreatedAt) : undefined,
    })
    .toUTCString();

  const { commentsMap, commentIds } = createComments({
    postId: id,
    userIds,
    postCreatedAt: createdAt,
  });

  const post: Post = {
    id,
    userId,
    image: faker.image.urlPicsumPhotos(),
    caption: faker.lorem.lines({ min: 1, max: 5 }),
    likes: faker.number.int({ min: 0, max: 1000 }),
    commentIds,
    createdAt,
    isLiked: false,
  };

  return { post, commentsMap };
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
  userIds: string[];
  count?: number;
  postAfter?: Post;
};
export const createPosts = ({
  userIds,
  count = 10,
  postAfter,
}: createPostMapInput) => {
  const postsMap: PostsMap = {};
  const postIds: string[] = [];

  let commentsMap: CommentsMap = {};
  let prevPost = postAfter;

  for (let i = 0; i < count; i++) {
    const userIndex = generateRandomNumber({ min: 0, max: userIds.length });
    const userId = userIds[userIndex];

    const { post, commentsMap: postCommentsMap } = createPost({
      userId,
      prevPostCreatedAt: prevPost?.createdAt,
      userIds,
    });

    postsMap[post.id] = post;
    postIds.push(post.id);
    commentsMap = { ...commentsMap, ...postCommentsMap };
    prevPost = post;
  }

  return { postsMap, commentsMap, postIds };
};
