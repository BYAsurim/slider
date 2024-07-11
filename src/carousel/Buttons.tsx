import React from "react";
import nextArrow from '../image/svg/arrowRight.svg'
import prevArrow from '../image/svg/arrowLeft.svg'
import './button.css'

export const SampleNextArrow: React.FC<{
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
    disabled?: boolean
}> = ({className, style, onClick, disabled}) => {
    return (
        <button
            className={`button  ${className} `}
            style={{...style, display: 'block', zIndex: 2}}
            onClick={onClick}
            disabled={disabled}
        >
            <img src={nextArrow} alt="Next"/>
        </button>
    );
};

export const SamplePrevArrow: React.FC<{
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
    disabled?: boolean
}> = ({className, style, onClick, disabled}) => {
    return (
        <button
            className={`button  ${className} `}
            style={{...style, display: 'block', zIndex: 2,}}
            onClick={onClick}
            disabled={disabled}
        >
            <img src={prevArrow} alt="Prev"/>
        </button>
    );
};