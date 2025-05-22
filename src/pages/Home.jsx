import RetroCard from '../components/RetroCard.jsx'
import { useState } from 'react'

function Home(){

    let retroProject1 = {id : 1,
                       name: "Sega Dreamcast HDMI", 
                       intro: "Allows to hook up your Dreamcast console to high resolution display presertving original CRT image quality", 
                       url: '' }

    let retroProject2 = {id:2,
                         name: "XBOX Original Wireless Controller Mod", 
                         intro: "Allows to hook up any generation wireless Xbox Controller to your Xbox original", 
                         url: "" }

    let retroProject3 = {id:3,
                         name: "PS2 Clear Case 3D print", 
                         intro: "Beautifully transparent PS2 Slim Console Mod ", 
                         url: "" }

    let retroProject4 = {id:4,
                         name: "PS1 SD Card Reader", 
                         intro: "Allows to play your backups from an SD card", 
                         url: "" }

    let retroProject5 = {id:5,
                         name: "PS1 SD Card Reader", 
                         intro: "Allows to play your backups from an SD card", 
                         url: "" }

    let projectList = [retroProject1, 
                       retroProject2, 
                       retroProject3, 
                       retroProject4,
                       retroProject5]




        const [searchQuery, setSearchQuery] = useState()


        const handleProjectSearch = () => {
            alert(searchQuery)
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
                <RetroCard retroProject = {projectItem} key = {projectItem.id}/>)}
            </div>

        </div>
)
}
export default Home