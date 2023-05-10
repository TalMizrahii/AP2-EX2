import {useNavigate} from 'react-router-dom';
import {users} from '../DataBase/Database';

function LoginButton({username, password}) {
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        const user = users.find((user) => user.username === username);
        if (user) {
            if (user.password === password) {
                navigate('/chat');
            } else {
                alert('Invalid password');
            }
        } else {
            alert('Invalid username or password');
        }
    };


    return (
        <button type="submit" className="btn btn-large btn-primary" onClick={handleLogin}>Log In</button>
    );
}

export default LoginButton;