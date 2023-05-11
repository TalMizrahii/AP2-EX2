function PasswordRequirement() {
    return (
        <div className="PasswordRequirement">
            <ul className="password-requirements">
                <li>At least 8 characters long.</li>
                <li>1 uppercase letter A - Z.</li>
                <li>1 lowercase letter a - z.</li>
                <li>1 number 0 - 9 .</li>
                <li>1 special character (!, @, #, $, etc.).</li>
            </ul>
        </div>
    );
}


export default PasswordRequirement;