import React from 'react' 
import "./Contact.css"
import {MdOutlineEmail} from 'react-icons/md'

const Contact = () => {
    return (
    <section id='contact'>
        <div className="section__wrapper contact__container">
            <div className="section__header">
                <h2 className="primary__title">Contact Me</h2>
                <p className="text__muted description">
                    Ready to take your digital presence to the next level? Whether you're looking to launch a 
                    new website, revamp an existing one, or need expert ad on the best web technologies, I'm
                    here to help. Reach out to discuss your project, questions, or just say hello.
                </p>
            </div>
            <div className="contact__group">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className='contact__icon'/>
                        <h3>Email</h3>
                        <h5>mustafahassan3404@gmail.com</h5>
                        <a href="mailto:mustafahassan3404@gmail.com" target='_blank' className='btn'>Send a message</a>
                    </article>
                    <article className="contact__option">
                        <MdOutlineEmail className='contact__icon'/>
                        <h3>Messenger</h3>
                        <h5>Mustafa Hassan</h5>
                        <a href="https://m.me/profile?id=profile-id" target='_blank' className='btn'>Send a message</a>
                    </article>
                    <article className="contact__option">
                        <MdOutlineEmail className='contact__icon'/>
                        <h3>WhatsApp</h3>
                        <h5>+923322071085</h5>
                        <a href="https://api.whatsapp.com/send?phone=+923322071085" target='_blank' className='btn'>Send a message</a>
                    </article>
                </div>
                
                <form> 
                    <input type="text" name="name" placeholder='Your Full Name' required /> 
                    <input type="email" name="email" placeholder='Your Email' required /> 
                    <textarea name='message' rows={7} placeholder='Your Message'></textarea> 
                    <button type submit className="btn btn__primary"> Send Message</button> 
                </form>    
            </div>
        </div>
    </section>
    )
}

export default Contact