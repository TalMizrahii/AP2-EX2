function ContactResponseMsg({children, currentContact}) {


    return (
        <div className="chatText d-flex flex-row justify-content-end">
            <div>
                <p className="ContentMsg small p-2 ms-3 mb-1 rounded-3" style={{backgroundColor: '#f5f6f7'}}>
                    {children}
                </p>
                <p className="small ms-3 mb-3 rounded-3 text-muted timeHourContact">Time and date</p>
            </div>
            <img
                className="chatImg"
                src={currentContact.profilePic}
                alt="avatar 1"
            ></img>
        </div>
    );
}

export default ContactResponseMsg;
