import './LoginScreen.css';
import GeneralBackground from '../GeneralComponents/GeneralBackground'
import UserNameInput from "./UserNameInput";
import PasswordInput from "./PasswordInput";
import LoginButton from "./LoginButton";
import DisclaimerText from "../GeneralComponents/DisclaimerText";

function LoginScreen() {
    return (
        <>
            <GeneralBackground/>
            <div className="register">
                <h1 id="chatName">
                    Hat Chat
                </h1>
                <form>
                    <UserNameInput/>
                    <PasswordInput/>
                    <LoginButton/>
                    <DisclaimerText/>
                </form>
            </div>
        </>
    );
}

export default LoginScreen;