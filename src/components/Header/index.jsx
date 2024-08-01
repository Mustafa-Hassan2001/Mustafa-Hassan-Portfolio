import React, { useRef } from 'react';
import './Header.css';
import { profile1 } from '../../images'; 
import gsap from 'gsap';
import { useEffect } from 'react';
import { useGSAP } from '@gsap/react';

// const CV = 'http://localhost:3000/'

const Header = () => {
    const container = useRef(null);
    gsap.registerPlugin(useGSAP)

    useGSAP(() => {
        gsap.fromTo(".profile__photo__container", {
            scale: .5,
            duration: 1,
            opacity: 0.5,
        },
        {
            scale: 1,
            duration: 1,
            ease: "sine.in",
            opacity: 1,
        });

        gsap.from(".intro__text", {
            fontSize: 100,
            duration: 1,
            delay: 1,
            ease: "sine.in",
        })
        const timeline = gsap.timeline();
        timeline
        .from(".header_info_top",{
            opacity:0,
        })
        .from(".header_title",{
            opacity:0, 
            y:-30,           
        })
        .from(".header_description",{
            opacity: 0,

        })
        .from(".btn",{ 
            x:-40,
            opacity:0,
            stagger: .5
        })
    }, {scope:container});

    const handleDownload = () => {      
        window.open(process.env.PUBLIC_URL + '/SYED MUSTAFA HASSAN - RESUME.pdf', '_blank');
    }

    return (
        <header id="header" className="blur-effect" ref={container}> 
            <div className="stroke__text intro__text">HELLO</div>
            <div className="section__wrapper header__container">
                <div className="column intro__container blur-effect">
                    <div className="header__info">
                        <div className="header__info__top">
                            Hello There! I'm
                        </div>
                        <div className="header__info__middle">
                            <h1 className="primary__title header__title">Mustafa Hassan</h1>
                            <p className="text__muted header__description">
                            An independent and self-motivated hardworking individual dedicated towards goals.
                            I leverage my developement to automate automate deployments, optimize resources, and deliver cost-effective solutions.
                            </p>
                        </div>
                        <div className="header__info__bottom">
                            <button className="btn" onClick={handleDownload}>Download Resume</button>
                            <a href="mailto:mustafahassan3404@gmail.com" className="btn">Email Me</a>
                        </div>
                    </div>
                </div>
                <div className="column profile__wrapper">
                    <div className='profile__photo__container'>
                        <img src={profile1} className='profile__photo' alt="Profile" />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header
