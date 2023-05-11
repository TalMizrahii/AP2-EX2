import React, { useState } from 'react';
import Popup from "../GeneralComponents/Popup";

function PasswordInputAndReq() {
    const [showPopup, setShowPopup] = useState(false);
    const [password, setPassword] = useState('');

    const handleShowPopup = () => {
        setShowPopup(true);
    };

    const handleHidePopup = () => {
        setShowPopup(false);
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);

    };

    return (
        <div className="form-floating mb-3 position-relative">
            <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                onFocus={handleShowPopup}
                onBlur={handleHidePopup}
                onChange={handlePasswordChange}
            />
            <label htmlFor="floatingPassword">Password</label>
            {showPopup && <Popup password={password} />}
        </div>
    );
}

export default PasswordInputAndReq;
