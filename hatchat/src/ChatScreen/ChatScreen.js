import './ChatScreen.css'
import '../LoginScreen/LoginScreen.css'
import GeneralBackground from "../GeneralComponents/GeneralBackground";
import GeneralContainer from "./GeneralContainer";
import ChatSpace from "./ChatHeaderAndList/ChatSpace";
import ConversationSpace from "./ChatConversation/ConversationSpace";
import {useState} from "react";
import contactsData from "../DataBase/ContactsData";
import ContactMsg from "../DataBase/contactMsg";
import contactMsg from "../DataBase/contactMsg";

function ChatScreen() {
    const [searchContent, setSearchContent] = useState("");
    const [filteredContacts, setFilteredContacts] = useState(contactsData);
    const [msgArray, setMsgArray] = useState(ContactMsg);

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

    const handleNewMessage =(content) => {
        ContactMsg.push(content);
        setMsgArray([...contactMsg])
    }

    return (
        <>
            <GeneralBackground/>
            <GeneralContainer>
                {/*Contains all components about the list of contacts and the search and menu functionality.*/}
                <ChatSpace handleSearch={handleSearch} addContact={addContact} filteredContacts={filteredContacts}/>
                {/*Contains all components about the conversation with the contacts*/}
                <ConversationSpace msgArray={msgArray} handleNewMessage={handleNewMessage}/>
            </GeneralContainer>
        </>
    );
}

export default ChatScreen;