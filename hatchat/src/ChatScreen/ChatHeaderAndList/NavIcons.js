import AddContactIcon from "./AddContactIcon";
import ModalAddContactWrap from "./ModalAddContactWrap";
import ModalAddContact from "./ModalAddContact";
import ManuWrapper from "./ManuWraper";
import React from "react";

function NavIcons({addContact}) {
    return (
        <div className="nav-icons">
            <AddContactIcon/>
            <ModalAddContactWrap>
                <ModalAddContact addContact={addContact}/>
            </ModalAddContactWrap>
            <ManuWrapper/>
        </div>
    );
}

export default NavIcons;