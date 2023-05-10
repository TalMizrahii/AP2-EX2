import UserInList from "./UserInList";

function ListGroupOfContacts({filter}) {

    const filterList = filter.map((contact, key) =>{
       return <UserInList key={key} contact={contact} />
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