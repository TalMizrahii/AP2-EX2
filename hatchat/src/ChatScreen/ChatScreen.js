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
import DropdownMenu from "./ChatHeaderAndList/DropdownMenu";
import MenuBtn from "./ChatHeaderAndList/MenuBtn";
import ManuWrapper from "./ChatHeaderAndList/ManuWraper";
import SearchInput from "./ChatHeaderAndList/SearchInput";
import ListGroupOfContacts from "./ChatHeaderAndList/ListGroupOfContacts.";
import UserInList from "./ChatHeaderAndList/UserInList";
import UserSelfMsg from "./ChatHeaderAndList/UserSelfMsg";
import ContactResponseMsg from "./ChatHeaderAndList/ContactResponseMsg";

function ChatScreen() {
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
                                <li><a className="dropdown-item" href="#">Switch user</a></li>
                                <li><a className="dropdown-item" href="#">Change profile picture</a></li>
                                <li><a className="dropdown-item" href="#">Archive</a></li>
                                <li>
                                    <hr className="dropdown-divider"></hr>
                                </li>
                                <li><a className="dropdown-item" href="index.html">Logout</a></li>
                            </ManuWrapper>
                        </NavIcons>
                    </HeaderBox>
                    <SearchInput/>

                    <ListGroupOfContacts>
                        <UserInList/>
                        <UserInList/>
                        <UserInList/>
                        <UserInList/>
                        <UserInList/>
                        <UserInList/>
                        <UserInList/>
                        <UserInList/>
                    </ListGroupOfContacts>
                </ChatSpace>


                <div className="col-md-9 g-0 chatsList">
                    <h1 className="headerOfBox">
                        <div className="header">
                            <div id="chatNameLogo">
                                Hat Chat
                            </div>
                        </div>
                    </h1>
                    <div className="DivWithScroll">


                        <div id="chatBoxOfMessages">
                            <div id="FullMsgInputBar">
                                <i className="bi bi-emoji-smile"></i>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                     className="bi bi-emoji-smile" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                    <path
                                        d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
                                </svg>

                                <input type="text" id="msgInputBar" className="form-control"
                                       placeholder="Enter message"></input>
                                <button type="button" className="btn btn-success" id="sendBtn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                         fill="currentColor"
                                         className="bi bi-send" viewBox="0 0 16 16">
                                        <path
                                            d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"></path>
                                    </svg>
                                    send
                                </button>
                            </div>
                        </div>

                        <div className="pt-3 pe-3" data-mdb-perfect-scrollbar="true"
                             style={{position: 'relative', height: '400px'}}>

                            <ContactResponseMsg>
                                Like and subscribe!
                            </ContactResponseMsg>

                            <UserSelfMsg>
                                Got it! Thanks for the heads-up about the HATCHAT project for Advanced
                                Programming 2 at Bar
                                Ilan
                                University.
                            </UserSelfMsg>

                            <ContactResponseMsg>
                                Cool Man!!
                            </ContactResponseMsg>

                            <UserSelfMsg>
                                See you in sibuchiut!!
                            </UserSelfMsg>

                            <ContactResponseMsg>
                                Bye!
                            </ContactResponseMsg>

                            <UserSelfMsg>
                                See you.
                            </UserSelfMsg>

                        </div>
                    </div>
                </div>
            </GeneralContainer>
        </>
    );
}

export default ChatScreen;