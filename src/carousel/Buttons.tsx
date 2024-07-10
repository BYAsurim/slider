import React from "react";
import nextArrow from '../image/svg/arrowRight.svg'
import prevArrow from '../image/svg/arrowLeft.svg'

export const SampleNextArrow: React.FC<{
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}> = ({className, style, onClick}) => {
    return (
        <div
            className={`${className}`}
            style={{...style, display: 'block', zIndex: 2}}
            onClick={onClick}
        >
            <img src={nextArrow} alt="Next"/>
        </div>
    );
};

export const SamplePrevArrow: React.FC<{
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}> = ({className, style, onClick}) => {
    return (
        <div
            className={`${className} `}
            style={{...style, display: 'block', zIndex: 2}}
            onClick={onClick}
        >
            <img src={prevArrow} alt="Prev"/>
        </div>
    );
};