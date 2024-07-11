import React from 'react';
import './app.css'
import img from './image/1.jpg'
import img2 from './image/2.jpg'
import img3 from './image/3.jpg'
import img4 from './image/4.jpg'
import img5 from './image/4.jpg'
import img6 from './image/5.jpg'
import img7 from './image/6.jpg'
import img8 from './image/7.jpg'
import img9 from './image/8.jpg'
import {Carousel} from "./carousel/Carousel";

export type ProjectsType = {
    category: string
    name: string
    year: number
    image: string
}

function App() {

    const projects = [
        {
            category: 'Web Development',
            name: 'Project A',
            year: 2021,
            image: img,
        },
        {
            category: 'Mobile App',
            name: 'Project B',
            year: 2022,
            image: img2,
        },
        {
            category: 'Mobile ',
            name: 'Project B',
            year: 2022,
            image: img3,
        },
        {
            category: 'Mobile 1',
            name: 'Project B',
            year: 2022,
            image: img4,
        }, {
            category: 'Mobile 1234',
            name: 'Project B',
            year: 2022,
            image: img5,
        }, {
            category: 'Mobile 123123',
            name: 'Project B',
            year: 2022,
            image: img6,
        }, {
            category: 'tech js ',
            name: 'Project B',
            year: 2022,
            image: img7,
        }, {
            category: 'react',
            name: 'Project B',
            year: 2022,
            image: img8,
        }, {
            category: 'redux',
            name: 'Project B',
            year: 2022,
            image: img9,
        },
    ];


    return (
        <div className="App">
            <Carousel projects={projects}/>
            {/*<Test/>*/}
        </div>

    );
}

export default App;
