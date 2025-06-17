import './ProjectCard.css'
import '../pages/ProjectPage.jsx'
import { Link, useNavigate } from 'react-router-dom'
import { deleteProjectApi } from '../services/api.js';

function ProjectCard({retroProject, purpose}){

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/secured/projectPage/${retroProject.id}`)
    }

    function follow(e){
        e.stopPropagation()
        alert("Followed")
    }

    function unfollow(e){
        e.stopPropagation()
        alert("Unfollowed")
    }

    function editProject(e){
        e.stopPropagation()
        navigate(`/secured/projects/editProject/${retroProject.id}`)
    }

    function deleteProject(e){
        e.stopPropagation()
        deleteProjectApi(retroProject.id);
        console.log(retroProject.id)
        window.location.reload()
    }


    const homeView = 
    
    <div className = "retro-card" onClick={handleClick}>
        <div className = "retro-card-poster">
            <img className = "card-img" src = {retroProject.projectImgUrl} alt = "project-image"/>
        </div>
        <div>
            <h3 className = "description-heading">{retroProject.projectName}</h3>
            <p className = "card-intro">{retroProject.cardIntro}</p>
        </div>
         <div className = "retro-card-overlay">
            <button className = "follow-btn" onClick={follow}>FOLLOW</button>
        </div>
    </div>

    const authorView =  
    
    <div className = "retro-card" onClick={handleClick}>
        <div className = "retro-card-poster">
            <img className = "card-img" src = {retroProject.projectImgUrl} alt = "project-image"/>
        </div>
        <div>
            <h3 className = "description-heading">{retroProject.projectName}</h3>
            <p className = "card-intro">{retroProject.cardIntro}</p>
        </div>
         <div className = "retro-card-overlay">
            <button className = "edit-btn" onClick={editProject}>EDIT</button>
            <button className = "delete-btn" onClick={deleteProject}>DELETE</button>
        </div>
    </div>

    const followedView =  
    
    <div className = "retro-card" onClick={handleClick}>
        <div className = "retro-card-poster">
            <img className = "card-img" src = {retroProject.projectImgUrl} alt = "project-image"/>
        </div>
        <div>
            <h3 className = "description-heading">{retroProject.projectName}</h3>
            <p className = "card-intro">{retroProject.cardIntro}</p>
        </div>
         <div className = "retro-card-overlay">
            <button className = "unfollow-btn" onClick={unfollow}>UNFOLLOW</button>
        </div>
    </div>

    
return(
    <>
        {purpose === "home" && homeView}
        {purpose === "author"  && authorView}
        {purpose === "followed" && followedView}
    </>
    
)
}
export default ProjectCard