function ProfilePictureText() {
    return (
        <div className="mb-3">
            <label htmlFor="formFile" className="form-label profilePictureLabel">profile picture:</label>
            <input className="form-control" type="file" id="formFile"></input>
        </div>
    );
}

export default ProfilePictureText;