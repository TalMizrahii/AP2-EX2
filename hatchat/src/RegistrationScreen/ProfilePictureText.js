import React, { useState } from 'react';

function ProfilePictureText({ onChange }) {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
        const event = {
            target: {
                value: e.target.files[0],
            },
        };
        onChange(event);
    };

    return (
        <div className="mb-3">
            <label htmlFor="formFile" className="form-label profilePictureLabel">
                Profile picture:
            </label>
            <input
                className="form-control"
                type="file"
                id="formFile"
                onChange={handleFileChange}
            />
        </div>
    );
}

export default ProfilePictureText;
