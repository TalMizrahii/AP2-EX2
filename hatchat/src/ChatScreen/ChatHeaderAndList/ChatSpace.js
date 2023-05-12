import HeaderBox from "./HeaderBox";
import UserImageLeftTopCorner from "./UserImageLeftTopCorner";
import NavIcons from "./NavIcons";
import AddContactIcon from "./AddContactIcon";
import ModalAddContactWrap from "./ModalAddContactWrap";
import ModalAddContact from "./ModalAddContact";
import ManuWrapper from "./ManuWraper";
import DropItemListBtns from "./DropItemListBtns";
import SearchInput from "./SearchInput";
import ListGroupOfContacts from "./ListGroupOfContacts.";
// import {useState} from "react";
import contactsData from "../../DataBase/ContactsData";
import React, {useState} from "react";

// import contactsData from "../../DataBase/ContactsData";

function ChatSpace() {
    const [searchContent, setSearchContent] = useState("");
    const [filteredContacts, setFilteredContacts] = useState(contactsData);

    const handleSearch = (content) => {
        setSearchContent(content);
        if (content === "") {
            setFilteredContacts(contactsData);
        } else {
            const filtered = contactsData.filter((contact) =>
                contact.name.includes(content)
            );
            setFilteredContacts(filtered);
        }
    };

    const addContact = (contact) => {
        contactsData.push(contact);
        setFilteredContacts([...contactsData]);
    };

    return (
        <>
            <div className="col-md-3 g-0 chatScreen">
                <HeaderBox>
                    <UserImageLeftTopCorner/>
                    <NavIcons>
                        <AddContactIcon/>
                        <ModalAddContactWrap>
                            <ModalAddContact addContact={addContact}/>
                        </ModalAddContactWrap>
                        <ManuWrapper>
                            <DropItemListBtns>Switch user</DropItemListBtns>
                            <DropItemListBtns>Change profile picture</DropItemListBtns>
                            <DropItemListBtns>Archive</DropItemListBtns>
                            <DropItemListBtns>Logout</DropItemListBtns>
                        </ManuWrapper>
                    </NavIcons>
                </HeaderBox>
                <SearchInput handleSearch={handleSearch}/>
                <ListGroupOfContacts filter={filteredContacts}/>
            </div>
        </>
    );
}

export default ChatSpace;
