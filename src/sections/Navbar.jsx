import { useState } from "react";
import { motion } from "motion/react";

const Navbar = () => {
  function Navigation (){
    return (
      <ul className="nav-ul">
        <li className="nav-li">
          <a href="/" className="nav-link">Home</a>
        </li>
        <li className="nav-li">
          <a  href="/About" className="nav-link">About</a>
        </li>
        <li className="nav-li">
          <a className="nav-link">Work</a>
        </li>
        <li className="nav-li">
          <a className="nav-link">Contact</a>
        </li>
      </ul>
      
    );
  }



  const [isOpen,setIsOpen] = useState(false);
  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/30">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a 
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            Kishore
          </a>
          <button onClick={() => setIsOpen(!isOpen)} className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden">
            <img src={isOpen? "assets/close.svg":"assets/menu.svg"} className="h-6 w-6" alt="toggle"/>
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      {isOpen && (<motion.div className="block overflow-hidden text-center sm:hidden "
      initial ={{opacity: 0, x: -10}}
      animate = {{opacity:1, x:0}}
      style = {{maxheight: "100vh" }}
      transition = {{duration: 0.5}}>
        <nav className="pb-5">
          <Navigation />
        </nav>
      </motion.div>)}
    </div>
  )
}

export default Navbar