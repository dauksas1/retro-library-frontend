import './Followed.css'
import {useState, useEffect} from 'react'
import { getFollowedProjects} from '../services/api.js'
import ProjectCard from '../components/ProjectCard.jsx'
import NavigationBar from '../components/NavigationBar.jsx'
import { useAuth } from '../components/Security/AuthContext.jsx'

function Followed(){

    const {token, user} = useAuth();

    const [followedProjects, setFollowedProjects] = useState([])

    const [error, setError] = useState(null)

    const [loading, setLoading] = useState(true)

    const handleProjectUnfollowed = (projectId) => {
    setFollowedProjects(prev => prev.filter(p => p.id !== projectId));
};



    const loadFollowedProjects = async () => {
                try{
                    const projects = await getFollowedProjects(user.userId, token);
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
                     {followedProjects.length > 0 ?  
                                (followedProjects.map
                                            ((projectItem) => 
                                                <ProjectCard
                                                    retroProject = {projectItem} 
                                                    key = {projectItem.id} 
                                                    view = "user"
                                                    onUnfollow = {handleProjectUnfollowed}
                                                />
                                            )
                                ) : (
                                    <div className="no-projects">
                                        <h2>YOU ARE NOT CURRENTLY FOLLOWING ANY PROJECTS.</h2>
                                     </div>
                                     )
                    }    
                </div>
        </div>
    </>
)
}

export default Followed