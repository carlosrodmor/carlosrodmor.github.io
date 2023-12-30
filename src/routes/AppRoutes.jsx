import { Routes, Route } from 'react-router-dom'
import ProjectsPage from '../components/ProjectsPage/ProjectsPage'
import HomePage from '../components/HomePage/HomePage'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/proyectos' element={<ProjectsPage />} />
    </Routes>
  )
}

export default AppRoutes
