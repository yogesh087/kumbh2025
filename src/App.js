/** @format */

import "./App.css"
import About from "./Components/About/About"
import Home from "./Components/Home/Home"
import NavBar from "./Components/Navbar/NavBar"
import Popular from "./Components/Popular/Popular"
import Offers from "./Components/Offers/Offers"
import Blog from "./Components/Blog/Blog"
import Footer from "./Components/Footer/Footer"
// import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
// import SignIn from "./Components/Auth/SignIn";
// import SignUp from "./Components/Auth/SignUp";
function App() {
  return (
    <div className='App'>
      <NavBar />
      <Home />
      <Popular />
      <Offers />
      <About />
      <Blog />
      <Footer />
      {/* <SignIn/>
      <SignUp/> */}
    </div>
  )
}

export default App
