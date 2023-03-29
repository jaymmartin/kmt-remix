import * as React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const showMenu = () => {};
  return (
    <div id="navbar">
        <div id="brand"><Link to="/" >KATE MARTIN THERAPY</Link></div>
        <div id="links">
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/rates">Rates</Link>
            {/* <a href="contact.html">Contact</a> */}
            {/* <a href="https://luminello.com" target="_blank">Portal</a> */}
        </div>
        <a href="#mobile" id="hamburger" className="icon" onClick={showMenu}>
            <i data-feather="menu"></i>
        </a>

    </div>

    // <div>
    //   <h1>Basic Example</h1>

    //   <p>
    //     This example demonstrates some of the core features of React Router
    //     including nested <code>&lt;Route&gt;</code>s,{" "}
    //     <code>&lt;Outlet&gt;</code>s, <code>&lt;Link&gt;</code>s, and using a
    //     "*" route (aka "splat route") to render a "not found" page when someone
    //     visits an unrecognized URL.
    //   </p>

    //   {/* Routes nest inside one another. Nested route paths build upon
    //         parent route paths, and nested route elements render inside
    //         parent route elements. See the note about <Outlet> below. */}
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route index element={<Home />} />
    //       <Route path="about" element={<About />} />
    //       <Route path="dashboard" element={<Dashboard />} />

    //       {/* Using path="*"" means "match anything", so this route
    //             acts like a catch-all for URLs that we don't have explicit
    //             routes for. */}
    //       <Route path="*" element={<NoMatch />} />
    //     </Route>
    //   </Routes>
    // </div>
  );
}