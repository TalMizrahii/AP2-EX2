import React from "react";

function UserSelfMsg({ children }) {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <div className="d-flex flex-row justify-content-start">
            <img
                className="chatImg"
                src="https://images.squarespace-cdn.com/content/v1/5c76de607fdcb8facd765433/1592926322727-OL8OFAUGXH0Q5XMF6AXC/IMG-4874.JPG"
                alt="avatar 1"
            />
            <div>
                <p className="ContentMsg small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                    {children}
                </p>
                <p className="small me-3 mb-3 rounded-3 text-muted float-end">
                    {formattedDate}
                </p>
            </div>
        </div>
    );
}

export default UserSelfMsg;
