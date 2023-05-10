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
                <ChatSpace/>
                <ConversationSpace/>
            </GeneralContainer>
        </>
    );
}

export default ChatScreen;