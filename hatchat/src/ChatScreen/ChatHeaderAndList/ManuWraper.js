import MenuBtn from "./MenuBtn";
import DropItemListBtns from "./DropItemListBtns";
import React from "react";
import {useNavigate} from "react-router-dom";

function ManuWrapper({handleLogout}) {
    return (
        <div id="menu-group-btn" className="btn-group">
            <MenuBtn/>
            <ul className="dropdown-menu dropdown-menu-end">
                <DropItemListBtns title="Change Profile Picture"/>
                <DropItemListBtns title="Archive"/>
                <DropItemListBtns title="Logout" onClick={handleLogout}/>
            </ul>
        </div>
    );
}

export default ManuWrapper;