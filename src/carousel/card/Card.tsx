import React from "react";
import {ProjectsType} from "../../App";
import s from './card.module.css'

type ProjectCardType = {
    project: ProjectsType
    isActive: boolean
    index: number
    height?: string
}
export const Card: React.FC<ProjectCardType> = ({project, isActive, index, height}) => {


    return (
        <React.Fragment>
            {index === 2 ? (
                    <div className={s.fixedItem} key="fixed" style={{height: `${height}`, width: '100%'}}>
                        <span className={`${s.verticalText}  ${isActive && s.normalText}`}>Все проекты</span>
                    </div>
                ) :
                (
                    <div className={`${s.cardContainer}`} style={{height: `${height}`}}>
                        <img src={project.image} alt={project.name} className={s.img}/>
                        {isActive &&
                            <>
                                <div className={s.infoContainer}>
                                    <h3 className={s.projectName}>{project.name}</h3>
                                    <p>{project.category}</p>
                                    <p>{project.year}</p>
                                </div>
                            </>}
                    </div>)
            }
        </React.Fragment>
    )
};

