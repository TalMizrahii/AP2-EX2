import './LoginScreen.css';
import GeneralBackground from '../GeneralComponents/GeneralBackground';
import LoginButton from "./LoginButton";
import FullNameInput from "./FullNameInput";
import PasswordInput from "./PasswordInput";
import {useState} from 'react';
import DisclaimerText from "../GeneralComponents/DisclaimerText";
import RegisterBox from "../GeneralComponents/RegisterBox";

function LoginScreen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    return (
        <>
            <GeneralBackground/>
            <RegisterBox>
                <form>
                    <FullNameInput onChange={handleUsernameChange}/>
                    <PasswordInput onChange={handlePasswordChange}/>
                    <LoginButton username={username} password={password}/>
                    <DisclaimerText/>
                </form>
            </RegisterBox>
        </>
    );
}

export default LoginScreen;
