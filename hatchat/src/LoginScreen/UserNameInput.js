function UserNameInput() {
    return (
        <div className="form-floating mb-3">
            <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label htmlFor="floatingInput">Username</label>
        </div>
    );
}

export default UserNameInput;