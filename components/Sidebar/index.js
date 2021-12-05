import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1
    }
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1
    }
  }
};

const itemVariants = {
  closed: {
    opacity: 0
  },
  open: { opacity: 1 }
};

const btn = {
  whileHover: {
    transition: { duration: 0.3 },
    scale: 1.1,
    color: '#a84343',
    backgroundColor: '#171717',
    cursor: 'pointer'
  },
  whileTap: {
    transition: { duration: 0.5 },
    color: '#a84343',
    backgroundColor: '#171717',
    boxShadow: 'inset 20px 20px 27px #141414, inset -20px -20px 27px #1a1a1a',
  }
}

const links = [
  { name: "Home", to: "/", id: 1 },
  { name: "About", to: "/about", id: 2 },
  { name: "Twitter", to: "https://twitter.com/soumendudas2208", id: 3 },
  { name: "Github", to: "https://github.com/soumendudas22", id: 4 }
];

export default function Sidebar({ hideSidebar }) {
  return (
    <motion.div
      className="sidebar"
      initial={{ top: '-100vh', transitionDuration: 1 }}
      animate={{ top: '-10vh' }}
      exit={{ top: '-110vh', transitionDuration: 5 }}
    >
      <motion.button 
        onClick={hideSidebar} 
        className="nav-close-btn"
        whileHover={btn.whileHover}
        whileTap={btn.whileTap}
      >
        <IoMdClose />
      </motion.button>
      <motion.div
        className="sidebar-container"
        initial="closed"
        animate="open"
        exit="closed"
        variants={sideVariants}
      >
        {links.map(({ name, to, id }) => (
          <Link key={id} href={to} passHref>
          <motion.a
            className="sidebar-item"
            whileHover={{ scale: 1.1 }}
            variants={itemVariants}
          >
            {name}
          </motion.a>
          </Link>
        ))}
      </motion.div>
    </motion.div>
  )
}