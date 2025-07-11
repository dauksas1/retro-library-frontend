import { useAuth } from './Security/AuthContext';
import './SideBar.css'
import {Link, useNavigate} from 'react-router-dom'

function SideBar(){

    const navigate = useNavigate();
    const {logout} = useAuth();

    const logOut = () => {
        logout()
    }

    return(
        <div className="side-bar">
            <div 
                className='upload-project-link'><Link to="/secured/uploadProject">UPLOAD PROJECT</Link>
            </div>
           
                <p>TOP SUPPLIERS</p>
             <ul>
                <li><Link to='https://www.pixelfx.co/' target="_blank">Pixel FX</Link></li>
                <li><Link to ='https://retroreflow.com/' target="_blank">Retro Reflow</Link></li>
                <li><Link to ='https://retrododo.com/' target="_blank">Retro Dodo</Link></li>
                <li><Link to = 'https://www.tindie.com/browse/vintagecomputing/' target="_blank"> Tindie</Link></li>
            </ul>
            
            <p>DESKTOP PROJECTS</p>
            <ul>
                <li>
                    <Link to="/secured/filtered" state={{ platform: "PC" }}>
                        PC
                    </Link>
                </li>
                <li>
                    <Link to="/secured/filtered" state={{ platform: "MAC" }}>
                        MAC
                    </Link>
                </li>
            </ul>
            <p>CONSOLE PROJECTS</p>
            <ul>
                <li>
                    <Link to="/secured/filtered" state={{ platform: "PLAYSTATION1" }}
                        >PLAYSTATION 1
                    </Link>
                </li>
                <li>
                    <Link to="/secured/filtered" state={{ platform: "PLAYSTATION2" }} >
                        PLAYSTATION 2
                    </Link></li>
                <li>
                    <Link to="/secured/filtered" state={{ platform: "SEGADREAMCAST" }} >
                        SEGA DREAMCAST
                    </Link>
                </li>
                <li>
                    <Link to="/secured/filtered" state={{ platform: "XBOX" }} >
                        XBOX ORIGINAL
                    </Link>
                </li>
            </ul>
            <div 
                className='account-page-link'><Link to= '/secured/accountPage'>ACCOUNT PAGE</Link>
            </div>
            <button onClick={logOut}>LOG OUT</button>
        </div>
    )
}
export default SideBar;