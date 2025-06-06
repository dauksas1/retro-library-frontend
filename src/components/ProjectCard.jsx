import './ProjectCard.css'
import '../pages/ProjectPage.jsx'
import { Link, useNavigate } from 'react-router-dom'

function ProjectCard({retroProject}){

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/secured/projectPage/${retroProject.id}`)
    }

    function follow(){
        alert("Clicked")
    }

    
return(
    <div className = "retro-card" onClick={handleClick}>
        <div className = "retro-card-poster">
            <img className = "card-img" src = {retroProject.imgUrl} alt = "project-image"/>
        </div>
        <div>
            <h3 className = "description-heading">{retroProject.name}</h3>
            <p className = "card-intro">{retroProject.intro}</p>
        </div>
         <div className = "retro-card-overlay">
            <button className = "show-interest-btn" onClick={follow}>Follow</button>
        </div>
    </div>
)
}
export default ProjectCard