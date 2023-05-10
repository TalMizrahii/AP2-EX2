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
import {useState} from "react";
import contactsData from "../../DataBase/ContactsData";

function ChatSpace() {

    const [filterList, setFilterList] = useState(contactsData);

    const doSearch = function (content) {
        setFilterList(contactsData.filter((a) =>
            a.name.includes(content)
        ));
    }
    const addContact = function (contact) {
        setFilterList((prevList) => [...prevList, contact]);
    };

    return (<>
            <div className=" col-md-3 g-0 chatScreen">
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
                <SearchInput doSearch={doSearch}/>
                <ListGroupOfContacts filter={filterList}/>

            </div>
        </>
    );
}

export default ChatSpace;