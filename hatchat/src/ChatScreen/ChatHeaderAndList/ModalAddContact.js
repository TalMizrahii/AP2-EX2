function ModalAddContact(){
    return (
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title-background modal-title fs-5"
                        id="exampleModalLabel">Add new
                        contact</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className="input-group rounded">
                        <input type="search" className="form-control rounded"
                               placeholder="Contact's identifier" aria-label="Search"
                               aria-describedby="search-addon"/>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary"
                            data-bs-dismiss="modal">Close
                    </button>
                    <button type="button" className="btn btn-primary">Add contact</button>
                </div>
            </div>
        </div>
    );
}
export default ModalAddContact;