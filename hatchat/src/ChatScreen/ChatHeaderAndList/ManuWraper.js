import MenuBtn from "./MenuBtn";
import DropItemListBtns from "./DropItemListBtns";
import React from "react";

function ManuWrapper({children}) {

    const handleLogout = () => {
        // Redirect to the desired URL
    };

    return (
        <div id="menu-group-btn" className="btn-group">
            <MenuBtn/>
            <ul className="dropdown-menu dropdown-menu-end">
                <DropItemListBtns title="Switch User"/>
                <DropItemListBtns title="Change Profile Picture"/>
                <DropItemListBtns title="Archive"/>
                <DropItemListBtns title="Logout" onClick={handleLogout}/>
            </ul>
        </div>
    );
}

export default ManuWrapper;