import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import Menu from "./components/Menu";
import PreLoad from "./components/PreLoad";
import ViewItem from "./components/ViewItem";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="header">
          <img alt='title' src="https://fontmeme.com/permalink/200318/f4f50330219c1081a6e401bcb6912a2c.png" />
        </header>
        <div className="container-components">
          <Menu />
          <PreLoad />
          <ViewItem />
        </div>
      </div>
    </Provider>
  );
}

export default App;
