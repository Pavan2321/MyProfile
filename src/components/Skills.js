import React from 'react'
import html from './images/html.png'
import css from './images/css.png'
import js from './images/js.svg'
import reactJs from './images/react.png'
import mysql from './images/MySQL.png'
import code from './images/svg.svg'

export default function Skills() {
    return (
        <div className="skillsContainer" id='skills'> 
            <div className="skillsCard">
            <div className="headingSkill">
            <img src={code} alt={'html logo'} height={'40px'} width={'40px'} />
            <h2>Programming Skills</h2>
            </div>

                <div className="skill">
                <img src={html} alt={'html logo'} height={'80px'} width={'80px'}/>    
                <input type="range" value="90"/>
                </div>
                <div className="skill">
                <img src={css} alt={'css logo'} height={'80px'} width={'80px'}/>    
                <input type="range" value="86"/>
                </div>
                <div className="skill">
                <img src={js} alt={'js logo'} height={'80px'} width={'80px'}/>    
                <input type="range" value="80"/>
                </div>
                <div className="skill">
                <img src={reactJs} alt={'react logo'} height={'100px'} width={'100px'}/>    
                <input type="range" value="70"/>
                </div>
                <div className="skill">
                <img src={mysql} alt={'mysql logo'} height={'100px'} width={'100px'}/>    
                <input type="range" value="60"/>
                </div>
            </div>
        </div>
    )
}
