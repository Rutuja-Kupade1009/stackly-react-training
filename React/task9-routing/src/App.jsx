import { Routes, Route, NavLink, Outlet, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import WebDevelopment from "./pages/WebDevelopment";
import AppDevelopment from "./pages/AppDevelopment";
import UIUXDesign from "./pages/UIUXDesign";
import Products from "./pages/Products";
import Contact from "./pages/Contact";

function ServicesLayout() {
  return (
    <div className="services">
      <h1>Our Services</h1>

      <nav className="subnav">
        <NavLink to="/services" end>All Services</NavLink>
        <NavLink to="/services/WebDevelopment">Web Development</NavLink>
        <NavLink to="/services/AppDevelopment">App Development</NavLink>
        <NavLink to="/services/UIUXDesign">UI/UX Design</NavLink>
      </nav>

      <Outlet />
    </div>
  );
}

function App() {
  return (
    <>
      <header>
        <Link to="/" className="logo">Develop Routes</Link>

        <nav className="navbar">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/About">About</NavLink>
          <NavLink to="/Services">Services</NavLink>
          <NavLink to="/Products">Products</NavLink>
          <NavLink to="/Contact">Contact</NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/Services" element={<ServicesLayout />}>
            <Route index element={<Services />} />
            <Route path="WebDevelopment" element={<WebDevelopment />} />
            <Route path="AppDevelopment" element={<AppDevelopment />} />
            <Route path="UIUXDedesign" element={<UIUXDesign />} />
          </Route>

          <Route path="/Products" element={<Products />} />
          <Route path="/Contact" element={<Contact />} />

          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </main>
    </>
  );
}

export default App;