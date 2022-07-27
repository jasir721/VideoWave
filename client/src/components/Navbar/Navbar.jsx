import React from 'react';
import './Navbar.scss';
import pic from "../../assets/gitimg.png"
// import {HiMenuAlt4,HiX} from 'react-icons/hi';
// import {motion} from 'framer-motion';
const Navbar = () => {
  // const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <h1 className="logo__name">VideoWave</h1>
        {/* <FontAwesomeIcon icon="fab fa-github" /> */}
        <a href="https://github.com/jasir721/VideoWave"><img src={pic} alt="Jasir's Github" className='github'></img></a>
      </div>
      {/* <ul className="app__navbar-links">
        {['home', 'about', 'alumni', 'project', 'Contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {/* //This is for converting the menu bar as toggle in mobile view
        motion div specifie the pixels and transition  */}
        {/* {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div> */}
    </nav>
  )
}

export default Navbar