import './LoginRegisterComponent.css'
import NavigationBar from './NavigationBar.jsx';
import { handleLogin, handleUserRegistration } from "../services/api.js";
import { useAuth } from './Security/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function Login(){

    const location = useLocation();
    const from = location.state?.from?.pathname || '/secured';
    const navigate = useNavigate();
    const { login } = useAuth();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isRegistering, setIsRegistering] = useState(false);
    

    const [userDetails, setUserDetails] = useState({
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: '',
    });

    const handleChange = (e) => {
        setUserDetails({ 
        ...userDetails, 
        [e.target.name]: e.target.value 
        });
    };

    const handleRegistrationSubmit = async (e) => {
        e.preventDefault();
        handleUserRegistration(userDetails);
    };



    const onSubmit = async (e) => {
        e.preventDefault();

        const result = await handleLogin({ username, password });
        if (result.success) {
            login(result.token);
            navigate(from, { replace: true });
        } else {
            alert("Login failed");
        }
    };

    const loginView = 
                        <>
                            <NavigationBar loggedInStatus = {false}/>
                            <div className = 'login-cont-outer'>
                                    <div className='login-cont-inner'>
                                        <h3 className='login-page-head'>LogIn</h3>
                                        <form className='login-form' onSubmit={onSubmit}>
                                            <label>
                                                Username:
                                                <input
                                                    className="username-input"
                                                    type="text"
                                                    name="username"
                                                    value={username}
                                                    onChange={(e) => { setUsername(e.target.value) }}
                                                    required
                                                    />
                                            </label>
                                            <label>
                                                Password:
                                                <input  className = "password-input" 
                                                        type="password" 
                                                        name="password"
                                                        value={password}
                                                        onChange={(e) => {setPassword(e.target.value)}}
                                                        required />
                                            </label>
                                            <div className='login-btn-cont'>
                                                <input className='login-btn' type="submit" value="LogIn" />
                                                <input className= 'register-btn' type="button" value="Register" onClick={() => {setIsRegistering(true)}}/>
                                            </div>
                                        </form>
                                </div>
                            </div>
                        </>

        const registerView = 
                            <div className='register-form-outer'>
                                <NavigationBar loggedInStatus = {false}/>
                                <form className="register-form" onSubmit={handleRegistrationSubmit}>
                                    <h3 className='login-page-head'>Registration</h3>
                                    <input className="register-input" name="username" placeholder="Username" onChange={handleChange} required />
                                    <input className="register-input" name="password" type="password" placeholder="Password" onChange={handleChange} required />
                                    <input className="register-input" name="firstName" placeholder="First Name" onChange={handleChange} required />
                                    <input className="register-input" name="lastName" placeholder="Last Name" onChange={handleChange} required />
                                    <input className="register-input" name="email" type="email" placeholder="Email" onChange={handleChange} required />
                                    <div className="register-btn-cont">
                                        <button type="submit">Register</button>
                                        <button type="button" onClick={() => setIsRegistering(false)}>Back to Login</button>
                                    </div>
                                </form>
                            </div>
       

    return(
        <>
            {isRegistering ? registerView : loginView}
        </>

    )
}
export default Login;