import './MyProjects.css'
import { useState, useEffect } from 'react'
import { getMyProjects } from '../services/api.js'
import ProjectCard from '../components/ProjectCard'
import NavigationBar from '../components/NavigationBar.jsx'
import { useAuth } from '../components/Security/AuthContext.jsx'


function MyProjects(){

        const {token, user} = useAuth();

        const [myProjects, setMyProjects] = useState([])
    
        const [error, setError] = useState(null)
    
        const [loading, setLoading] = useState(true)

        const handleProjectDelete = (projectId) => {
        setMyProjects(prev => prev.filter(p => p.id !== projectId))};
    
        const loadMyProjects = async () => {
                    try{
                        const projects = await getMyProjects(user.userId,token);
                        setMyProjects(projects)
                    } catch(error){
                        setError("Error occured while loading followed projects")
                    } finally{
                        setLoading(false)
                    }
                } 
    
        useEffect(() => {
            loadMyProjects()
        },[])

    return(
        <>
        <NavigationBar loggedInStatus = {true}/>
            <div className = "outer-my-projects">
                <h1>MY PROJECTS</h1>
                <div className = "inner-my-projects">
                    {myProjects.length > 0 ?  
                                (myProjects.map
                                            ((projectItem) => 
                                                <ProjectCard
                                                    retroProject = {projectItem} 
                                                    key = {projectItem.id} 
                                                    view = "author"
                                                    onDelete = {handleProjectDelete}
                                                />
                                            )
                                ) : (
                                    <div className="no-projects">
                                        <h2>YOU DO NOT HAVE ANY PROJECTS.</h2>
                                     </div>
                                     )
                    }       
                </div>
            </div>
        </>
    )
}
export default MyProjects