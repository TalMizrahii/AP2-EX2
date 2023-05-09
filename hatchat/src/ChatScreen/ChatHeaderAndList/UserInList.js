function UserInList(){
    return (
        <li className="list-group-item list-group-item-action">
            <div className="user-img">
                <img className="dp"
                     src="https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg"
                     alt=""></img>
            </div>
            <div className="userName">Mister Cat</div>
            <div className="timeAndHour">19/04/2023 22:55</div>
            <div className="lastMsg">Hello! my name is Cat.</div>
        </li>
    );
}

export default UserInList;