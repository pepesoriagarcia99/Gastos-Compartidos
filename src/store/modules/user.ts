import { createSlice } from "@reduxjs/toolkit";

import UserInterface from "../../interfaces/User.interface";
import User from "../../models/User"

/** TODO: Future improvement with a login management */
const mockUser = new User("Jose Eduardo");

export const userData = createSlice({
  name: "UserData",
  initialState: mockUser as UserInterface,
  reducers: {
    addFriend: (state, friend) => {
      state.friends.push(friend.payload);
    },
    deleteFriend: (state, friend) => {
      
    }
  },
});

export const { addFriend, deleteFriend } = userData.actions;

export default userData.reducer;
