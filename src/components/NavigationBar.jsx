import { Link } from "react-router-dom"

function NavigationBar(){
    return(
        <nav className = "nav-bar">
            <div className = "nav-brand">
                <Link to = "/">Retro Forest</Link>
            </div>
            <div className = "nav-links">
                <Link to = "/" className = "home-link">Home</Link>
                <Link to = "/following" className = "followed-link">Followed Projects</Link>
            </div>
        </nav>
    )
}
export default NavigationBar