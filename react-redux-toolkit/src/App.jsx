import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';
import './App.css';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {num: 0},
  reducers: {
    increase: (state, action) => {
      state.num = state.num + action.payload;
    }
  }
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
});

function Counter(){
  const num = useSelector(state => state.counter.num);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(counterSlice.actions.increase(2));
  };

  return(
    <>
      <input type="button" value="+" onClick={onClick}/>
      {num}
    </>

  );
}

function App() {
  return (
    <div>
      <h1>Counter</h1>
      <Provider store={store}>
        <Counter></Counter>
      </Provider>
    </div>
    
  );
}

export default App;
