import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "@/store";
import { Post, User } from "@/types/dataTypes";
import { createPostMap, createUserMap } from "@/utils/fakeDataUtils";

export type UserMap = { [key: string]: User };
export type PostsMap = { [key: string]: Post };

interface DataState {
  usersMap: UserMap;
  postsMap: PostsMap;
  postIds: string[];
}

const getInitialState = (): DataState => {
  /* Create users */
  const usersMap = createUserMap();

  /* Create posts */
  const postsMap = createPostMap({ usersMap });
  const postIds = Object.keys(postsMap);

  return { usersMap, postsMap, postIds };
};

const initialState: DataState = getInitialState();

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    getMorePosts: (state) => {
      const lastPostId = state.postIds.slice(-1)[0];
      const lastPost = state.postsMap[lastPostId];
      const newPostsMap = createPostMap({
        usersMap: state.usersMap,
        postAfter: lastPost,
      });
      const newPostIds = Object.keys(newPostsMap);

      return {
        ...state,
        postsMap: { ...state.postsMap, ...newPostsMap },
        postIds: [...state.postIds, ...newPostIds],
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
