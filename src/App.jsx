import './App.css'
import AuthenticatedRoutes from './components/auth/AuthenticatedRoutes'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'

function App() {

  return (
    <>
      <LoginPage />
      <AuthenticatedRoutes />
    </>
  )
}

export default App
