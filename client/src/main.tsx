import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import { AuthProvider } from './contexts/AuthContext.tsx'
import { TaskProvider } from './contexts/TaskContext.tsx'
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <AuthProvider>
        <TaskProvider>
        <Routes>
          <Route path='/*' element={<App/>}/>
        </Routes>
        </TaskProvider>
      </AuthProvider>
    </Router>
  </StrictMode>,
)
