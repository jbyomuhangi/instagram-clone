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
}

const getInitialState = (): DataState => {
  /* Create users */
  const usersMap = createUserMap();
  const userIds = Object.keys(usersMap);

  /* Create posts */
  const { postsMap, postIds, commentsMap } = createPosts({ userIds });

  return { userId: userIds[0], usersMap, postsMap, postIds, commentsMap };
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

export default dataSlice.reducer;
