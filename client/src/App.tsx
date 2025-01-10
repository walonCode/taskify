import { Route, Routes } from "react-router-dom"
import Login from "./components/Login"
import Register from "./components/Register"
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


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

        </Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App