import React from 'react';
import './Footer.css';
import { Link } from 'react-scroll';
import { menu, socialHandles } from '../../data';

const Footer = () => {
    return (
        <footer id='footer'>
            <div className="section__wrapper">
                <ul className="nav__link__container">
                    {menu.map((list, index) => (
                        <Link
                            activeClass='active'
                            className='nav__link'
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
                </ul>
                <div className="social__handles__container">
                    {socialHandles.map((list, index) => (
                        <a href={list.link} className='social__handle' target='_blank' rel='noopener noreferrer' key={index}>
                            {list.icon}
                        </a>
                    ))}
                </div>
                <div className="copyright__container">
                    <h3>Copyright &copy; All rights reserved | 2024</h3>
                    <p className="text__muted">Design & Built by Mustafa Hassan</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
