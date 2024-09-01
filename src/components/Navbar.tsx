import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#2C2C2C" }}>
      <Link to="/" style={{ margin: "10px", color: "#E0E0E0", textDecoration: "none" }}>Home</Link>
      <Link to="/explore" style={{ margin: "10px", color: "#E0E0E0", textDecoration: "none" }}>Explore</Link>
    </nav>
  );
}

export default Navbar;
