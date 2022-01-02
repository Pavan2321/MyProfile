import React from 'react'
import myPic from './images/myPic.jpeg'

export default function About() {
    return (
        <div className="aboutContainer" id='about'>
            <div className="card">
                <div className="circle"></div>
                <div className="content">
                    <h1>Pavan Kumar R</h1>
                    <p>I Completed my BCA in Mangalore University,<br/>
                    i'm interested in web design and development.

                    </p>
                    <a href="https://github.com/Pavan2321/">Git</a>
                </div>
                <img src={myPic} alt="myImage"></img>
            </div>
        </div>
    )
}
