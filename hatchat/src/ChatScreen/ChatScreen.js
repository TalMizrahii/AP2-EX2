import './ChatScreen.css'
import '../LoginScreen/LoginScreen.css'
import GeneralBackground from "../GeneralComponents/GeneralBackground";
import GeneralContainer from "./GeneralContainer";
import ChatSpace from "./ChatHeaderAndList/ChatSpace";
import HeaderBox from "./ChatHeaderAndList/HeaderBox";
import UserImageLeftTopCorner from "./ChatHeaderAndList/UserImageLeftTopCorner";
import AddContactIcon from "./ChatHeaderAndList/AddContactIcon";
import NavIcons from "./ChatHeaderAndList/NavIcons";
import ModalAddContact from "./ChatHeaderAndList/ModalAddContact";
import ModalAddContactWrap from "./ChatHeaderAndList/ModalAddContactWrap";
import ManuWrapper from "./ChatHeaderAndList/ManuWraper";
import SearchInput from "./ChatHeaderAndList/SearchInput";
import ListGroupOfContacts from "./ChatHeaderAndList/ListGroupOfContacts.";
import UserInList from "./ChatHeaderAndList/UserInList";
import UserSelfMsg from "./ChatConversation/UserSelfMsg";
import ContactResponseMsg from "./ChatConversation/ContactResponseMsg";
import ChatSpaceHeader from "./ChatConversation/ChatSpaceHeader";
import ChatSpaceMsges from "./ChatConversation/ChatSpaceMsges";
import MsgWrapperScroll from "./ChatConversation/MsgWrapperScroll";
import InputMsgLowerBar from "./ChatConversation/inputMsgLowerBar";
import MsgScrollerGood from "./ChatConversation/MsgScrollerGood";
import DropItemListBtns from "./ChatHeaderAndList/DropItemListBtns";
import {useState} from "react";
import contactsData from "../DataBase/ContactsData";


function ChatScreen() {

    const [filterList, setFilterList] = useState(contactsData);

    const doSearch = function (content){
        setFilterList(contactsData.filter((a) =>
            a.name.includes(content)
        ));
    }



    return (
        <>
            <GeneralBackground/>
            <GeneralContainer>
                <ChatSpace>
                    <HeaderBox>
                        <UserImageLeftTopCorner/>
                        <NavIcons>
                            <AddContactIcon/>
                            <ModalAddContactWrap>
                                <ModalAddContact/>
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

                    <ListGroupOfContacts filter={filterList} />

                </ChatSpace>
                <ChatSpaceMsges>
                    <ChatSpaceHeader/>
                    <MsgWrapperScroll>
                        <InputMsgLowerBar/>
                        <MsgScrollerGood>
                            <ContactResponseMsg>
                                Like and subscribe!
                            </ContactResponseMsg>

                            <UserSelfMsg>
                                Got it! Thanks for the heads-up about the HATCHAT project for Advanced
                                Programming 2 at Bar
                                Ilan
                                University.
                            </UserSelfMsg>


                        </MsgScrollerGood>
                    </MsgWrapperScroll>
                </ChatSpaceMsges>
            </GeneralContainer>
        </>
    );
}

export default ChatScreen;