import { Provider } from "react-redux";
import { Counter } from "./components/Counter";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Counter name="kim" />
    </Provider>
  );
}

export default App;
