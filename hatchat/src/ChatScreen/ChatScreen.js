import './ChatScreen.css'
import '../LoginScreen/LoginScreen.css'
import GeneralBackground from "../GeneralComponents/GeneralBackground";
import GeneralContainer from "./GeneralContainer";
import ChatSpace from "./ChatHeaderAndList/ChatSpace";
import ConversationSpace from "./ChatConversation/ConversationSpace";


function ChatScreen() {
    return (
        <>
            <GeneralBackground/>
            <GeneralContainer>
                {/*Contains all components about the list of contacts and the search and menu functionality.*/}
                <ChatSpace/>
                {/*Contains all components about the conversation with the contacts*/}
                <ConversationSpace/>
            </GeneralContainer>
        </>
    );
}

export default ChatScreen;