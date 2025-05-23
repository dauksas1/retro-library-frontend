import RetroCard from '../components/RetroCard.jsx'
import { useState, useEffect } from 'react'
import {getAllProjects, searchProjects} from '../services/api.js'

function Home(){

    

    let retroProject1 = {id:1,
                         name: "Playstation 2 HI DEF", 
                         intro: "This RetroGem mod converts your old PS2 into high definition gaming machine, preserving CRT image quality.", 
                         url: "../../public/demoImages/ps2hd.jpg" }

    let retroProject2 = {id:2,
                         name: "Playstation 1 SD Card Reader", 
                         intro: "Allows to play your backups from an SD card", 
                         url: "../../public/demoImages/ps1Sd.png" }
                     
    
    let retroProject3 = {id:3,
                         name: "Tiny PS2", 
                         intro: "This redesigned case transforms your Playstation 2 console into tiny version without optical drive ", 
                         url: "../../public/demoImages/tinyPS2.jpeg" }

    
    let retroProject4 = {id : 4,
                        name: "Sega Dreamcast GDEMU", 
                        intro: "Optical drive emulator allowing to play your backups from flash storage", 
                        url: "../../public/demoImages/gdemu.jpg" }

    let retroProject5 = {id:5,
                         name: "XBOX Original Wireless Controller Mod", 
                         intro: "Allows to hook up any generation wireless Xbox Controller to your Xbox original", 
                         url: "../../public/demoImages/xboxWireless.jpg" }      
                         
    let retroProject6 = {id:1,
                         name: "Playstation 2 HI DEF", 
                         intro: "This RetroGem mod converts your old PS2 into high definition gaming machine, preserving CRT image quality.", 
                         url: "../../public/demoImages/ps2hd.jpg" }

    let retroProject7 = {id:2,
                         name: "Playstation 1 SD Card Reader", 
                         intro: "Allows to play your backups from an SD card", 
                         url: "../../public/demoImages/ps1Sd.png" }
                     
    
    let retroProject8 = {id:3,
                         name: "Tiny PS2", 
                         intro: "This redesigned case transforms your Playstation 2 console into tiny version without optical drive ", 
                         url: "../../public/demoImages/tinyPS2.jpeg" }

    
    let retroProject9 = {id : 4,
                        name: "Sega Dreamcast GDEMU", 
                        intro: "Optical drive emulator allowing to play your backups from flash storage", 
                        url: "../../public/demoImages/gdemu.jpg" }

    let retroProject10 = {id:5,
                         name: "XBOX Original Wireless Controller Mod", 
                         intro: "Allows to hook up any generation wireless Xbox Controller to your Xbox original", 
                         url: "../../public/demoImages/xboxWireless.jpg" }

    let projectList = [retroProject1, 
                       retroProject2, 
                       retroProject3, 
                       retroProject4,
                       retroProject5,
                       retroProject6, 
                       retroProject7, 
                       retroProject8, 
                       retroProject9,
                       retroProject10 ]

    
        const [projects, setProjects] = useState([])

        const [searchQuery, setSearchQuery] = useState("")

        const [error, setError] = useState(null)

        const [loading, setLoading] = useState(true)

        useEffect(() => {
            const loadAllProjects = async () => {
                try{
                    const allProjects = await getAllProjects();
                    setProjects(allProjects)
                } catch(error){
                    setError("Error occured while loading projects")
                }
                finally{
                    setLoading(false)
                }
            } 

            loadAllProjects()

        }, [])



        const handleProjectSearch = async (e) => {
            e.preventDefault();
            if (!searchQuery.trim()) return;
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
            {projectList.map((projectItem) => 
                <RetroCard retroProject = {projectItem} key = {projectItem.id}/>
                )
            }
            </div>

        </div>
)
}
export default Home