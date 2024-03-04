import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react' 
import { Bag, Checkout, Home, Login, Pay, Product, SignUp } from "./pages"
import { Footer, Navbar } from './components'
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
        {/* <Route path='/login' element={token ? <Navigate to="/" /> : <Login />} />
        <Route path='/signup' element={token ? <Navigate to="/" /> : <SignUp />} />

        <Route path='/product' element={<Product />} />
        <Route path='/bag' element={<Bag />} />
        <Route path='/checkout' element={token ? <Checkout /> : <Navigate to="/login" />} />
        <Route path='/pay' element={token ? <Pay /> : <Navigate to="/login" />} /> */}
      </Routes>
      <Footer />
    </>
  )
}

export default App
