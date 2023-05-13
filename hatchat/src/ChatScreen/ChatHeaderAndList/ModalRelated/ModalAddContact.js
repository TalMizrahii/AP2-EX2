import React, {useState} from "react";
import ModalInputIdOrName from "./ModalInputIdOrName";
import AddContactBtn from "./AddContactBtn";
import CloseModalBtn from "./CloseModalBtn";
import ModalTitle from "./ModalTitle";

function ModalAddContact({addContact, filteredContacts}) {
    const [contactData, setContactData] = useState({
        id: null,
        name: "",
        bio: "Hello",
        lastSeen: "19/04/2023 22:55",
        profilePic: ""
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setContactData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleAddContact = () => {
        if (
            contactData.name === "" ||
            contactData.id === null ||
            contactData.id === -1 ||
            !isNumber(contactData.id)
        ) {
            return;
        }

        // Check if contact ID already exists
        const existingContact = filteredContacts.find(
            (contact) => contact.id === contactData.id
        );
        if (existingContact) {
            console.log("1")
            return;
        }

        addContact(contactData);
        // Reset the input fields
        setContactData({
            id: null,
            name: "",
            bio: "Hello",
            lastSeen: "19/04/2023 22:55",
            profilePic: ""
        });
    };

    const isNumber = (value) => {
        return /^\d+$/.test(value);
    };

    return (<>
            <ModalTitle/>
            <div className="modal-body">
                <ModalInputIdOrName
                    label="Contact's name"
                    placeholder="Contact's name"
                    name="name"
                    value={contactData.name}
                    onChange={handleChange}
                />
                <ModalInputIdOrName
                    label="Contact's ID"
                    placeholder="Contact's ID"
                    name="id"
                    value={contactData.id}
                    onChange={handleChange}
                />
            </div>
            <div className="modal-footer">
                <CloseModalBtn/>
                <AddContactBtn handleAddContact={handleAddContact}/>
            </div>
        </>
    );
}

export default ModalAddContact;
