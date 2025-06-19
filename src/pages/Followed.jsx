import './Followed.css'
import {useState, useEffect} from 'react'
import { getFollowedProjects} from '../services/api.js'
import ProjectCard from '../components/ProjectCard.jsx'
import NavigationBar from '../components/NavigationBar.jsx'

function Followed(){

    const [followedProjects, setFollowedProjects] = useState([])

    const [error, setError] = useState(null)

    const [loading, setLoading] = useState(true)

    const loadFollowedProjects = async () => {
                try{
                    const projects = await getFollowedProjects();
                    setFollowedProjects(projects)
                } catch(error){
                    setError("Error occured while loading followed projects")
                } finally{
                    setLoading(false)
                }
            } 

    useEffect(() => {
        loadFollowedProjects()
    },[])
    

return(
    <>  
        <NavigationBar loggedInStatus = {true}/>
        <div className = "outer-followed">
                <h1>FOLLOWED PROJECTS</h1>
                <div className = "inner-followed">
                    {followedProjects.map((projectItem) => 
                        <ProjectCard retroProject = {projectItem} key = {projectItem.id} view = "followed"/>
                        )
                    }
                </div>
        </div>
    </>
)
}

export default Followed