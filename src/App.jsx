import './App.css'
import NavigationBar from './components/NavigationBar.jsx'
import Home from '../src/pages/Home.jsx'
import Followed from './pages/Followed.jsx'
import {Route, Routes} from 'react-router-dom'
import {useState} from 'react'
import MyProjects from './pages/MyProjects.jsx'
import AccountPage from './pages/AccountPage.jsx'
import ProjectPage from './pages/ProjectPage.jsx'
import UploadProject from './pages/UploadProject.jsx'

function App() {

  const [loggedInStatus, setLoggedInStatus] = useState(true);

  const handleLogOut = () => {
    setLoggedInStatus(false);
  }

  return (
    <div>
      <NavigationBar loggedInStatus = {loggedInStatus}/>
      <main className = "app-container">
        <Routes>
          <Route path = '/' element = {<Home/>}/>
          <Route path = '/secured/followed' element = {<Followed/>}/>
          <Route path = '/secured/myProjects' element = {<MyProjects/>}/>
          <Route path = '/secured/accountPage' element = {<AccountPage/>}/>
          <Route path = '/secured/projectPage/:id' element = {<ProjectPage/>}/>
          <Route path = '/secured/uploadProject' element = {<UploadProject/>}/>
        </Routes>
      </main>
    </div>
  )
}

export default App
