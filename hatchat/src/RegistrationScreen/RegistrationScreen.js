import './RegistrationScreen.css';
import GeneralBackground from "../GeneralComponents/GeneralBackground";
import RegisterBox from "../GeneralComponents/RegisterBox";
import FullNameInput from "../LoginScreen/FullNameInput";
import PasswordInput from "../LoginScreen/PasswordInput";
import ConfirmPasswordInput from "./ConfirmPasswordInput";
import UserNameInput from "./UserNameInput";
import ProfilePictureText from "./ProfilePictureText";
import CreateAccountBtn from "./CreateAccountBtn";
import DisclaimerText from "../GeneralComponents/DisclaimerText";

function RegistrationScreen() {
    return (<>
            <GeneralBackground/>
            <RegisterBox>
                <FullNameInput/>
                <PasswordInput/>
                <ConfirmPasswordInput/>
                <UserNameInput/>
                <ProfilePictureText/>
                <CreateAccountBtn/>
                <DisclaimerText/>
            </RegisterBox>
        </>
    );
}

export default RegistrationScreen;