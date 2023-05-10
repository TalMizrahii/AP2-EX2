import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import PasswordRequirement from "./PasswordRequirement";

function PasswordInputAndReq({ onChange }) {
    const [showPopup, setShowPopup] = useState(false);

    const handleShowPopup = () => {
        setShowPopup(true);
    };

    const handleHidePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className="form-floating mb-3 position-relative">
            <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                onChange={onChange}
                onFocus={handleShowPopup}
                onBlur={handleHidePopup}
            />
            <label htmlFor="floatingPassword">Password</label>

            <Popup
                open={showPopup}
                onClose={handleHidePopup}
                trigger={<div className="trigger-div" />}
                position="right center"

            >
                <PasswordRequirement />
            </Popup>
        </div>
    );
}

export default PasswordInputAndReq;
