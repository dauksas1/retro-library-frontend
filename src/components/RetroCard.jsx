//Comp Props: Name(project name), 
//            Intro(short introduction/description), 
//            URL(Image)

function ProjectCard({retroProject}){

    function showInterest(){
        alert("Clicked")
    }


return(
    <div className = "retro-card">
        <div className = "retro-card-poster">
            <image src = {retroProject.url}/>
        </div>
        <div>
            <h3 className = "description-heading">Project: {retroProject.name}</h3>
            <p className = "card-intro">{retroProject.intro}</p>
        </div>
         <div className = "retro-card-overlay">
            <button className = "show-interest-btn" onClick={showInterest}>Show Interest</button>
        </div>
    </div>
)
}
export default ProjectCard