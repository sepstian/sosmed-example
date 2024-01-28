import './App.css'
import TimelinePage from './page/timeline'
import AuthPage from './page/Auth'
import { Routes, Route } from 'react-router-dom'


function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/dashboard" element={<TimelinePage />} />
    </Routes>
    </>
  )
}

export default App
