import { useDispatch, useSelector } from 'react-redux';
import { counterSlice } from '../redux/slice/counterSlice';
import { asyncUpFetch } from '../redux/thunk';

export const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const status = useSelector((state) => state.counter.status);
  const dispatch = useDispatch();

  const handleSyncClick = () => {
    dispatch(counterSlice.actions.increament());
  };

  const handleAsyncClick = () => {
    dispatch(asyncUpFetch());
  };

  return (
    <div
      style={{
        marginBottom: 50,
      }}
    >
      <h2>Counter</h2>
      <button onClick={handleSyncClick}>+</button>
      <button onClick={handleAsyncClick}>+ async fetch</button>
      <div>
        {count} | {status}
      </div>
    </div>
  );
};
