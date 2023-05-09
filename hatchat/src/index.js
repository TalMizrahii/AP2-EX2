import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Switch } from "react-router";

import LoginScreen from './LoginScreen/LoginScreen';
import ChatScreen from './ChatScreen/ChatScreen';
import RegistrationScreen from './RegistrationScreen/RegistrationScreen';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={LoginScreen}/>
                <Route path="/chat" component={ChatScreen}/>
                <Route path="/register" component={RegistrationScreen}/>
            </Switch>
        </Router>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));
