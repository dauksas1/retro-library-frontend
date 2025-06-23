import './ProjectPage.css'
import { useParams } from 'react-router-dom'
import {getProjectById} from '../services/api.js'
import { useEffect, useState } from 'react';
import { SocialIcon } from 'react-social-icons'
import { AiOutlineMail } from "react-icons/ai";
import { PiPaypalLogo } from "react-icons/pi";
import  NavigationBar from '../components/NavigationBar.jsx';
import  YouTubeVideo from '../components/YouTubeVideo.jsx'
import { useAuth } from '../components/Security/AuthContext.jsx';

function ProjectPage(){

    const {token} = useAuth();

    const projectParams = useParams();

    const [retroProject, setRetroProject] = useState("");

    const [loading, setLoading] = useState();

    const [error, setError] = useState(null)

    const formattedText = retroProject.featureList?.split(".")
    const loadProject = async () => {
                    try{
                        setLoading(true)
                        const loadedRetroProject = await getProjectById(projectParams.id, token);
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
    <>
        <NavigationBar loggedInStatus = {true}/>
        <div className = "project-page-cont">
            <div className = "page-head-cont">
                <img className = "main-img" src = {retroProject.projectImgUrl} alt = "project-image"/>
                <div className = "intro-card-con">
                    <h3 className = "project-title-heading">{retroProject.projectName}</h3>
                    <p className = "project-intro">{retroProject.projectIntro}</p>
                </div>
            </div>
            <div className='project-info-cont'>
                <div className='project-info-inner'>
                    <h3 className='project-status-heading'>STATUS: {loading === false ? retroProject.projectStatus.toUpperCase() : "STATUS UNKNOWN"}</h3>
                    <ul className = "project-feature-list">KEY FEATURES:
                            {loading === false  ? formattedText.map((sentence, index) => (
                                <li key={index}>{sentence.trim()}</li>
                            )) : <p>loading</p>}
                    </ul>
                    <div className = "project-summary">
                        <h3 className='summary-head'>SUMMARY</h3>
                        <p>{retroProject.projectSummary}</p>
                    </div>
                </div>
                <div className='project-info-gallery-cont'>
                    <h3>PROJECT LINKS</h3>
                    <div className = "project-video">
                        <YouTubeVideo videoId = {retroProject.youTubeLink}/>
                    </div>
                    <div className = 'social-media-cont'>
                        <h2>SOCIAL MEDIA</h2>
                        <span className='x-span'>
                            <SocialIcon className='x-icon' url="https://x.com" borderRadius='5px' />
                            <a href="https://x.com" target="_blank" rel="noopener noreferrer">VISIT X</a>
                        </span>
                        <span className='facebook-span'>
                            <SocialIcon className='facebook-icon' url="https://facebook.com" borderRadius='5px'/>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">VISIT FACEBOOK</a>
                        </span>
                        <span className='instagram-span'>
                            <SocialIcon className='instagram-icon' url="https://instagram.com" borderRadius='5px'/>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">VISIT INSTAGRAM</a>
                        </span>  
                    </div>
                    <div className='author-support-cont'>
                        <h2>AUTHOR SUPPORT</h2>
                        <span className='patreon-span'>
                            <SocialIcon className='patreon-icon' url="https://patreon.com" borderRadius = "5px"/>
                            <a href="https://patreon.com" target="_blank" rel="noopener noreferrer">SUPPORT VIA PATREON</a>
                        </span>
                        <span className='paypal-span'>
                            <PiPaypalLogo className='paypal-icon' size = {40}/>
                            <a href="https://paypal.com" target="_blank" rel="noopener noreferrer">SUPPORT VIA PAYPAL</a>
                        </span>  
                    </div>
                    <div className='author-contact-cont'>
                        <h2>AUTHOR CONTACT</h2>
                        <span className='contact-span'>
                            <AiOutlineMail className='author-email-icon' size = {40}/>
                            <a href="https://paypal.com" target="_blank" rel="noopener noreferrer">AUTHOR EMAIL</a>
                        </span>  
                    </div>
                </div>
            </div>
        </div>
    </>
)
}

export default ProjectPage