import React from 'react'
import forest from './images/forest.png'

export default function Hero() {
    // function stars(){
    //     let count = 500;
    //     let scene = document.querySelector('.scene');
    //     let i = 0;
    //     while( i < count ){
    //         let star = document.createElement("i");
    //         let x = Math.floor(Math.random() * window.innerWidth);
    //         let y = Math.floor(Math.random() * window.innerHeight);
    //         let duration = Math.random() * 10;
    //         let size = Math.random() * 2;

    //         star.style.left = x +'px';
    //         star.style.top =  y +'px';
    //         star.style.width = 1+size+'px';
    //         star.style.height = 1+size+'px';

    //         star.style.animationDuration = 5+duration+'s';
    //         star.style.animationDelay = duration+'s';


    //         scene.appendChild(star);
    //         i++;
    //     }
    // }
    // stars();
    return (
        <div className="scene" id="hero">
        <div className="moon"></div>
        <div className="intro">
            <h1>Hi, I'm Pavan Kumar R</h1>
            <h3>I'm a web developer </h3>
        </div>
        <img src={forest} alt="forest" className="forest"/>
        </div>
    )
}
