import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "@/store";
import { Post, User } from "@/types/dataTypes";
import { generateRandomNumber } from "@/utils/commonUtils";
import { createPost, createUser } from "@/utils/fakeDataUtils";

type UserMap = { [key: string]: User };
type PostsMap = { [key: string]: Post };

interface DataState {
  usersMap: UserMap;
  postsMap: PostsMap;
  postIds: string[];
}

const getInitialState = (): DataState => {
  /* Create users */
  const usersMap: UserMap = {};
  for (let i = 0; i < 5; i++) {
    const user = createUser();
    usersMap[user.id] = user;
  }

  /* Create posts */
  const postsMap: PostsMap = {};
  const userIds = Object.keys(usersMap);

  for (let i = 0; i < 20; i++) {
    const userIndex = generateRandomNumber({ min: 0, max: 5 });
    const userKey = userIds[userIndex];
    const user = usersMap[userKey];

    const post = createPost(user);
    postsMap[post.id] = post;
  }

  const postIds = Object.keys(postsMap);

  return { usersMap, postsMap, postIds };
};

const initialState: DataState = getInitialState();

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      const usersObject: UserMap = {};

      action.payload.forEach((user) => {
        usersObject[user.id] = user;
      });

      state.usersMap = usersObject;
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
