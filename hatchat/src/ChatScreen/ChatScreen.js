import './ChatScreen.css'
import '../LoginScreen/LoginScreen.css'
import GeneralBackground from "../GeneralComponents/GeneralBackground";
import GeneralContainer from "./GeneralContainer";
import ChatSpace from "./ChatHeaderAndList/ChatSpace";
import ConversationSpace from "./ChatConversation/ConversationSpace";
import {useState} from "react";
import contactsData from "../DataBase/ContactsData";
// import ContactMsg from "../DataBase/contactMsg";
// import contactMsg from "../DataBase/contactMsg";

function ChatScreen() {
    const [searchContent, setSearchContent] = useState("");
    const [filteredContacts, setFilteredContacts] = useState(contactsData);
    const [currentContact, setCurrentContact] = useState({ MsgData: [] });

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

    const handleContactChoice = (content) => {
        const selectedContact = filteredContacts.find((contact) => contact.name === content.name);
        setCurrentContact(selectedContact);
    };


    const addContact = (contact) => {
        contactsData.push(contact);
        setFilteredContacts([...contactsData]);
        handleContactChoice(contact);
    };

    const handleNewMessage = (content) => {
        if (!currentContact) {
            return;
        }

        setCurrentContact((prevContact) => ({
            ...prevContact,
            MsgData: [...prevContact.MsgData, content],
        }));
    };


    return (
        <>
            <GeneralBackground/>
            <GeneralContainer>
                {/*Contains all components about the list of contacts and the search and menu functionality.*/}
                <ChatSpace handleContactChoice={handleContactChoice} handleSearch={handleSearch} addContact={addContact}
                           filteredContacts={filteredContacts}/>
                {/*Contains all components about the conversation with the contacts*/}
                <ConversationSpace currentContact={currentContact} handleNewMessage={handleNewMessage}/>
            </GeneralContainer>
        </>
    );
}

export default ChatScreen;