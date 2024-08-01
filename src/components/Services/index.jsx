import React from 'react'
import "./Services.css"
import { BsCodeSquare } from 'react-icons/bs'
import { TfiWrite } from 'react-icons/tfi'
import { FaPaintBrush } from 'react-icons/fa'
import { BiMobileAlt } from 'react-icons/bi';

const Services = () => {

    const handleDownload = () => {      
        window.open(process.env.PUBLIC_URL + 'https://www.upwork.com/freelancers/~017d6e495242d7dcd1?viewMode=1', '_blank');
    }


    return(
    <section id='services'>
        <div className="section__wrapper services___wrapper"> 
            <div className="section__header center">
                <h2 className="primary__title">Services</h2>
                <p className="text__muted description">
                    I transform your ideas, and consequently your desires, into a 
                    distinctive web project that both inspires you and captivates your customers.
                </p>
            </div>
            
            <div className="services__group">
                <article className="service">
                    <div className="service__top">
                        <div className="icon__container">
                            <FaPaintBrush/>
                        </div>
                        <h3 className="title">UI/UX Design</h3> 
                    </div>
                    <div className="service__middle">
                        <p className="text__muted description">
                        I am eager to collaborate with you and create remarkable UI/UX designs for both mobile and desktop platforms.
                        Let's transform your ideas into an impactful reality! Please feel free to reach out to me for further details and the best price.
                        </p> 
                    </div>
                    <div className="service__bottom">
                        <button className="btn btn__primary" onClick={handleDownload}>Contact Me</button>
                    </div>
                </article>
                {/* End of UI|UX */}

                <article className="service" style={{"--color-primary":"var(--color-success)"}}>
                    <div className="service__top">
                        <div className="icon__container">
                            <BsCodeSquare className='icon'/>
                        </div>
                        <h3 className="title">Web Development</h3> 
                    </div>
                    <div className="service__middle">
                        <p className="text__muted description">
                        Having a vast experience in Website Development, I can build a responsive website design or redesign your site that will meet your needs and exceed your expectations. I will make sure that you are 100% Satisfied with your new modern and professional website.
                        </p> 
                    </div>
                    <div className="service__bottom">
                        <button className="btn btn__primary" onClick={handleDownload}>Contact Me</button>
                    </div>
                </article>
                {/* End of Web Development */}

                <article className="service" style={{"--color-primary":"blueviolet"}}>
                    <div className="service__top">
                        <div className="icon__container">
                            <BiMobileAlt className='icon'/>
                        </div>
                        <h3 className="title">App Development</h3> 
                    </div>
                    <div className="service__middle">
                        <p className="text__muted description">
                        Craft custom mobile applications that reflect your brands vision and values. Complete process for mobile app development to create transparent & long-term relationship. 
                            Regular updates and calls during the Mobile app development process.
                        </p> 
                    </div>
                    <div className="service__bottom">
                        <button className="btn btn__primary" onClick={handleDownload}>Contact Me</button>
                    </div>
                </article>
                {/* End of Content Creation*/}

            </div>
        </div> 
    </section>
    )
}
export default Services