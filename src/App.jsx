import { Route, Routes, Navigate } from "react-router-dom"
import HomePage from './pages/homepage/HomePage'
import AuthPage from './pages/authPage/AuthPage'
import LayoutPage from "./pages/layoutPage/LayoutPage"
import ProfilePage from "./pages/profilePage/ProfilePage"
// import { useAuthState } from "react-firebase-hooks/auth"
// import { auth } from "./firebase/firebase"
import useAuthStore from "./store/authStore"

function App() {
  const authUser = useAuthStore(state => state.user)
  // const { authUser } = useAuthState(auth)
  
  return (
    <LayoutPage>
      <Routes>
        <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/auth" />} />
        <Route path="/auth" element={!authUser ? <AuthPage /> : <Navigate to="/" />} />
        <Route path="/:username" element={ <ProfilePage /> } />
      </Routes>
    </LayoutPage>
  )
}

export default App
