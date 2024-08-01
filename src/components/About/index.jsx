import React, { useEffect, useRef } from 'react';
import "./About.css";
import { profile2 } from '../../images'; 
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const About = () => {
    const container = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const el = container.current;
        gsap.fromTo(".about__container", {
            scale: 0.7,
        }, {
            scale: 1,
            scrollTrigger: {
                trigger: el,
                scrub: true,
            },
        });
    }, [gsap, ScrollTrigger]);

    return (
        <section id='about' ref={container}>
            <div className="section__wrapper about__container"> 
                <div className="me__container blur-effect"> 
                    <div className="photo__container">
                        <img src={profile2} alt="Profile" />
                    </div>
                </div>
                <div className="section__header">
                    <h2 className="primary__title">About Me</h2>
                    <h1 className="title">Hi, My name is <span className="color__primary">Mustafa Hassan.</span></h1> 
                    <p className="text__muted description">
                        I'm a Final-Year Computer Science student, an independent and self-motivated hardworking individual dedicated to goals. Proficient in multiple programming languages and frameworks, 
                        as well as database design and management. Strong problem-solving and analytical skills, 
                        and a track record of delivering high-quality code on time and on budget.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;
