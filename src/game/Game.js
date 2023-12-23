import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectAll,
  currentUser,
  winnerInfo,
  selectedUser,
  selectedUserData,
  checkWinner,
  resetState,
} from './gameSlice';
import Button from '../components/Button';

const Game = () => {
  const dispatch = useDispatch();

  const gameData = useSelector(selectAll);
  const currentUserActive = useSelector(currentUser);
  const winnerData = useSelector(winnerInfo);

  useEffect(() => {
    if (!winnerData) {
      dispatch(checkWinner(gameData));
    }
  }, [winnerData, gameData, dispatch]);

  const handleAction = (idx) => {
    if (winnerData || gameData[idx]) return;
    dispatch(selectedUserData(idx));
    dispatch(selectedUser(currentUserActive === 'X' ? 'O' : 'X'));
  };

  return (
    <>
      <div className='header-container'>
        {winnerData ? (
          <p>Current Winner: {winnerData}</p>
        ) : (
          <p>Current User: {currentUserActive}</p>
        )}
        <Button
          extraClassName='reset-btn'
          children='Reset'
          buttonType='button'
          buttonAction={() => dispatch(resetState())}
        />
      </div>
      <div className='tic-tac-toe'>
        {gameData.map((game, index) => {
          return (
            <Button
              key={`game-${index}`}
              extraClassName='tic-tac-toe-bar'
              children={game}
              buttonType='button'
              buttonAction={() => handleAction(index)}
            />
          );
        })}
      </div>
    </>
  );
};

export default Game;
