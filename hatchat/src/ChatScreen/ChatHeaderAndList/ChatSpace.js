import HeaderBox from "./HeaderBox";
import UserImageLeftTopCorner from "./UserImageLeftTopCorner";
import NavIcons from "./NavIcons";
import SearchInput from "./SearchInput";
import ListGroupOfContacts from "./ListGroupOfContacts.";

function ChatSpace({profilePicture, handleSearch, addContact, filteredContacts, handleContactSwitch}) {

    return (
        <>
            <div className="col-md-3 g-0 chatScreen">
                <HeaderBox>
                    <UserImageLeftTopCorner profilePicture={profilePicture}/>
                    <NavIcons filteredContacts={filteredContacts} addContact={addContact} />
                </HeaderBox>
                <SearchInput handleSearch={handleSearch}/>
                <ListGroupOfContacts handleContactSwitch={handleContactSwitch} filter={filteredContacts}/>
            </div>
        </>
    );
}

export default ChatSpace;
