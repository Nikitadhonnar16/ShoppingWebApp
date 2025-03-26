import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import FormData from "./Components/FormData";
import DefaultLayout from "./Components/DefaultLayout";
import AuthLayout from "./Components/AuthLayout";
import LoginSignup from "./Components/LoginSignup";
function App() {
  return (
    <Router basename="/ShoppingWebApp">
      <Routes>
        {/* DefaultLayout for pages with Navbar and Sidebar */}
        <Route element={<DefaultLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/formdata" element={<FormData />} />
        </Route>

        {/* AuthLayout for pages without Navbar and Sidebar */}
        <Route element={<AuthLayout />}>
          <Route path="/" element={<LoginSignup />} />
       
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
