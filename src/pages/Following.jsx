import './Following.css'
import {useState, useEffect} from 'react'
import { getFollowedProjects} from '../services/api.js'
import ProjectCard from '../components/ProjectCard.jsx'

function Following(){

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
    <div className = "outer-followed">
            <h1>Followed Projects</h1>
            <div className = "inner-followed">
                {followedProjects.map((projectItem) => 
                    <ProjectCard retroProject = {projectItem} key = {projectItem.id}/>
                    )
                }
            </div>
    </div>
)
}

export default Following