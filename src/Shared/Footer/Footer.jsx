import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <section id="footer" className="footer bg-white py-6">
      <div className="mycontainer">
        <div className="footerWrapper flex items-center justify-between text-black">
          <div className="footerLeft">
            <Logo></Logo>
          </div>
          <div className="footerMiddle">
            <ul className="flex items-center justify-center gap-3">
              <li>
                <a href="#" target="_blank">
                  <FaFacebookF className="text-2xl"></FaFacebookF>
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <FaYoutube className="text-2xl"></FaYoutube>
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <FaInstagram className="text-2xl"></FaInstagram>
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <FaTwitter className="text-2xl"></FaTwitter>
                </a>
              </li>
            </ul>
          </div>
          <div className="footerRight">
            <p>© 2023 USA chefs. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
