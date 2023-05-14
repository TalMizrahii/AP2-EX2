import UserInList from "./UserInList";

function ListGroupOfContacts({filter, handleContactSwitch}) {

    const filterList = filter.map((contact, key) =>{
       return <UserInList  handleContactSwitch={handleContactSwitch}  key={key} contact={contact} />
    });

    return (
        <div id="listScroll">
            <ul className="list-group">
                {filterList}
            </ul>
        </div>
    );
}

export default ListGroupOfContacts;