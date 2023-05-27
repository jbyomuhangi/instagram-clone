import { faker } from "@faker-js/faker";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "@/store";
import { Comment, Post, User } from "@/types/dataTypes";
import { createPosts, createUserMap } from "@/utils/fakeDataUtils";

export type UserMap = { [key: string]: User };
export type PostsMap = { [key: string]: Post };
export type CommentsMap = { [key: string]: Comment };

interface DataState {
  userId: string;
  usersMap: UserMap;
  postsMap: PostsMap;
  postIds: string[];
  commentsMap: CommentsMap;
  userStoriesIds: string[];
}

const getInitialState = (): DataState => {
  /* Create users */
  const usersMap = createUserMap(20);
  const userIds = Object.keys(usersMap);

  /* Create posts */
  const { postsMap, postIds, commentsMap } = createPosts({
    userIds,
    count: 50,
  });

  return {
    userId: userIds[0],
    usersMap,
    postsMap,
    postIds,
    commentsMap,
    userStoriesIds: [...userIds.slice(0, 10)],
  };
};

const initialState: DataState = getInitialState();

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    getMorePosts: (state: DataState) => {
      const lastPostId = state.postIds.slice(-1)[0];
      const lastPost = state.postsMap[lastPostId];

      const { postsMap, postIds, commentsMap } = createPosts({
        userIds: Object.keys(state.usersMap),
        postAfter: lastPost,
      });

      return {
        ...state,
        postsMap: { ...state.postsMap, ...postsMap },
        commentsMap: { ...state.commentsMap, ...commentsMap },
        postIds: [...state.postIds, ...postIds],
      };
    },

    likePost: (state, action: PayloadAction<{ postId: string }>) => {
      const { postId } = action.payload;
      const post: Post | undefined = state.postsMap[postId];
      if (!post) return state;

      const isLiked = !post.isLiked;
      const likes = isLiked ? post.likes + 1 : post.likes - 1;
      const newPost: Post = { ...post, isLiked, likes };
      return { ...state, postsMap: { ...state.postsMap, [postId]: newPost } };
    },

    likeComment: (state, action: PayloadAction<{ commentId: string }>) => {
      const { commentId } = action.payload;
      const comment: Comment | undefined = state.commentsMap[commentId];
      if (!comment) return state;

      const isLiked = !comment.isLiked;
      const likes = isLiked ? comment.likes + 1 : comment.likes - 1;
      const newComment: Comment = { ...comment, isLiked, likes };
      return {
        ...state,
        commentsMap: { ...state.commentsMap, [commentId]: newComment },
      };
    },

    addComment: (
      state,
      action: PayloadAction<{ commentText: string; postId: string }>
    ) => {
      const { commentText, postId } = action.payload;
      const post = state.postsMap[postId];
      if (!post) return state;

      const comment: Comment = {
        id: faker.string.uuid(),
        comment: commentText,
        likes: 0,
        postId,
        userId: state.userId,
        createdAt: new Date().toUTCString(),
        isLiked: false,
      };

      const newPost: Post = {
        ...post,
        commentIds: [comment.id, ...post.commentIds],
      };

      return {
        ...state,
        commentsMap: { ...state.commentsMap, [comment.id]: comment },
        postsMap: { ...state.postsMap, [newPost.id]: newPost },
      };
    },
  },
});

export const dataActions = dataSlice.actions;

export const selectUser =
  (id = "") =>
  (state: RootState): User | undefined => {
    return state.data.usersMap[id];
  };

export const selectMe = (state: RootState): User | undefined => {
  return state.data.usersMap[state.data.userId];
};

export const selectPostIds = (state: RootState) => state.data.postIds;

export const selectPost =
  (id = "") =>
  (state: RootState): Post | undefined => {
    return state.data.postsMap[id];
  };

export const selectComment =
  (id = "") =>
  (state: RootState): Comment | undefined => {
    return state.data.commentsMap[id];
  };

export const selectUserPostIds =
  (userId = "") =>
  (state: RootState): string[] => {
    return state.data.postIds.filter(
      (postId) => state.data.postsMap[postId].userId === userId
    );
  };

export const selectUserStoriesIds = (state: RootState) =>
  state.data.userStoriesIds;

export default dataSlice.reducer;
