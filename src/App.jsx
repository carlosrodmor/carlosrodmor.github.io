import './App.css'
import Navbar from './components/Navbar/Navbar'
import AppRoutes from './routes/AppRoutes'
import Footer from './components/Footer/Footer'
import { BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <AppRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
