import './App.css'
import Home from '../src/pages/Home.jsx'
import HomeSecured from './pages/HomeSecured.jsx'
import Followed from './pages/Followed.jsx'
import {Route, Routes} from 'react-router-dom'
import MyProjects from './pages/MyProjects.jsx'
import AccountPage from './pages/AccountPage.jsx'
import ProjectPage from './pages/ProjectPage.jsx'
import UploadProject from './pages/UploadProject.jsx'
import EditProject from './pages/EditProject.jsx'

function App() {

  return (
    <div>
      
      <main className = "app-container">
        <Routes>
          <Route path = '/' element = {<Home/>}/>
          <Route path = '/secured/' element = {<HomeSecured/>}/>
          <Route path = '/secured/followed' element = {<Followed/>}/>
          <Route path = '/secured/myProjects' element = {<MyProjects/>}/>
          <Route path = '/secured/accountPage' element = {<AccountPage/>}/>
          <Route path = '/secured/projectPage/:id' element = {<ProjectPage/>}/>
          <Route path = '/secured/projects/editProject/:id' element = {<EditProject/>}/>
          <Route path = '/secured/uploadProject' element = {<UploadProject/>}/>
        </Routes>
      </main>
    </div>
  )
}

export default App
