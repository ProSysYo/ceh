import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import { store } from './store/store';
import { ConfigProvider } from 'antd';
import ru_RU from 'antd/lib/locale/ru_RU';
import 'moment/locale/ru';

ReactDOM.render(
  <ConfigProvider locale={ru_RU}>
      <Provider store={store}>
          <App />
      </Provider>
    </ConfigProvider>,
  document.getElementById('root')
);
