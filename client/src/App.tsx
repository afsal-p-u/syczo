import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react' 
import { Home } from "./pages"
import { Navbar, Signup } from './components'
import { useAuthContext } from './context/AuthContext'

function App() {
  const { token } = useAuthContext()
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      {/* <Footer /> */}
      <Signup />
    </>
  )
}

export default App
