import React, { useState } from 'react';
import PasswordRequirement from "../RegistrationScreen/PasswordRequirement";
import "./Popup.css"

const Popup = ({ trigger }) => {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <div id="popup" >
          <PasswordRequirement/>
        </div>
    );
};

export default Popup;
