function ContactResponseMsg({ children, timestamp }) {


    return (
        <div className="d-flex flex-row justify-content-end">
            <div>
                <p className="ContentMsg small p-2 ms-3 mb-1 rounded-3" style={{ backgroundColor: '#f5f6f7' }}>
                    {children}
                </p>
                <p className="small ms-3 mb-3 rounded-3 text-muted timeHourContact">Time and date</p>
            </div>
            <img
                className="chatImg"
                src="https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg"
                alt="avatar 1"
            ></img>
        </div>
    );
}

export default ContactResponseMsg;
