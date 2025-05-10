import { useSelector } from 'react-redux'
import './App.css'
import AuthenticatedRoutes from './components/auth/AuthenticatedRoutes'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'

function App() {
  const token = useSelector(state => state.user.token)

  return (
    <>
      {Boolean(token) ? <AuthenticatedRoutes /> : (<LoginPage />)}

    </>
  )
}

export default App
