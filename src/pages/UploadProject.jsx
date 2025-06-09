import './UploadProject.css'
import { useState } from 'react';
import { SocialIcon } from 'react-social-icons'
import { AiOutlineMail } from "react-icons/ai";
import { PiPaypalLogo } from "react-icons/pi";

function ProjectPage(){

    const [retroProject, setRetroProject] = useState("");

    const [uploading, setUploading] = useState();

    const [error, setError] = useState(null)

    const formattedText = retroProject.featureList?.split(".")

    const uploadProject = async () => {}

    const [file, setFile] = useState();

    const handleChange = (e) => {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

return(
    <div className = "project-page-cont">
        <div className = "page-head-cont">
            <div className="main-img">
                <div className='overlay'>
                    <h2>ADD IMAGE</h2>
                    <input type="file" onChange={handleChange} />
                </div>
                    {file && <img className='preview-image' src={file} alt="Uploaded preview" />}
            </div>
            <div className = "intro-card-cont">
                <h3 className = "project-title-heading"><input className='intro-card-project-name' type='text' placeholder='PROJECT NAME'/></h3>
                <textarea className='introduction-textarea' type='text' placeholder='SHORT INTRODUCTION'/>
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
                         <textarea className='key-features-textarea' type='text' placeholder='SHORT INTRODUCTION'/>
                </h3>
                <div className = "project-summary">
                    <h3 className='summary-heading'>SUMMARY</h3>
                    <textarea className='summary-textarea' type='text' placeholder='SHORT INTRODUCTION'/>
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
                </div>
            </div>
        </div>
    </div>
)
}
export default ProjectPage