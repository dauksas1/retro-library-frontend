import '../components/ProjectCard.jsx'
import { useState, useEffect } from 'react'
import { getAllProjects, searchProjects } from '../services/api.js'
import ProjectCard from '../components/ProjectCard.jsx'

function Home(){
    
        const [projects, setProjects] = useState([])

        const [searchQuery, setSearchQuery] = useState("")

        const [error, setError] = useState(null)

        const [loading, setLoading] = useState(true)

        const loadAllProjects = async () => {
                try{
                    const allProjects = await getAllProjects();
                    setProjects(allProjects)
                } catch(error){
                    setError("Error occured while loading projects")
                } finally{
                    setLoading(false)
                }
            } 

        useEffect(() => {
            loadAllProjects()
        }, [])

        const handleProjectSearch = async (e) => {
            e.preventDefault();
            if (searchQuery === ""){
               loadAllProjects();
               return;
            }
            if (loading) return;
            

            setLoading(true)
            try{
                const searchResults = await searchProjects(searchQuery)
                setProjects(searchResults)
                setError(null)

            }catch(error){
                setError("Error occured while attempting search")
            }finally{
                setLoading(false);
            }
            
        }

return(
        <div className = "home-container">
            <form className = "search-form" onSubmit={handleProjectSearch}>
                <input  className = "search-input" 
                        type = "text" 
                        placeholder='Search for project'
                        value = {searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className = "search-btn" 
                        type = "submit">Search
                </button>
            </form>

            <div className = "projects-grid">
            {projects.map((projectItem) => 
                <ProjectCard retroProject = {projectItem} key = {projectItem.id}/>
                )
            }
            </div>

        </div>
)
}
export default Home