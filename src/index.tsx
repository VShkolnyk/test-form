import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {Provider} from "react-redux";
import {setupStore} from "./store/store";
import {createGlobalStyle} from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`
const store = setupStore();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Global />
      <App/>
    </Provider>
  </React.StrictMode>
)
;
