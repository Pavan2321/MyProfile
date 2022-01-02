import React from 'react'
// import myPic from './images/myPic.jpg'

export default function Navbar() {
    return (
        <div className='navbar'>
            {/* <div className='logo'><img src={myPic}/></div> */}
            <div className='links'>
                <ul>
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contact">Contact me</a></li>
                </ul>
            </div>
            {/* <div className='Contact'><a href="#">Contact us</a></div> */}
        </div>
    )
}
