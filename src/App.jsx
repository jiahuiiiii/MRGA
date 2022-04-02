import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Link,
  useLocation,
} from "react-router-dom";
import { Icon } from "@iconify/react";
import Logo from './img/mrga-logo.png'
 
function Navbar() {
  const location = useLocation();
 
  return (
    <nav className="flex px-8 py-8 text-2xl items-center justify-between w-full">
      <Link to="/">
        <div className="flex w-40">
          <img src={Logo} />
        </div>
      </Link>
      <ul className="flex relative">
        {[
          ["/", "Home"],
          ["/projects", "Projects"],
          ["/about", "About"],
          ["/contact", "Contact"],
        ].map(([path, label]) => (
          <li className="w-36 text-center">
            <Link to={path} className="">
              {label}
            </Link>
          </li>
        ))}
        {true && (
          <span
            className="w-8 transition-all absolute -bottom-1 border-b-2 border-white"
            style={{
              transform: `translateX(${
                ["/", "/projects", "/about", "/contact"].indexOf(
                  location.pathname
                ) *
                  9 + // 9 is the width of the navitem
                4.5 - // 4.5 is half of the width
                1 // 1 is the underline width
              }rem)`,
            }}
          />
        )}
      </ul>
    </nav>
  );
}
 
function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <p className="flex justify-center py-4">Long live MRGA. All rights reserved.</p>
    </>
  );
}
 
function Projects() {
  return (
    <div className="text-2xl flex flex-1 items-center justify-center">
      Projects
    </div>
  );
}
 
function About() {
  return (
    <div className="text-2xl flex flex-1 items-center justify-center">
      About
    </div>
  );
}
 
function Contact() {
  return (
    <div className="text-2xl flex flex-1 items-center justify-center">
      Contact
    </div>
  );
}
 
function Home() {
  return (
    <div className="text-2xl flex flex-1 items-center justify-center -mt-20">
      Long Live MRGA
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 overflow-hidden">
        <Icon
          icon="uil:react"
          className="w-full h-full text-black opacity-[5%] animate-spin [animation-duration:12s]"
        />
      </div>
    </div>
  );
}
 
function App() {
  return (
    <div className="flex justify-center flex-col w-full h-screen bg-gradient-to-r from-amber-500 to-rose-500 text-slate-100">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
 
export default App;