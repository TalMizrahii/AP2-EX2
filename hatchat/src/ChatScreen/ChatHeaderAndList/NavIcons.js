import AddContactIcon from "./AddContactIcon";
import ModalAddContactWrap from "./ModalRelated/ModalAddContactWrap";
import ModalAddContact from "./ModalRelated/ModalAddContact";
import ManuWrapper from "./ManuWraper";
import React from "react";

function NavIcons({addContact, filteredContacts}) {
    return (
        <div className="nav-icons">
            <AddContactIcon/>
            <ModalAddContactWrap>
                <ModalAddContact filteredContacts={filteredContacts} addContact={addContact}/>
            </ModalAddContactWrap>
            <ManuWrapper/>
        </div>
    );
}

export default NavIcons;