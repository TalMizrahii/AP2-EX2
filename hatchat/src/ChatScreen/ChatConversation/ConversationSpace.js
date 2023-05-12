import ChatSpaceHeader from "./ChatSpaceHeader";
import MsgWrapperScroll from "./MsgWrapperScroll";
import InputMsgLowerBar from "./inputMsgLowerBar";
import MsgScrollerGood from "./MsgScrollerGood";
import ContactResponseMsg from "./ContactResponseMsg";
import UserSelfMsg from "./UserSelfMsg";

function ConversationSpace() {



    return (<div className="col-md-9 g-0 chatsList">
        <ChatSpaceHeader/>
        <MsgWrapperScroll>
            <InputMsgLowerBar/>
            <MsgScrollerGood>
                <ContactResponseMsg>
                    Like and subscribe!
                </ContactResponseMsg>
                <UserSelfMsg>
                    Got it! Thanks for the heads-up about the HAT CHAT project for Advanced
                    Programming 2 at Bar
                    Ilan
                    University.
                </UserSelfMsg>
            </MsgScrollerGood>
        </MsgWrapperScroll>
    </div>);
}

export default ConversationSpace;