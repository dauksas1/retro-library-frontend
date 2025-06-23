import './App.css'
import Home from '../src/pages/Home.jsx'
import HomeSecured from './pages/HomeSecured.jsx'
import Followed from './pages/Followed.jsx'
import Filtered from './pages/Filtered.jsx'
import {Route, Routes} from 'react-router-dom'
import MyProjects from './pages/MyProjects.jsx'
import AccountPage from './pages/AccountPage.jsx'
import ProjectPage from './pages/ProjectPage.jsx'
import UploadProject from './pages/UploadProject.jsx'
import EditProject from './pages/EditProject.jsx'
import ProtectedRoute from './components/Security/ProtectedRoute.jsx'
import LoginRegisterPage from './pages/LoginRegisterPage.jsx'



function App() {

  return (
    <div>
      
      <main className = "app-container">
        <Routes>
          <Route path = '/' element = {<Home/>}/>
          <Route path = '/login' element = {<LoginRegisterPage/>}/>
            <Route path = '/secured/' element = {<ProtectedRoute><HomeSecured/></ProtectedRoute>}/>
            <Route path = '/secured/filtered' element = {<ProtectedRoute><Filtered/></ProtectedRoute>}/>
            <Route path = '/secured/followed' element = {<ProtectedRoute><Followed/></ProtectedRoute>}/>
            <Route path = '/secured/myProjects' element = {<ProtectedRoute><MyProjects/></ProtectedRoute>}/>
            <Route path = '/secured/accountPage' element = {<ProtectedRoute><AccountPage/></ProtectedRoute>}/>
            <Route path = '/secured/projectPage/:id' element = {<ProtectedRoute><ProjectPage/></ProtectedRoute>}/>
            <Route path = '/secured/projects/editProject/:id' element = {<ProtectedRoute><EditProject/></ProtectedRoute>}/>
            <Route path = '/secured/uploadProject' element = {<ProtectedRoute><UploadProject/></ProtectedRoute>}/>
        </Routes>
      </main>
    </div>
  )
}

export default App
