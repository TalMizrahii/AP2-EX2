import React, { useState } from 'react';
import './RegistrationScreen.css';
import GeneralBackground from '../GeneralComponents/GeneralBackground';
import RegisterBox from '../GeneralComponents/RegisterBox';
import UserNameInput from '../LoginScreen/UserNameInput';
import ConfirmPasswordInput from './ConfirmPasswordInput';
import FullNameInput from './FullNameInput';
import ProfilePictureText from './ProfilePictureText';
import CreateAccountBtn from './CreateAccountBtn';
import Copyright from '../GeneralComponents/Copyright';
import PasswordInputAndReq from './PasswordInputAndReq';
import { users } from '../DataBase/Database';

function RegistrationScreen() {
    const [fullName, setFullName] = useState('');
    const [profilePicture, setProfilePicture] = useState(null);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [isImageUploaded, setIsImageUploaded] = useState(false);

    const handleUserNameChange = (e) => {
        setUserName(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleFullNameChange = (e) => {
        setFullName(e.target.value);
    };

    const handleProfilePictureChange = (file) => {
        setIsImageUploaded(true);
        setProfilePicture(file);
    };

    const handleCreateAccount = () => {
        if (
            !fullName ||
            !profilePicture ||
            !password ||
            !confirmPassword ||
            !userName ||
            !isImageUploaded
        ) {
            alert('Please fill in all the required fields.');
            return;
        }

        const newUser = {
            fullName,
            userName,
            password,
            profilePicture,
        };

        users.push(newUser);
        console.log('New User:', newUser);

        setFullName('');
        setPassword('');
        setConfirmPassword('');
        setUserName('');
        setProfilePicture(null);
        setIsImageUploaded(false);
    };

    return (
        <>
            <GeneralBackground />
            <RegisterBox>
                <FullNameInput handleFullNameClick={handleFullNameChange} />
                <PasswordInputAndReq onChange={handlePasswordChange} password={password} />
                <ConfirmPasswordInput password={password} />
                <UserNameInput handleUserNameClick={handleUserNameChange} />
                <ProfilePictureText handlePicClick={handleProfilePictureChange} />
                <CreateAccountBtn handleCreate={handleCreateAccount} isImageUploaded={isImageUploaded} />
                <Copyright />
            </RegisterBox>
        </>
    );
}

export default RegistrationScreen;
