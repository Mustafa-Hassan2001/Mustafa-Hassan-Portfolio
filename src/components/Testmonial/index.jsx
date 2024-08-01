import React from 'react';
import "./Testimonial.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { profile3, profile4, profile5, profile6 } from '../../images';

const data = [
    {
        avatar: profile3,
        name: 'Hafiz Muhammad Attaullah, Head of Offensive Security @NanoTechx',
        review: `Mustafa has always been an amazing friend and great person. His skills are very sharp and hands on. He is very serious to his career and always meets his deadlines while accomplishing goals and milestones. I will always recommend him to wherever he goes and I am confident that he will always be a great fit wherever he goes.`
    },
    {
        avatar: profile4,
        name: 'Mortaza Hassani, Erasmus Mundus student @Cyberus',
        review: `Mustafa played a great role as android team lead in GDSC Maju chapter 22-23. As the lead of the chapter I found Mustafa very motivated, passionate and eager to fulfill the given tasks and responsibilities. His contribution and hard work is remarkable. He has very profound team working skills and can match in any team. I do wish him more opportunities ahead and surely he will be a brilliant member of any team and organization.`
    },
    {
        avatar: profile5,
        name: 'Duy Tri Nguyen, CTO @TRUEHEALTHCARE JSC ',
        review: `A Trusted person in Mobile App Development. In the ever-evolving landscape of mobile technology, SYED MUSTAFA HASSAN stands out as a leading voice. With "Top Mobile Application Development Voice" from Linkedin, he has established himself as a trusted advisor and thought leader in the mobile app development domain.`
    },
    {
        avatar: profile6,
        name: 'Aqsa Hassan, Lead Scientist @FAST-NUCES',
        review: `Mustafa Hassan is intelligent, enthusiastic, and diligent. He learns quickly and is self-motivated, capable of completing tasks independently and efficiently. He approaches feedback with an open mind and a positive attitude, and his calm demeanor makes him a pleasure to collaborate with. He is a highly valuable team member who swiftly understands new concepts and implements them at work with confidence. His strong professional ethics and teamwork skills make him a standout contributor.`
    }
];

const Testimonial = () => {
    return (
        <section id='testimonial'>
            <div className="section__wrapper">
                <div className="section__header">
                    <h2 className="primary__title">Recommendations</h2>
                    <p className="text__muted description">
                        Discover what other industry professionals are saying about their experiences working
                        with me as their trusted web developer.
                    </p>
                </div>
                <Swiper
                    className='testimonial__container'
                    modules={[Pagination]}
                    spaceBetween={40}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        700: {
                            slidesPerView: 2,
                        }
                    }}>
                    {data.map(({ avatar, name, review }, index) => (
                        <SwiperSlide className='testimonial' key={index}>
                            <div className="client__avatar">
                                <img src={avatar} alt={`${name}'s avatar`} />
                            </div>
                            <h3 className="client__name">{name}</h3>
                            <small className="client__review">{review}</small>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonial;
