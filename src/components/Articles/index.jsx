import React from 'react';
import './Articles.css';
import { article1, article2, article3 } from '../../images'; 

const MyArticles = () => {
    const articles = [
        {
            id: 1,
            image: article1, // Replace with your image path
            title: 'LinkedIn for Students',
            description: 'Learn how to create a standout LinkedIn profile, build your professional network, and explore career opportunities. This guide covers essential tips and strategies to help students maximize LinkedIn potential for career growth and development.',
            link: 'https://medium.com/@fa21bscs0030/linkedin-for-students-90685cc36389' // Replace with your article link
        },
        {
            id: 2,
            image: article2, // Replace with your image path
            title: 'Mobile App Development Basics (A Beginners Guide)',
            description: 'Kickstart your journey into mobile app development with this beginner-friendly guide. Learn essential concepts, tools, and frameworks to build your first app, and gain the confidence to create engaging mobile applications for Android and iOS.',
            link: 'https://www.linkedin.com/pulse/mobile-app-development-basics-beginners-guide-syed-mustafa-hassan-ufyqf/?trackingId=J4J0mJ29RimtAQkD6Xs9aQ%3D%3D' // Replace with your article link
        },
        {
            id: 3,
            image: article3, // Replace with your image path
            title: 'Getting Started with AWS EC2: Create Your First EC2 Instance',
            description: 'Learn how to launch and configure your first AWS EC2 instance in this quick guide. From setting up your account to connecting to your server, get up and running with cloud computing in no time.',
            link: 'https://dev.to/mustafahassan2001/getting-started-with-aws-ec2-create-your-first-ec2-instance-3ppe' // Replace with your article link
        }
    ];

    return (
        <section id='articles'>
            <div className="section__wrapper articles__wrapper">
                <div className="section__header center">
                    <h2 className="primary__title">My Articles</h2>
                </div>
                <div className="articles__group">
                    {articles.map(article => (
                        <article key={article.id} className="article">
                            <div className="article__image">
                                <img src={article.image} alt={article.title} />
                            </div>
                            <h3 className="title">{article.title}</h3>
                            <p className="text__muted description">{article.description}</p>
                            <div className="article__bottom">
                                <a href={article.link} className="btn btn__primary" target="_blank" rel="noopener noreferrer">Read</a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default MyArticles;
