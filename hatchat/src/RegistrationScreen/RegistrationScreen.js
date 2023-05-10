import './RegistrationScreen.css';
import GeneralBackground from "../GeneralComponents/GeneralBackground";
import RegisterBox from "../GeneralComponents/RegisterBox";
import FullNameInput from "../LoginScreen/FullNameInput";
import PasswordInputAndReq from "./PasswordInputAndReq";
import ConfirmPasswordInput from "./ConfirmPasswordInput";
import UserNameInput from "./UserNameInput";
import ProfilePictureText from "./ProfilePictureText";
import CreateAccountBtn from "./CreateAccountBtn";
import Copyright from "../GeneralComponents/Copyright";

function RegistrationScreen() {
    return (<>
            <GeneralBackground/>
            <RegisterBox>
                <FullNameInput/>
                <PasswordInputAndReq/>
                <ConfirmPasswordInput/>
                <UserNameInput/>
                <ProfilePictureText/>
                <CreateAccountBtn/>
                <Copyright/>
            </RegisterBox>
        </>
    );
}

export default RegistrationScreen;