import './LoginScreen.css';
import GeneralBackground from '../GeneralComponents/GeneralBackground'
import FullNameInput from "./FullNameInput";
import PasswordInput from "./PasswordInput";
import LoginButton from "./LoginButton";
import DisclaimerText from "../GeneralComponents/DisclaimerText";
import RegisterBox from "../GeneralComponents/RegisterBox";
function LoginScreen() {
    return (
        <>
            <GeneralBackground />
            <RegisterBox>
                <form>
                    <FullNameInput />
                    <PasswordInput />
                    <LoginButton />
                    <DisclaimerText />
                </form>
            </RegisterBox>
        </>
    );
}

export default LoginScreen;