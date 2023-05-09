function UserNameInput() {
    return (
        <div className="form-floating mb-3">
            <input type="text" className="form-control" id="floatingInputName" placeholder="name@example.com"></input>
                <label htmlFor="floatingInput">Display name</label>
        </div>
);
}

export default UserNameInput;