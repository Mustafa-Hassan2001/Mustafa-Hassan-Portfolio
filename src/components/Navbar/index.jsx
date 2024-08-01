import React, { useState, useEffect, useRef } from 'react';
import "./Navbar.css";
import { SiWebmoney } from "react-icons/si";
import { menu } from "../../data";
import { Link, animateScroll as scroll } from 'react-scroll';
import { FaArrowUpRightFromSquare, FaBarsStaggered } from "react-icons/fa6";
import { FaTimes } from 'react-icons/fa';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { duration } from '@mui/material';

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false); 
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos > 145) {
      return setVisible(true);
    }
    return setVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const container = useRef(null);
  gsap.registerPlugin(useGSAP)
  useEffect(() => {
    if (visible) {
      gsap.fromTo(container.current, {
        y: -250,
        width: '100%',
      },
      {
        y: 0,
        top: 0,
        zIndex: 100,
      });
    }
  }, [visible]);

  useGSAP (() => {
    const timeline = gsap.timeline();
    timeline.from(".tab__item", {opacity: 0, stagger:.5})
  }, {scope: container})

  const handleDownload = () => {      
    window.open(process.env.PUBLIC_URL + 'https://www.upwork.com/freelancers/~017d6e495242d7dcd1?viewMode=1', '_blank');
  }

  return (
    <nav className={`navbar__container ${visible ? "visible" : ""}`} ref={container}>
      {
        showSidebar ? (
          <div className='overlay' onClick={() => setShowSidebar(!showSidebar)}></div>
        ):""
      }
      <div className="logo__container" onClick={() => scroll.scrollToTop({duration:500})}>
        <SiWebmoney />
      </div>
      <div className={`tab__group ${showSidebar ? 'show' : ''}`}>
        <span className="icon__container close__btn" onClick={() => setShowSidebar(!showSidebar)}>
          <FaTimes />
        </span>
        {menu.map((list, index) => (
          <Link
            activeClass='active'
            className='tab__item'
            to={list.name.toLowerCase()}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            key={index}
          >
            {list.name}
          </Link>
        ))}
      </div>
      <div className="nav__buttons__group">
        <button className="btn btn__primary" onClick={handleDownload}>Hire Me <FaArrowUpRightFromSquare /></button>
        <FaBarsStaggered className="menu" onClick={() => setShowSidebar(!showSidebar)} />
      </div>
    </nav>
  );
};

export default Navbar;
