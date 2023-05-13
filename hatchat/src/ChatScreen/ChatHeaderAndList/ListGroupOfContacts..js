import UserInList from "./UserInList";

function ListGroupOfContacts({filter, handleContactChoice}) {

    const filterList = filter.map((contact, key) =>{
       return <UserInList handleContactChoice={handleContactChoice} key={key} contact={contact} />
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