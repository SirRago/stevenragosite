import { Router, Redirect, Route, browserHistory } from 'react-router'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App';
import './index.css';

import MusicApp from './components/MusicApp';

ReactDOM.render(
  <MusicApp />,
  document.getElementById('root')
);
