import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  gameData: Array(9).fill(null),
  currentUser: 'X',
  winner: null,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    selectedUser: (state, action) => {
      return { ...state, currentUser: action.payload };
    },
    selectedUserData: (state, action) => {
      const updatedGameData = state.gameData.map((val, index) => {
        if (index === action.payload) {
          return state.currentUser;
        }
        return val;
      });
      return {
        ...state,
        gameData: updatedGameData,
      };
    },
    checkWinner: function (state, action) {
      const square = action.payload;
      const checkInfo = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i < checkInfo.length; i++) {
        const [a, b, c] = checkInfo[i];
        if (square[a] && square[a] === square[b] && square[a] === square[c]) {
          return { ...state, winner: square[a] };
        }
      }
    },
    resetState: function (state) {
      return {
        ...state,
        gameData: Array(9).fill(null),
        currentUser: 'X',
        winner: null,
      };
    },
  },
});

export const selectAll = (state) => state.game.gameData;
export const currentUser = (state) => state.game.currentUser;
export const winnerInfo = (state) => state.game.winner;

export const { selectedUser, selectedUserData, checkWinner, resetState } =
  gameSlice.actions;
export default gameSlice.reducer;
