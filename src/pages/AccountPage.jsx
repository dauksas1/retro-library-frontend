import './AccountPage.css';
import NavigationBar from '../components/NavigationBar';

function AccountPage(retroProject){
    return(
        <>
            <NavigationBar loggedInStatus = {true}/>
            <div className = 'acc-details-cont-outer'>
                <h3 className='project-name-head'>ACCOUNT DETAILS</h3>
                <div className='decorative-cont'>
                    <div className = 'Profile-pic-cont'>
                        <img className='profile-pic' src='../../public/demoImages/profile-pic-demo.png' alt ='profile-picture'/>
                        <p className='username'>USERNAME</p>
                    </div>
                    <div className='acc-details-inner'>
                        <form className='acc-details-change-form'>
                            <ul className='current-details-list'>
                                <li>Name: Demo Demo</li>
                                <li>Country: Demo</li>
                                <li>Email: demo@demo.com</li>
                            </ul>
                            <label>
                                Email change:
                                <input className = "email-input" type="text" name="name" />
                            </label>
                            <input type="submit" value="Update" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AccountPage;