import MenuBtn from "./MenuBtn";
import DropItemListBtns from "./DropItemListBtns";
import React from "react";

function ManuWrapper({children}) {
    return (
        <div id="menu-group-btn" className="btn-group">
            <MenuBtn/>
            <ul className="dropdown-menu dropdown-menu-end">
                <DropItemListBtns title="Switch User"/>
                <DropItemListBtns title="Change Profile Picture"/>
                <DropItemListBtns title="Archive"/>
                <DropItemListBtns title="Logout"/>
            </ul>
        </div>
    );
}

export default ManuWrapper;