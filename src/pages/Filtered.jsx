
import '../components/ProjectCard.jsx'
import { useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard.jsx'
import NavigationBar from '../components/NavigationBar.jsx'
import { useAuth } from '../components/Security/AuthContext.jsx'
import { getProjectsByPlatform } from '../services/api.js'

function Filtered(){
    
        const [projects, setProjects] = useState([])

        const [searchQuery, setSearchQuery] = useState("")

        const [error, setError] = useState(null)

        const [loading, setLoading] = useState(true)

        const location = useLocation();

        const { platform } = location.state || {};

        const {token} = useAuth();


        const loadFilteredProjects = async () => {
                try{
                    setLoading(true)
                    const filteredProjects = await getProjectsByPlatform(platform, token);
                    setProjects(filteredProjects)
                } catch(error){
                    setError("Error occured while loading projects")
                } finally{
                    setLoading(false)
                }
            } 

        useEffect(() => {
            loadFilteredProjects()
        }, [])

        useEffect(() => {
            if (platform) {
                loadFilteredProjects();
            }
        }, [platform]);



return(
    <>
        <NavigationBar loggedInStatus = {true}/>
        <div className = "home-container">
            <div className = "projects-grid">
                {projects.map((projectItem) => 
                    <ProjectCard retroProject = {projectItem} key = {projectItem.id} view = "homeSecured"/>
                    )
                }
            </div>

        </div>
    </>
    )
}
export default Filtered