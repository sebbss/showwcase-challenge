import React, { Component } from 'react';
import {
  Route, BrowserRouter, Switch,
} from 'react-router-dom';
import HomePage from './components/Index';
import Main from './components/Homepage';


export default class Routes extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Route exact path='/' component={HomePage} name='home'/>
                        <Route path='/main' component={Main} name='main'/>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

