import React, { useState } from "react";
import "./Card.css";
import { AiFillGithub } from "react-icons/ai";

const Card = (props) => {
    const [openStackExpandBar, setopenStackExpandBar] = useState(false);

    return (
        <div className="card">
            <div className="picture">
                <img src={props.image} alt={props.title} />
            </div>
            <div className="card__details">
                <div className="card__details__top">
                    <h2 className="title">{props.title}</h2> 
                </div>
                <div className="card__details__middle">
                    {props.data.description}
                </div>
                <div className="card__details__bottom">
                    <div className="stack__container">
                        <div className="stack__left">Stack</div>
                        <div className="stack__right">
                            <div className="stack__box__container">
                                {
                                    props.stack.map((list, index) => {
                                        if(index < 4) {
                                            return (
                                                <div className="stack__box" key={index}>
                                                    <div className="stack__icon__container">
                                                        <span className="stack__icon" style={{color: list.iconColor}}>
                                                            {list.icon}
                                                        </span>                     
                                                        <span className="stack__name">
                                                            {list.name}    
                                                        </span>                          
                                                    </div>
                                                </div>
                                            )
                                        }
                                    })
                                }
                            </div>
                            {/* End Of Stack Box */}

                            {
                                props.stack.length > 4 ? (
                                    <div className="stack__view__more">
                                        <div className="more__btn" onClick={() => setopenStackExpandBar(!openStackExpandBar)}></div>
                                        <div className={`stack__expand__box ${openStackExpandBar ? "open__stack__expand__box" : ""}`}>
                                            <h3 className="title">More Stack Used</h3>
                                            <div className="stack__box__container">
                                                {
                                                    props.stack.map((list, index) => {
                                                        if(index >= 4) {
                                                            return (
                                                                <div className="stack__box" key={index}>
                                                                    <div className="stack__icon__container">
                                                                        <span className="stack__icon" style={{color: list.iconColor}}>
                                                                            {list.icon}
                                                                        </span>
                                                                        <span className="stack__name">
                                                                            {list.name}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            )
                                                        }
                                                    })
                                                }
                                            </div>
                                        </div>    
                                    </div>
                                ) : ""
                            }
                        </div>
                    </div>
                    
                    {/* End of Stack Container */}
                    <div className="button__container">
                        <a href={props.data.demoLink} target="_blank" className="btn btn__primary" rel="noopener noreferrer">Demo</a>
                        <a href={props.data.githubLink} target="_blank" className="btn__share" rel="noopener noreferrer">
                            <AiFillGithub />
                        </a>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Card;
