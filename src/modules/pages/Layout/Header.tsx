import React, { FC } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./header.scss";
import { motion } from "framer-motion";

export const Header: FC = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <motion.ul
          initial={{ y: "-100px" }}
          animate={{ y: 0 }}
          transition={{ delay: 0.9, stiffness: 110, type: "spring" }}
          className="navbar-nav mr-auto"
        >
          <motion.li
            className="nav-item active"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/">
              <b>Unisub</b>
            </Link>
          </motion.li>
        </motion.ul>
      </div>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <motion.ul
          initial={{ y: "-100px" }}
          animate={{ y: 0 }}
          transition={{ delay: 0.9, stiffness: 110, type: "spring" }}
          className="navbar-nav mr-auto"
          style={{ justifyContent: "flex-end" }}
        >
          <motion.li
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="nav-item"
          >
            <Link to="/histories">History</Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="nav-item"
          >
            <Link to="/login">Login</Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="nav-item"
          >
            <Link to="/register">Register</Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="nav-item"
          >
            <Link to="/logout">Logout</Link>
          </motion.li>
        </motion.ul>
      </div>
    </nav>
  );
};
