import './ProjectPage.css'
import { useParams } from 'react-router-dom'
import {getProjectById} from '../services/api.js'
import { useEffect, useState } from 'react';

function ProjectPage(){

    const projectParams = useParams();

    const [retroProject, setRetroProject] = useState("");

    const [loading, setLoading] = useState();

    const [error, setError] = useState(null)

    const loadProject = async () => {
                    try{
                        const loadedRetroProject = await getProjectById(projectParams.id);
                        setRetroProject(loadedRetroProject)
                    } catch(error){
                        setError("Error occured while fetching a project")
                    } finally{
                        setLoading(false)
                    }
                }

    useEffect(() => {
        loadProject()
    }, [] )

return(
    <div className = "project-page-cont">
        <div className = "page-head-cont">
            <img className = "main-img" src = {retroProject.imgUrl} alt = "project-image"/>
            <div className = "intro-card-cont">
                <h3 className = "project-title-heading">{retroProject.name}</h3>
                <p className = "project-intro">{retroProject.intro}</p>
            </div>
        </div>
        <div className='project-info-cont'>
            <div className='project-info-inner'>
                <h3 className = "project-info-heading">STATUS: IN DEVELOPMENT {retroProject.status}</h3>
                <div className = "project-feature-list">
                    <p className = "key-features-list-title">KEY FEATURES:</p>
                    <ul>
                        <li>Demo Demo Demo Demo</li>
                        <li>Demo Demo Demo Demo</li>
                        <li>Demo Demo Demo Demo</li>
                        <li>Demo Demo Demo Demo</li>
                        <li>Demo Demo Demo Demo</li>
                        <li>Demo Demo Demo Demo</li>
                    </ul>
                </div>
                <div className = "Project Summary">
                    <h3 className='summary-heading'>SUMMARY</h3>
                </div>
            </div>
            <div className='project-info-gallery-cont'>
                <p>DEMO</p>
            </div>
        </div>
    </div>
)
}
export default ProjectPage