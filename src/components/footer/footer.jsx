import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <p>
          &copy; {new Date().getFullYear()} Your News Website. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
