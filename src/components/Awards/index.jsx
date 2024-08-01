import React from 'react'
import "./Awards.css"
import { badge1, badge2, badge3, badge4, badge5, badge6, badge7, badge8, badge9 } from '../../images';

const Awards = () => {
    const awards = [
        { id: 1, name: "Best Developer", image: badge1, link: 'https://mvp.microsoft.com/en-US/studentambassadors/profile/21a80cb4-86c2-4316-99ad-e54387e502a4' },
        { id: 2, name: "Outstanding Contribution", image: badge2, link: 'https://www.credly.com/badges/190f9e44-3e20-4846-8611-e8fa198d9040/public_url' },
        { id: 3, name: "Top Performer", image: badge3, link: 'https://www.credly.com/badges/d0f36c06-39c2-4c66-a4e4-93513c72ba90/public_url' },
        { id: 4, name: "Innovation Award", image: badge4, link: 'https://www.credly.com/badges/aaa19eb4-ae35-4f36-888e-e8638d2a2907' },
        { id: 5, name: "Excellence in Coding", image: badge5, link: 'https://www.credly.com/badges/06a85e7d-65c6-4a53-a111-d888bc07d4ef' },
        { id: 6, name: "Leadership Award", image: badge6, link: 'https://badgr.com/public/assertions/hwni2MGuSueQd144g_k1Qg?identity__email=fa21bscs0030@maju.edu.pk' },
        { id: 7, name: "Innovation Award", image: badge7, link: 'https://www.linkedin.com/in/mustafahassan2001/details/certifications/1713368007482/single-media-viewer/?profileId=ACoAADrFNCABhN9K-UaVW14n2-oi23Qi-37TTNQ' },
        { id: 8, name: "Excellence in Coding", image: badge8, link: 'https://www.hackerrank.com/profile/fa21bscs0030' },
        { id: 9, name: "Leadership Award", image: badge9, link: 'https://quira.sh/user/Mustafa-Hassan2001' },
    
    ];

    const handleBadgeClick = (link) => {
        window.open(link, '_blank');
    };

    return (
        <section id='awards'>
            <div className="section__wrapper awards__wrapper">
                <div className="section__header center">
                    <h2 className="primary__title">Awards</h2>
                    <p className="text__muted description">
                        Here are some of the awards and recognitions I've received for my work and contributions.
                    </p>
                </div>

                <div className="awards__group">
                    {awards.map((award) => (
                        <article className="award" key={award.id} onClick={() => handleBadgeClick(award.link)}>
                            <div className="award__image">
                                <img src={award.image} alt={award.name} />
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Awards;
