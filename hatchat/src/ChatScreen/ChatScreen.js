import './ChatScreen.css'
import '../LoginScreen/LoginScreen.css'
import GeneralBackground from "../GeneralComponents/GeneralBackground";
import GeneralContainer from "./GeneralContainer";
import ChatSpace from "./ChatHeaderAndList/ChatSpace";
import ConversationSpace from "./ChatConversation/ConversationSpace";
import {useState} from "react";
import contactsData from "../DataBase/ContactsData";
import ContactMsg from "../DataBase/contactMsg";
import {useLocation} from "react-router";

function ChatScreen() {
    const {state}=useLocation();
    const {fullName,userName,userPassword,profilePicture}=state;
    console.log(fullName,userName,userPassword,profilePicture);
    const [searchContent, setSearchContent] = useState("");
    const [filteredContacts, setFilteredContacts] = useState(contactsData);
    const [contactsMsg, setContactMsg] = useState(ContactMsg);
    const [currentContactId, setCurrentContactId] = useState(-1);

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
        setCurrentContactId(contact.id);
    };

    const handleNewMessage = (content) => {
        const newMessage = {
            text: content.text,
            timeAndDate: content.timeAndDate,
        };

        setContactMsg((prevContactMsg) => {
            const updatedContactMsg = {...prevContactMsg};
            updatedContactMsg[currentContactId] = [
                ...(updatedContactMsg[currentContactId] || []),
                newMessage
            ];
            return updatedContactMsg;
        });
    };

    const handleContactSwitch = (content) => {
        setCurrentContactId(content);
    }

    console.log(contactsData)
    let currentContact = contactsData.find((contact) => contact.id === currentContactId);

    return (
        <>
            <GeneralBackground/>
            <GeneralContainer>
                {/*Contains all components about the list of contacts and the search and menu functionality.*/}
                <ChatSpace handleContactSwitch={handleContactSwitch} handleSearch={handleSearch} addContact={addContact}
                           filteredContacts={filteredContacts}/>
                {/*Contains all components about the conversation with the contacts*/}
                <ConversationSpace currentContact={currentContact} currentContactId={currentContactId}
                                   contactsMsg={contactsMsg} handleNewMessage={handleNewMessage}/>
            </GeneralContainer>
        </>
    );
}

export default ChatScreen;