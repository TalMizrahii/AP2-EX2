import ChatSpaceHeader from "./ChatSpaceHeader";
import MsgWrapperScroll from "./MsgWrapperScroll";
import InputMsgLowerBar from "./inputMsgLowerBar";
import MsgScrollerGood from "./MsgScrollerGood";
import ContactResponseMsg from "./ContactResponseMsg";
import UserSelfMsg from "./UserSelfMsg";

function ConversationSpace({ handleNewMessage, msgArray }) {
    return (
        <div className="col-md-9 g-0 chatsList">
            <ChatSpaceHeader />
            <MsgWrapperScroll>
                <InputMsgLowerBar handleNewMessage={handleNewMessage} />
                <MsgScrollerGood>
                    <ContactResponseMsg>
                        Like and subscribe!
                    </ContactResponseMsg>
                    {msgArray.map((msg, index) => (
                        <UserSelfMsg key={index}>{msg}</UserSelfMsg>
                    ))}
                </MsgScrollerGood>
            </MsgWrapperScroll>
        </div>
    );
}

export default ConversationSpace;