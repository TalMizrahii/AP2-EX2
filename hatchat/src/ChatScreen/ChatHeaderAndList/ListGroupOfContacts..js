function ListGroupOfContacts({children}) {
    return (
        <div id="listScroll">
            <ul className="list-group">
                {children}
            </ul>
        </div>
    );
}

export default ListGroupOfContacts;