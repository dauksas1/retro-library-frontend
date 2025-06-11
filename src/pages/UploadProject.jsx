import './UploadProject.css'
import { useState } from 'react';
import { SocialIcon } from 'react-social-icons'
import { AiOutlineMail } from "react-icons/ai";
import { PiPaypalLogo } from "react-icons/pi";
import { uploadProject } from '../services/api';
import NavigationBar from '../components/NavigationBar';

function UploadProject(){

    const [file, setFile] = useState("../../public/demoImages/retroFuturistic.jpg");

    const selectProjectImage = (e) => {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const handleSubmit = (e) => {
        const formedRetroProject = {
            projectName: document.querySelector('.intro-card-project-name').value,
            cardIntro: document.querySelector('.card-intro-textarea').value,
            projectIntro: document.querySelector('.introduction-textarea').value,
            projectStatus: document.querySelector('.status-select').value,
            featureList: document.querySelector('.key-features-textarea').value,
            projectSummary: document.querySelector('.summary-textarea').value,
            youTubeLink: document.querySelector('.project-video-id').value,
            instaLink: "test",
            patreonLink: "test",
            projectImgUrl: "../../public/demoImages/ps2hd.jpg"
        }

      uploadProject(formedRetroProject)

    }

return(
        <>
            <NavigationBar loggedInStatus = {true}/>
            <div className = "retro-card-upload">
                <div className = "retro-card-poster">
                    <img className = "card-img" src = {file} alt = "project-image"/>
                </div>
                <div>
                    <h3 className = "description-heading">Project Name</h3>
                    <textarea className='card-intro-textarea' type='text' maxLength={109} placeholder='SHORT PROJECT CARD DESCRIPTION, MAX CHARACTERS: 109'/>
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
                        <h3 className = "project-title-heading"><input className='intro-card-project-name' type='text' maxLength={20} placeholder='PROJECT NAME'/></h3>
                        <textarea className='introduction-textarea' type='text' maxLength={450} placeholder='SHORT INTRODUCTION, MAX CHARACTERS: 450'/>
                    </div>
                </div>
                <div className='project-info-cont'>
                    <div className='project-info-inner'>
                        <h3 className='project-info-heading'>STATUS:
                            <select className='status-select'>
                                <option value="design-stage">DESIGN STAGE</option>
                                <option value="development-stage">DEVELOPMENT STAGE</option>
                                <option value="live">LIVE</option>
                                <option value="live-supported">LIVE-SUPPORTED</option>
                            </select>
                        </h3>
                        <h3 className = "project-feature-list-upload">KEY FEATURES:
                                <textarea className='key-features-textarea' type='text' maxLength = {365} placeholder='KEY FEATURES, MAX CHARACTERS: 364, MAX LINES: 5 '/>
                        </h3>
                        <div className = "project-summary">
                            <h3 className='summary-heading'>SUMMARY</h3>
                            <textarea className='summary-textarea' type='text' maxLength={1710} placeholder='FORM INFORMATION, MAX CHARACTERS: 1710'/>
                        </div>
                    </div>
                    <div className='project-info-gallery-cont'>
                        <h3>PROJECT LINKS</h3>
                            <textarea className='project-video-id' type='text' placeholder='PLACE YOUR YOUTUBE VIDEO ID'/>
                        <div className = 'social-media-cont'>
                            <h2>SOCIAL MEDIA</h2>
                            <span className='x-span'>
                                <SocialIcon className='x-icon' url="https://x.com" borderRadius='5px' />
                                <input className = 'social-media-input' type="text" placeholder='Your X account' />
                            </span>
                            <span className='facebook-span'>
                                <SocialIcon className='facebook-icon' url="https://facebook.com" borderRadius='5px'/>
                                <input className = 'social-media-input' type="text" placeholder='Your Facebook account' />
                            </span>
                            <span className='instagram-span'>
                                <SocialIcon className='instagram-icon' url="https://instagram.com" borderRadius='5px'/>
                                <input className = 'social-media-input' type="text" placeholder='Your Instagram account' />
                            </span>  
                        </div>
                        <div className='author-support-cont'>
                            <h2>AUTHOR SUPPORT</h2>
                            <span className='patreon-span'>
                                <SocialIcon className='patreon-icon' url="https://patreon.com" borderRadius = "5px"/>
                                <input className = 'social-media-input' type="text" placeholder='Your Patreon account' />
                            </span>
                            <span className='paypal-span'>
                                <PiPaypalLogo className='paypal-icon' size = {40}/>
                                <input id = 'paypal-input' type="text" placeholder='Your Paypal account' />
                            </span>  
                        </div>
                        <div className='author-contact-cont'>
                            <h2>AUTHOR CONTACT</h2>
                            <span className='contact-span'>
                                <AiOutlineMail className='author-email-icon' size = {40}/>
                                <input id = 'email-input' type="text" placeholder='Your email address' />
                            </span>
                            <button id = 'project-upload-btn' onClick={handleSubmit}>UPLOAD</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
)
}
export default UploadProject