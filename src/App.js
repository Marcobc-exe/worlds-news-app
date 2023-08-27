import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";
import { HashRouter } from "react-router-dom";
import { AppRouter } from "./routes/AppRouter";

export const App = () => {

  return (
    <>
      <Provider store={store}>
        <HashRouter>
          <AppRouter />
        </HashRouter>
      </Provider>
    </>
  );
};
