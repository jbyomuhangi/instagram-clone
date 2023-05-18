import { createSlice } from "@reduxjs/toolkit";

import type { RootState } from "@/store";
import { Comment, Post, User } from "@/types/dataTypes";
import { createPosts, createUserMap } from "@/utils/fakeDataUtils";

export type UserMap = { [key: string]: User };
export type PostsMap = { [key: string]: Post };
export type CommentsMap = { [key: string]: Comment };

interface DataState {
  usersMap: UserMap;
  postsMap: PostsMap;
  postIds: string[];
  commentsMap: CommentsMap;
}

const getInitialState = (): DataState => {
  /* Create users */
  const usersMap = createUserMap();

  /* Create posts */
  const { postsMap, postIds, commentsMap } = createPosts({
    userIds: Object.keys(usersMap),
  });

  return { usersMap, postsMap, postIds, commentsMap };
};

const initialState: DataState = getInitialState();

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    getMorePosts: (state) => {
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
  },
});

export const dataActions = dataSlice.actions;

export const selectUser = (id: string) => (state: RootState) =>
  state.data.usersMap[id];

export const selectPostIds = (state: RootState) => state.data.postIds;

export const selectPost = (id: string) => (state: RootState) =>
  state.data.postsMap[id];

export default dataSlice.reducer;
