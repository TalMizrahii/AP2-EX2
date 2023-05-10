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
import ConversationSpace from "./ChatConversation/ConversationSpace";
import MsgWrapperScroll from "./ChatConversation/MsgWrapperScroll";
import InputMsgLowerBar from "./ChatConversation/inputMsgLowerBar";
import MsgScrollerGood from "./ChatConversation/MsgScrollerGood";
import DropItemListBtns from "./ChatHeaderAndList/DropItemListBtns";
import {useState} from "react";
import contactsData from "../DataBase/ContactsData";


function ChatScreen() {




    return (
        <>
            <GeneralBackground/>
            <GeneralContainer>
                <ChatSpace/>
                <ConversationSpace/>
            </GeneralContainer>
        </>
    );
}

export default ChatScreen;