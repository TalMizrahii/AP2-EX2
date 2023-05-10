import React, {useState} from "react";

function ModalAddContact({addContact}) {
    const [contactData, setContactData] = useState({
        name: "",
        bio: "Hello",
        lastSeen: "19/04/2023 22:55",
    });

    const handleChange = (event) => {
        const {name, value} = event.target;

        setContactData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleAddContact = () => {
        if(contactData.name === ""){
            return;
        }
        addContact(contactData);
        // Reset the input fields
        setContactData({
            name: "",
            bio: "",
            lastSeen: "",
        });
    };

    return (
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title-background modal-title fs-5" id="exampleModalLabel">
                        Add new contact
                    </h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className="input-group rounded">
                        <input
                            type="text"
                            className="form-control rounded"
                            placeholder="Contact's name"
                            aria-label="Contact's name"
                            aria-describedby="name-addon"
                            name="name"
                            value={contactData.name}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                        Close
                    </button>
                    <button type="button" className="btn btn-primary" onClick={handleAddContact}>
                        Add contact
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ModalAddContact;
