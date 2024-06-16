import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from './store';
import {leaderBoardData, UserScore} from '../data/leaderboard';

export interface UserScoresState {
  dataList: UserScore[];
}

const initialState: UserScoresState = {
  dataList: leaderBoardData,
};

const userScoreSlice = createSlice({
  name: 'userScore',
  initialState,
  reducers: {
    addUserScore: (state, action: PayloadAction<UserScore>) => {
      state.dataList = state.dataList?.concat(action.payload);
    },
  },
});

export const {addUserScore} = userScoreSlice.actions;

export const selectUserScores = (state: RootState): UserScore[] =>
  state.userScore.dataList || [];

export default userScoreSlice.reducer;
