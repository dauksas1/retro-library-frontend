import './ProjectCard.css'

function ProjectCard({retroProject}){

    function follow(){
        alert("Clicked")
    }


return(
    <div className = "retro-card">
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