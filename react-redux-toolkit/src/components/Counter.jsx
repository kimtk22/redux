import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { counterSlice } from '../redux/slice/counterSlice';

export const Counter = () => {
  const num = useSelector((state) => state.counter.num);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(counterSlice.actions.increase(2));
  };

  return (
    <>
      <input type="button" value="+" onClick={onClick} />
      {num}
    </>
  );
};
