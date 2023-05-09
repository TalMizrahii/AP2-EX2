import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

import LoginScreen from './LoginScreen/LoginScreen';
import ChatScreen from './ChatScreen/ChatScreen';
import RegistrationScreen from './RegistrationScreen/RegistrationScreen';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Outlet />}>
                    <Route path="/" element={<ChatScreen />} />
                    <Route path="/chat" element={<ChatScreen />} />
                    <Route path="/register" element={<ChatScreen />} />
                </Route>
            </Routes>
        </Router>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));