import HeaderBox from "./HeaderBox";
import UserImageLeftTopCorner from "./UserImageLeftTopCorner";
import NavIcons from "./NavIcons";
import SearchInput from "./SearchInput";
import ListGroupOfContacts from "./ListGroupOfContacts.";

function ChatSpace({handleSearch, addContact, filteredContacts}) {


    return (
        <>
            <div className="col-md-3 g-0 chatScreen">
                <HeaderBox>
                    <UserImageLeftTopCorner/>
                    <NavIcons addContact={addContact} />
                </HeaderBox>
                <SearchInput handleSearch={handleSearch}/>
                <ListGroupOfContacts filter={filteredContacts}/>
            </div>
        </>
    );
}

export default ChatSpace;
