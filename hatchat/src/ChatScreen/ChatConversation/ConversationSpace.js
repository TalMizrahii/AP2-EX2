import ChatSpaceHeader from "./ChatSpaceHeader";
import MsgWrapperScroll from "./MsgWrapperScroll";
import InputMsgLowerBar from "./inputMsgLowerBar";
import MsgScrollerGood from "./MsgScrollerGood";
import ContactResponseMsg from "./ContactResponseMsg";
import UserSelfMsg from "./UserSelfMsg";

function ConversationSpace({ handleNewMessage, currentContact }) {
    if (!currentContact) {
        return (
            <div className="col-md-9 g-0 chatsList">
                <ChatSpaceHeader />
                <MsgWrapperScroll>
                    <InputMsgLowerBar handleNewMessage={handleNewMessage} />
                    <MsgScrollerGood>
                        <div> No messages to display</div>
                    </MsgScrollerGood>
                </MsgWrapperScroll>
            </div>
        );
    }

    return (
        <div className="col-md-9 g-0 chatsList">
            <ChatSpaceHeader />
            <MsgWrapperScroll>
                <InputMsgLowerBar handleNewMessage={handleNewMessage} />
                <MsgScrollerGood>
                    <ContactResponseMsg>
                        Like and subscribe!
                    </ContactResponseMsg>
                    {currentContact.MsgData && currentContact.MsgData.length > 0 ? (
                        currentContact.MsgData.map((msg, index) => (
                            <UserSelfMsg key={index} msg={msg} />
                        ))
                    ) : (
                        <div>No messages to display</div>
                    )}
                </MsgScrollerGood>
            </MsgWrapperScroll>
        </div>
    );
}

export default ConversationSpace;

