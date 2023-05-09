import React from 'react';
import ReactDOM from 'react-dom/client';
import LoginScreen from "./LoginScreen/LoginScreen";
import ChatScreen from "./ChatScreen/ChatScreen";
import RegistrationScreen from "./RegistrationScreen/RegistrationScreen";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <RegistrationScreen/>
        {/*<LoginScreen />*/}
    </React.StrictMode>
);
