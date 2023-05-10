import React, { useState } from 'react';
import { users } from '../../DataBase/Database';

function InputMsgLowerBar({ children }) {
    const [textMsg, setTextMsg] = useState('');

    const handleNewMsg = (event) => {
        event.preventDefault();

        // Perform actions with the user input
        console.log(textMsg);

        // Clear the input field after sending the message
        setTextMsg('');
    };

    const handleInputChange = (event) => {
        setTextMsg(event.target.value);
    };

    return (
        <div id="FullMsgInputBar">
            {/* Icons and other elements */}
            <input
                type="text"
                id="msgInputBar"
                className="form-control"
                placeholder="Enter message"
                value={textMsg}
                onChange={handleInputChange}
            ></input>
            <button type="button" className="btn btn-success" onClick={handleNewMsg} id="sendBtn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                     fill="currentColor"
                     className="bi bi-send" viewBox="0 0 16 16">
                    <path
                        d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"></path>
                </svg>
                send
            </button>
        </div>
    );
}

export default InputMsgLowerBar;
