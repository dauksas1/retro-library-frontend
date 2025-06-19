import './Authorisation.css';
import NavigationBar from '../components/NavigationBar';
import { handleLogin } from "../services/api.js";
import { useAuth } from '../components/Security/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function Authorisation(){
    const { login } = useAuth();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/secured';
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


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

    return(
        <>
            <NavigationBar loggedInStatus = {false}/>
            <div className = 'login-cont-outer'>
                <h3 className='login-page-head'>LogIn Page</h3>
                    <div className='login-cont-inner'>
                        <form className='login-form' onSubmit={onSubmit}>
                            <label>
                                Username:
                                <input  className = "username-input" 
                                        type="text" 
                                        name="name" 
                                        value={username}
                                        onChange={(e) => {setUsername(e.target.value)}} />
                            </label>
                            <label>
                                Password:
                                <input  className = "password-input" 
                                        type="password" 
                                        name="password"
                                        value={password}
                                        onChange={(e) => {setPassword(e.target.value)}} />
                            </label>
                            <div className='login-btn-cont'>
                                <input className='login-btn' type="submit" value="LogIn" />
                                <input className= 'register-btn' type="button" value="Register" />
                            </div>
                        </form>
                </div>
            </div>
        </>
    )
}
export default Authorisation;