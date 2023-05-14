import React from 'react';

function CreateAccountBtn({ handleCreate, isImageUploaded }) {
    const handleClick = () => {
        if (!isImageUploaded) {
            alert('Please select a valid image file (JPG, JPEG, PNG, GIF, BMP).');
            return;
        }

        handleCreate();
    };

    return (
        <div>
            <button className="btn btn-primary" id="subButton" type="submit" onClick={handleClick}>
                Create account
            </button>
        </div>
    );
}

export default CreateAccountBtn;
