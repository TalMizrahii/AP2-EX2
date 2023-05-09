import React from 'react';
import ReactDOM from 'react-dom/client';
import LoginScreen from "./LoginScreen/LoginScreen";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        {/*<ChatScreen/>*/}
        <LoginScreen />
    </React.StrictMode>
);
