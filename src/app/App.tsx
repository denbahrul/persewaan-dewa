import RouterApp from "./router";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <RouterApp />
    </Provider>
  );
}

export default App;
