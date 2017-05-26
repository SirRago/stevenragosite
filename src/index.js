

import MusicApp from './components/MusicApp';


import './index.css'
//import 'bootstrap/dist/css/bootstrap-theme.css'
import 'bootstrap/dist/css/bootstrap.css'



import React, { Component } from 'react';
import { render } from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import Header from './components/Header'


render(
    <Router history={hashHistory}>
        <Route path="/" component={Header}>
            <IndexRoute component={MusicApp} />
        </Route>
    </Router>,
    document.getElementById('root')
);







