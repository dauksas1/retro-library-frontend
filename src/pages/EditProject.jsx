import './EditProject.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons'
import { AiOutlineMail } from "react-icons/ai";
import { PiPaypalLogo } from "react-icons/pi";
import { editProject } from '../services/api';
import  NavigationBar from '../components/NavigationBar';
import { getProjectById } from '../services/api';

function EditProject(){

    const projectParams = useParams();

    const [retroProject, setRetroProject] = useState({});

    const [loading, setLoading] = useState();

    const [error, setError] = useState(null)

    const [file, setFile] = useState();

    const loadProject = async () => {
                        try{
                            setLoading(true)
                            const loadedRetroProject = await getProjectById(projectParams.id);
                            setRetroProject(loadedRetroProject)
                        } catch(error){
                            setError("Error occured while fetching a project")
                        } finally{
                            setLoading(false)
                        }
                    }

    const selectProjectImage = (e) => {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const handleSubmit = (e) => {
            setRetroProject({
                projectName: document.querySelector('.intro-card-project-name').value,
                cardIntro: document.querySelector('.card-intro-textarea').value,
                projectIntro: document.querySelector('.introduction-textarea').value,
                projectStatus: document.querySelector('.status-select').value,
                featureList: document.querySelector('.key-features-textarea').value,
                projectSummary: document.querySelector('.summary-textarea').value,
                youTubeLink: document.querySelector('.project-video-id').value,
                instaLink: document.querySelector('.instagram-input').value,
                xLink: document.querySelector('.x-input').value,
                facebookLink: document.querySelector('.facebook-input').value,
                patreonLink: document.querySelector('.patreon-input').value,
                projectImgUrl: retroProject.projectImgUrl
        })

    editProject(retroProject)

    }

    useEffect(() => {
            loadProject();
        },[]);

    
    useEffect(() => {
            if(retroProject.projectImgUrl){
                console.log(retroProject)
                setFile(retroProject.projectImgUrl)
            }
        }, [retroProject.projectImgUrl] );

return(
        <>
            <NavigationBar loggedInStatus = {true}/>
            <div className = "retro-card-upload">
                <div className = "retro-card-poster">
                    <img className = "card-img"
                    src = {file} 
                    alt = "project-image"/>
                </div>
                <div>
                    <h3 className = "description-heading">Project Name</h3>
                    <textarea   className ='card-intro-textarea' 
                                value = {retroProject.cardIntro} 
                                onChange = {(e) => setRetroProject({...retroProject, cardIntro: e.target.value})}
                                type='text' 
                                maxLength={109}/>
                </div>
            </div>
            <div className = "project-page-cont-upload">
                <div className = "page-head-cont">
                    <div className="main-img">
                        <div className='overlay'>
                            <h2>ADD IMAGE</h2>
                            <input type="file" onChange={selectProjectImage} />
                        </div>
                            {file && <img className='preview-image' src={file} alt="Uploaded preview" />}
                    </div>
                    <div className = "intro-card-cont">
                        <h3 className = "project-title-heading">
                                    <input  className='intro-card-project-name' 
                                    type='text'
                                    value = {retroProject.projectName} 
                                    onChange = {(e) => setRetroProject({...retroProject, projectName: e.target.value})}
                                    maxLength={20}/>
                        </h3>
                        <textarea className='introduction-textarea' 
                                                type='text'
                                                value = {retroProject.projectIntro} 
                                                onChange = {(e) => setRetroProject({...retroProject, projectIntro: e.target.value})}
                                                maxLength={450}/>
                    </div>
                </div>
                <div className='project-info-cont'>
                    <div className='project-info-inner'>
                        <h3 className='project-info-heading'>STATUS:
                            <select className='status-select' 
                                    value = {retroProject.projectStatus} 
                                    onChange = {(e) => setRetroProject({...retroProject, projectStatus: e.target.value})}>
                                <option value="design-stage">DESIGN STAGE</option>
                                <option value="development-stage">DEVELOPMENT STAGE</option>
                                <option value="live">LIVE</option>
                                <option value="live-supported">LIVE-SUPPORTED</option>
                            </select>
                        </h3>
                        <h3 className = "project-feature-list-upload">KEY FEATURES:
                                <textarea   className='key-features-textarea' 
                                            type='text'
                                            value = {retroProject.featureList} 
                                            onChange = {(e) => setRetroProject({...retroProject, featureList: e.target.value})}
                                            maxLength = {365}/>
                        </h3>
                        <div className = "project-summary">
                            <h3 className='summary-heading'>SUMMARY</h3>
                            <textarea   className='summary-textarea' 
                                        type='text'
                                        value = {retroProject.projectSummary}
                                        onChange = {(e) => setRetroProject({...retroProject, projectSummary: e.target.value})}
                                        maxLength={1710}/>
                        </div>
                    </div>
                    <div className='project-info-gallery-cont'>
                        <h3>PROJECT LINKS</h3>
                            <textarea   className='project-video-id' 
                                        type='text'
                                        value = {retroProject.youTubeLink}
                                        onChange = {(e) => setRetroProject({...retroProject, youTubeLink: e.target.value})}/>
                        <div className = 'social-media-cont'>
                            <h2>SOCIAL MEDIA</h2>
                            <span className='x-span'>
                                <SocialIcon className='x-icon' url="https://x.com" borderRadius='5px' />
                                <input  className = 'x-input' 
                                        type="text"
                                        value = {retroProject.xLink}
                                        onChange = {(e) => setRetroProject({...retroProject, xLink: e.target.value})}/>
                            </span>
                            <span className='facebook-span'>
                                <SocialIcon className='facebook-icon' url="https://facebook.com" borderRadius='5px'/>
                                <input  className = 'facebook-input' 
                                        type="text"
                                        value = {retroProject.facebookLink}
                                        onChange = {(e) => setRetroProject({...retroProject, facebookLink: e.target.value})}
                                />
                            </span>
                            <span className='instagram-span'>
                                <SocialIcon className='instagram-icon' url="https://instagram.com" borderRadius='5px'/>
                                <input  className = 'instagram-input' 
                                        type="text"
                                        value = {retroProject.instaLink}
                                        onChange = {(e) => setRetroProject({...retroProject, instaLink: e.target.value})}/>
                            </span>  
                        </div>
                        <div className='author-support-cont'>
                            <h2>AUTHOR SUPPORT</h2>
                            <span className='patreon-span'>
                                <SocialIcon className='patreon-icon' url="https://patreon.com" borderRadius = "5px"/>
                                <input  className = 'patreon-input' 
                                        type="text" 
                                        value = {retroProject.patreonLink}
                                        onChange = {(e) => setRetroProject({...retroProject, patreonLink: e.target.value})}/>
                            </span>
                            <span className='paypal-span'>
                                <PiPaypalLogo className='paypal-icon' size = {40}/>
                                <input  id = 'paypal-input' 
                                        type="text"
                                        value = {retroProject.payPalLink}
                                        onChange = {(e) => setRetroProject({...retroProject, payPalLink: e.target.value})}/>
                            </span>  
                        </div>
                        <div className='author-contact-cont'>
                            <h2>AUTHOR CONTACT</h2>
                            <span className='contact-span'>
                                <AiOutlineMail className='author-email-icon' size = {40}/>
                                <input  id = 'email-input' 
                                        type="text" 
                                        value = {retroProject.authorEmailAddress}
                                        onChange = {(e) => setRetroProject({...retroProject, authorEmailAddress: e.target.value})}/>
                            </span>
                            <button id = 'submit-changes-btn' onClick={handleSubmit}>SUBMIT CHANGES</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
)
}
export default EditProject