import React from "react";

function UserSelfMsg({msg, currentContact}) {

    return (
        <div className="chatText d-flex flex-row justify-content-start">
            <img
                className="chatImg"
                src={currentContact.profilePic}
                alt="avatar 1"
            />
            <div>
                <p className="ContentMsg small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                    {msg.text}
                </p>
                <p className="small me-3 mb-3 rounded-3 text-muted float-end"> {msg.timeAndDate}
                </p>
            </div>
        </div>
    );
}

export default UserSelfMsg;
