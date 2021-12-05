import { CgMenuGridO } from "react-icons/cg";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Sidebar from "../Sidebar";

const btn = {
  whileHover: {
    transition: { duration: 0.3 },
    scale: 1.1,
    color: '#acc1ff',
    backgroundColor: '#171717',
    boxShadow: '10px 10px 17px #141414, -10px -10px 17px #1a1a1a',
    cursor: 'pointer'
  },
  whileTap: {
    transition: { duration: 0.5 },
    color: '#acc1ff',
    backgroundColor: '#171717',
    boxShadow: 'inset 20px 20px 27px #141414, inset -20px -20px 27px #1a1a1a',
  }
}

export default function Navbar() {

  const [show, setShow] = useState(false);
  const showSidebar = () => setShow(true);
  const hideSidebar = () => setShow(false);

  return (
    // Make the navbar wrapper
    // Insert profile pic and links
    <>
      <div className="navbar-wrapper-outer">
        <motion.button 
          className="nav-menu-btn" 
          onClick={showSidebar} 
          whileHover={btn.whileHover}
          whileTap={btn.whileTap}
        >
          <CgMenuGridO />
        </motion.button>
        <div className="nav-title">SOUMENDU DAS</div>
      </div>
      
      <motion.div>
        <AnimatePresence>
          {show && <Sidebar hideSidebar={hideSidebar} />}
        </AnimatePresence>
      </motion.div>
    </>
  );
}