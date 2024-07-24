import React, {useState} from "react";
import {ProjectsType} from "../App";
import './carouser.css';
import {Card} from "./card/Card";
import {SampleNextArrow, SamplePrevArrow} from "./Buttons";

type PropsType = {
    projects: ProjectsType[]
};

export const Carousel: React.FC<PropsType> = ({projects}) => {
    const [activeSlide, setActiveSlide] = useState(3);
    const [isHovered, setIsHovered] = useState(false);
    const [timerId, setTimerId] = useState<number>(0);
    const [nextSlide, setNextSlide] = useState(false);
    const autoScrollInterval = 3000;

    const totalSlides = projects.length;

    const next = () => {
        setNextSlide(true)
        setActiveSlide((prevSlide) => (prevSlide + 1) % totalSlides);
        setTimeout(() => {
            setNextSlide(false)
        }, 1000)
    }
    const prev = () => {
        setNextSlide(true)
        setActiveSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
        setTimeout(() => {
            setNextSlide(false)
        }, 1000)
    }
    const getDisplayedIndex = (index: number) => {
        return (index - activeSlide + totalSlides) % totalSlides;
    };
    const getStyles = (index: number) => {
        const displayedIndex = getDisplayedIndex(index);

        if (displayedIndex === 0) {
            return {
                opacity: 1,
                transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
                zIndex: 10,
                width: '460px',
                height: '360px',
                top: '0px'

            };
        } else if (displayedIndex === 1) {
            return {
                opacity: 1,
                transform: "translateX(390px) translateZ(-400px) rotateY(0)",
                zIndex: 9,
                width: '100px',
                filter: 'blur(1px)',
                margin: '0 20px',
                height: '450px',
                top: '-40px',
            }
        } else if (displayedIndex === totalSlides - 1) {
            return {
                opacity: 1,
                transform: "translateX(-390px) translateZ(-400px) rotateY(0)",
                zIndex: 9,
                width: '100px',
                filter: 'blur(1px)',
                margin: '0 20px',
                height: '450px',
                top: '-40px',
            }
        } else if (displayedIndex === totalSlides - 2 || displayedIndex === 2) {
            return {
                opacity: 1,
                transform: displayedIndex === 2 ? "translateX(550px) translateZ(-500px) rotateY(0)" : "translateX(-550px) translateZ(-500px) rotateY(0)",
                zIndex: 8,
                width: '100px',
                filter: 'blur(2px)',
                height: '400px',
                top: '-15px'
            };
        } else if (displayedIndex === totalSlides - 3 || displayedIndex === 3) {
            return {
                opacity: 1,
                transform: displayedIndex === 3 ? "translateX(720px) translateZ(-600px) rotateY(0)" : "translateX(-720px) translateZ(-600px) rotateY(0)",
                zIndex: 7,
                width: '100px',
                filter: 'blur(4px)',
            };
        } else if (displayedIndex < totalSlides - 3) {
            return {
                opacity: 0,
                transform: "translateX(-960px) translateZ(-700px) rotateY(0)",
                zIndex: 6
            };
        } else {
            return {
                opacity: 0,
                transform: "translateX(960px) translateZ(-700px) rotateY(0)",
                zIndex: 6
            };
        }
    };

    const handleMouseOverLeft = (prev?: () => void, next?: () => void) => {
        if (!isHovered) {
            setIsHovered(true);
            if (prev) {
                setTimerId(+setInterval(() => {
                    prev()
                }, autoScrollInterval))
            }
            if (next) {
                setTimerId(+setInterval(() => {
                    next()
                }, autoScrollInterval))
            }

        }
    }

    const handleMouseLeaveLeft = () => {
        setIsHovered(false);
        if (timerId) clearInterval(timerId)
    }

    return (
        <>
            <div className={'sliderWrapper'}>
                <div className={'titleWrapper'}>
                    <div className={'titleContainer'}>
                        <h2 className={'title'}>проекты</h2>
                        <div className={'lengthProject'}> ({projects.length})</div>
                    </div>
                    <span className={'subtext'}>Воплощаем мечты в реальность</span>
                </div>

                <div className="slideC">
                    {projects.map((item, i) => {
                        return (
                            <React.Fragment key={i}>
                                <div
                                    className="slide"
                                    style={{
                                        ...getStyles(i)
                                    }}
                                >
                                    <Card project={item} isActive={getDisplayedIndex(i) === 0} index={i}
                                          height={'100%'}/>
                                </div>
                                <div
                                    className="reflection"
                                    style={{
                                        ...getStyles(i)
                                    }}
                                />
                            </React.Fragment>
                        )
                    })}
                    <div>
                        <div className={'autoLeft'}
                             onMouseEnter={() => {
                                 handleMouseOverLeft(prev)
                             }}
                             onMouseLeave={handleMouseLeaveLeft}
                        ></div>
                        <div className={'autoRight'}
                             onMouseEnter={() => {
                                 handleMouseOverLeft(next)
                             }}
                             onMouseLeave={handleMouseLeaveLeft}
                        ></div>
                    </div>

                    <div className="btns">
                        <SamplePrevArrow className={'btn'} onClick={prev} disabled={nextSlide}/>
                        <SampleNextArrow className="btn" onClick={next} disabled={nextSlide}/>
                    </div>
                </div>
            </div>
        </>
    );
};