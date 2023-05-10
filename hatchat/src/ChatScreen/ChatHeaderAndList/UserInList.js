function UserInList({contact}){
    return (
        <li className="list-group-item list-group-item-action">
            <div className="user-img">
                <img className="dp"
                     src="https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg"
                     alt=""></img>
            </div>
            <div className="userName">{contact.name}</div>
            <div className="timeAndHour">{contact.lastSeen}</div>
            <div className="lastMsg">{contact.bio}</div>
        </li>
    );
}

export default UserInList;