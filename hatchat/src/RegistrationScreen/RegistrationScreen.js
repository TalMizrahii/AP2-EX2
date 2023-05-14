import './RegistrationScreen.css';
import GeneralBackground from "../GeneralComponents/GeneralBackground";
import RegisterBox from "../GeneralComponents/RegisterBox";
import UserNameInput from "../LoginScreen/UserNameInput";
import ConfirmPasswordInput from "./ConfirmPasswordInput";
import FullNameInput from "./FullNameInput";
import ProfilePictureText from "./ProfilePictureText";
import CreateAccountBtn from "./CreateAccountBtn";
import Copyright from "../GeneralComponents/Copyright";
import { useState } from "react";
import PasswordInputAndReq from "./PasswordInputAndReq";
import { users } from '../DataBase/Database';

function RegistrationScreen({handleUserNameChange, handlePasswordChange,userName,password}) {

    const [fullName, setFullName] = useState('');
    const [profilePicture, setProfilePicture] = useState('');
    const [passwordReg, setPasswordReg] = useState('');
    const [userNameReq, setUserNameReq] = useState('');

    const handleFullNameChange = (e) => {
        setFullName(e.target.value);
    };



    const handleProfilePictureChange = (e) => {
        setProfilePicture(e.target.value);
    };

    const handlePasswordReg = (e) => {
        setPasswordReg(e.target.value);
        handlePasswordChange(passwordReg);
    };

    const handleUserNameReg = (e) => {
        setUserNameReq(e.target.value);
        handleUserNameChange(userNameReq);
    };

    const handleCreateAccount = () => {
        const existingUser = users.find((user) => user.userName === userName);
        if (existingUser) {
            alert('Username already exists. Please choose a different username.');
            return;
        }

        const newUser = {
            fullName,
            userName,
            password,
            profilePicture,
        };

        users.push(newUser);

        console.log('User Data:', { fullName, userName, password, profilePicture });

        setFullName('');
        handleUserNameChange({ target: { value: '' } });
        handlePasswordChange({ target: { value: '' } });
        setProfilePicture('');
    };

    return (
        <>
            <GeneralBackground />
            <RegisterBox>
                <FullNameInput onChange={handleFullNameChange} />
                <PasswordInputAndReq onChange={handlePasswordReg} password={passwordReg} />
                <ConfirmPasswordInput password={passwordReg} />
                <UserNameInput onChange={handleUserNameReg} />
                <ProfilePictureText onChange={handleProfilePictureChange} />
                <CreateAccountBtn onClick={handleCreateAccount} />
                <Copyright />
            </RegisterBox>
        </>
    );
}

export default RegistrationScreen;
