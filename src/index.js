import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import {Router, Route} from 'react-router';

import MainApp from './components/MainApp';

ReactDOM.render(
  <MainApp />,
  document.getElementById('root')
);
