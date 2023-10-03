import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import NavLinks from "./NavLinks";

const Header = () => {
    return (
      <header className="header container">
        {/* Link to the home page */}
        <NavLink to="/">
          {/* Animated logo */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 2, duration: 0.5, type: "spring" }}
          >
            {/* Animated logo image */}
            <motion.img
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              className="logo"
              src={logo}
              alt="PT Logo"
              style={{
                width:'100px',
                height:'auto'
              }}
            />
          </motion.div>
        </NavLink>
        {/* Navigation links */}
        <NavLinks />
      </header>
    );
  };
  
  export default Header;