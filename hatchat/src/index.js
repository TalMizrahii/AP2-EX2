import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import LoginScreen from './LoginScreen/LoginScreen';
import ChatScreen from './ChatScreen/ChatScreen';
import RegistrationScreen from './RegistrationScreen/RegistrationScreen';

const App = () => {
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');

    const handleUserNameChange = (e) => {
        setUserName(e.target.value);
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Outlet />}>
                    <Route
                        path="/"
                        element={
                            <LoginScreen
                                userName={userName}
                                password={password}
                                handleUserNameChange={handleUserNameChange}
                                handlePasswordChange={handlePasswordChange}
                            />
                        }
                    />
                    <Route path="/chat" element={<ChatScreen />} />
                    <Route
                        path="/register"
                        element={
                            <RegistrationScreen
                                userName={userName}
                                password={password}
                                handleUserNameChange={handleUserNameChange}
                                handlePasswordChange={handlePasswordChange}
                            />
                        }
                    />
                </Route>
            </Routes>
        </Router>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
