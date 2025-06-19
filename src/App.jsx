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
import Authorisation from './pages/Authorisation.jsx'
import ProtectedRoute from './components/Security/ProtectedRoute.jsx'

function App() {

  return (
    <div>
      
      <main className = "app-container">
        <Routes>
          <Route path = '/' element = {<Home/>}/>
          <Route path = '/auth' element = {<Authorisation/>}/>
            <Route path = '/secured/' element = {<ProtectedRoute><HomeSecured/></ProtectedRoute>}/>
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
