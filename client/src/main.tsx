import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import { AuthProvider } from './contexts/AuthContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <AuthProvider>
        <Routes>
          <Route path='/*' element={<App/>}/>
        </Routes>
      </AuthProvider>
    </Router>
  </StrictMode>,
)
