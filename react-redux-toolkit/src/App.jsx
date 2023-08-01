import { Provider } from 'react-redux';
import './App.css';
import { store } from './redux/store';
import { Counter } from './components/Counter';

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
