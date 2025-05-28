import './App.css'
import NavigationBar from './components/NavigationBar.jsx'
import Home from '../src/pages/Home.jsx'
import FollowedProjects from './pages/Following.jsx'
import {Route, Routes} from 'react-router-dom'

function App() {

  return (
    <div>
      <NavigationBar loggedInStatus = {true}/>
      <main className = "app-container">
        <Routes>
          <Route path = '/' element = {<Home/>}/>
          <Route path = '/following' element = {<FollowedProjects/>}/>
        </Routes>
      </main>
    </div>
  )
}

export default App
