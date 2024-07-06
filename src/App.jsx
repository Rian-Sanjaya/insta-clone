import { Route, Routes } from "react-router"
import HomePage from './pages/homepage/HomePage'
import AuthPage from './pages/authPage/AuthPage'
import LayoutPage from "./pages/layoutPage/LayoutPage"
import ProfilePage from "./pages/profilePage/ProfilePage"

function App() {
  return (
    <LayoutPage>
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/auth" element={ <AuthPage /> } />
        <Route path="/:username" element={ <ProfilePage /> } />
      </Routes>
    </LayoutPage>
  )
}

export default App
