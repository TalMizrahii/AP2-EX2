import './RegistrationScreen.css';
import GeneralBackground from "../GeneralComponents/GeneralBackground";
import RegisterBox from "../GeneralComponents/RegisterBox";
import FullNameInput from "../LoginScreen/FullNameInput";
import ConfirmPasswordInput from "./ConfirmPasswordInput";
import UserNameInput from "./UserNameInput";
import ProfilePictureText from "./ProfilePictureText";
import CreateAccountBtn from "./CreateAccountBtn";
import Copyright from "../GeneralComponents/Copyright";
import { useState } from "react";
import PasswordInputAndReq from "./PasswordInputAndReq";

function RegistrationScreen() {
    const [showPopup, setShowPopup] = useState(false);

    const handleShowPopup = () => {
        setShowPopup(true);
    };

    const handleHidePopup = () => {
        setShowPopup(false);
    };

    return (
        <>
            <GeneralBackground />
            <RegisterBox>
                <FullNameInput />
                <PasswordInputAndReq onChange={handleShowPopup} />
                <ConfirmPasswordInput />
                <UserNameInput />
                <ProfilePictureText />
                <CreateAccountBtn />
                <Copyright />
            </RegisterBox>
        </>
    );
}

export default RegistrationScreen;
