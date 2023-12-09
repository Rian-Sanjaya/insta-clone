import { Route, Routes } from "react-router"
import HomePage from './views/homepage/HomePage'
import AuthPage from './views/authPage/AuthPage'
import LayoutPage from "./views/layoutPage/LayoutPage"

function App() {
  return (
    <LayoutPage>
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/auth" element={ <AuthPage /> } />
      </Routes>
    </LayoutPage>
  )
}

export default App
