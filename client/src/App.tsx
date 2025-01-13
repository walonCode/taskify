import { Route, Routes } from "react-router-dom"
import Login from "./components/Authentication/Login"
import Register from "./components/Authentication/Register"
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TaskCreation from "./components/Tasks/TaskCreation";


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="login" element={<Login/>} />
          <Route path="register" element={<Register/>} />
          <Route index element={<Hero />} />
          {/* <Route path="reward" element={<ViewReward />} /> */}


          {/* Protected Route  */}
          <Route path='/task_creation' element={<TaskCreation/>}/>
        </Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App