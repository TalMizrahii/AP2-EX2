import {useNavigate} from 'react-router-dom';
import {users} from '../DataBase/Database';

function LoginButton({username, password}) {
    console.log('Users Data:', users);

    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        const user = users.find((user) => user.userName === username);
        if (user) {
            if (user.password === password) {
                const userData = {
                    fullName: user.fullName,
                    userName: user.userName,
                    userPassword: user.password,
                    profilePicture: user.profilePicture,
                };

                navigate('/chat', {
                    state: {
                        fullName: user.fullName, userName: user.userName,
                        userPassword: user.password,
                        profilePicture: user.profilePicture
                    }
                });
            } else {
                alert('Invalid password');
            }
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <button type="submit" className="btn btn-large btn-primary" onClick={handleLogin}>
            Log In
        </button>
    );
}

export default LoginButton;