import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import Projects from "./pages/Projects";
import SignIn from "./pages/SignIn";
import Header from "./components/Header";
import PrivateRoute from './components/PrivateRoute';
import UpdatePost from './pages/UpdatePost';

import FooterCo from "./components/FooterCo";
import OnlyAdminPrivateRoute from "./components/OnlyAdminPrivateRoute";
import CreatePost from './pages/CreatePost';

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route element={<PrivateRoute />}>
        <Route path='/dashboard' element={<Dashboard />} />
        </Route>
        <Route element={<OnlyAdminPrivateRoute />}>
        <Route path='/create-post' element={<CreatePost />} />
        <Route path='/update-post/:postId' element={<UpdatePost />} />
        </Route>
       
        <Route path="/sign-up" element={<SignUp/>} />
        <Route path='/projects' element={<Projects />} />
        <Route path="/sign-in" element={<SignIn />} />
        </Routes>
        <FooterCo/>
    </BrowserRouter>
  );
}

export default App;
