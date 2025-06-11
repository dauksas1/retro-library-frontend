import './MyProjects.css'
import { useState, useEffect } from 'react'
import { getMyProjects } from '../services/api.js'
import ProjectCard from '../components/ProjectCard'
import NavigationBar from '../components/NavigationBar.jsx'


function MyProjects(){

     const [myProjects, setMyProjects] = useState([])
    
        const [error, setError] = useState(null)
    
        const [loading, setLoading] = useState(true)
    
        const loadMyProjects = async () => {
                    try{
                        const projects = await getMyProjects();
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
                    {myProjects.map
                        ((projectItem) => 
                            <ProjectCard retroProject = {projectItem} key = {projectItem.id} purpose = "author"/>
                        )
                    }
                </div>
            </div>
        </>
    )
}
export default MyProjects