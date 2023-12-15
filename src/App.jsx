import { Route, Routes } from "react-router"
import HomePage from './views/homepage/HomePage'
import AuthPage from './views/authPage/AuthPage'
import LayoutPage from "./views/layoutPage/LayoutPage"
import ProfilePage from "./views/profilePage/ProfilePage"

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
