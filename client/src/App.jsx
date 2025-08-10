import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import SingUp from "./pages/SingUp";
import Projects from "./pages/Projects";
import SingIn from "./pages/SingIn";
import Header from "./components/Header";


function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
       
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path="/sing-up" element={<SingUp/>} />
        <Route path='/projects' element={<Projects />} />
        <Route path="/sing-in" element={<SingIn/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
