import './App.css';

function App() {
    return (
        <>
            <div className="bg"></div>
            <div className="bg bg2"></div>
            <div className="bg bg3"></div>

            <div className="register">
                <h1 id="chatName">
                    Hat Chat
                </h1>
                <form>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                        <label htmlFor="floatingInput">Username</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div>
                        <a className="btn btn-large btn-primary" href="ChatScreen.html">Log In</a>
                    </div>

                    <div className="bottomDisclaimer">
                        <p>Not registered yet? <a id="linkToChat" href="RegistrationScreen.html">Click here</a> to
                            register.</p>
                        <div dir="ltr"
                             className="css-901oao r-14j79pv r-1k78y06 r-n6v787 r-16dba41 r-1cwl3u0 r-1p6iasa r-bcqeeo r-1qhn6m8 r-qvutc0">
                            <span
                                className="css-901oao css-16my406 r-1k78y06 r-bcqeeo r-qvutc0">© 2023 HatChat, Inc.</span>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default App;
