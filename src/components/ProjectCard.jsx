import './ProjectCard.css'
import '../pages/ProjectPage.jsx'
import { deleteProjectApi } from '../services/api.js';
import { useAuth } from './Security/AuthContext.jsx';
import { subscribeToProject, unSubscribeToProject } from '../services/api.js';
import { useNavigate } from 'react-router-dom';



function ProjectCard({retroProject, view, onUnfollow, onDelete}){

    const {token, user} = useAuth();

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/secured/projectPage/${retroProject.id}`)
    }

    function follow(e){
        e.stopPropagation()
        subscribeToProject(user.userId, retroProject.id, token)
    }

    function unfollow(e){
        e.stopPropagation()
        unSubscribeToProject(user.userId, retroProject.id, token)
        .then(() => {onUnfollow(retroProject.id)})
    }

    function editProject(e){
        e.stopPropagation()
        navigate(`/secured/projects/editProject/${retroProject.id}`)
    }

    function deleteProject(e){
        e.stopPropagation()
        deleteProjectApi(retroProject.id, token)
        .then(()=>{onDelete(retroProject.id)});
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
    </div>

    const homeViewSecured = 
    
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
    
   <div className="retro-card" onClick={handleClick}>
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
        {view === "home" && homeView}
        {view === "homeSecured" && homeViewSecured}
        {view === "author"  && authorView}
        {view === "user" && followedView}
    </>
    
)
}
export default ProjectCard