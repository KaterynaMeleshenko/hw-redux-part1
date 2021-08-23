import React from "react";
import { Provider } from "react-redux";
import store from "./reduxConfig";
import AddPostInfo from "./PostInfoApp";

function ReduxApp() {

  return (
    <Provider store={store}>
      <div>
          <AddPostInfo />
      </div>
    </Provider>
  );
}

export default ReduxApp;