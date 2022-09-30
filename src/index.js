import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Loader from "./components/Loader/Loader";
import { Provider } from "react-redux";
import store from "./store/store";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Suspense fallback={<Loader />}>
                <App />
            </Suspense>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
