import React from 'react';

function CreateAccountBtn({ userData, onClick }) {
    const handleClick = () => {
        onClick(userData);
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
