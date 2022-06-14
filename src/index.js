import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import "./i18n";
import store from "./redux/store";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import { HelmetProvider } from "react-helmet-async";

const history = createBrowserHistory();

ReactDOM.render(
  <HelmetProvider>
    <Provider store={store}>
      <Router history={history}>
        <React.StrictMode>
          <Suspense fallback={<h1>Loading...</h1>}>
            <App />
          </Suspense>
        </React.StrictMode>
      </Router>
    </Provider>
  </HelmetProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
