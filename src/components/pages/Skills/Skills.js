import React  from 'react'
import './Skills.css'
import devskills from '../../../assets/images/devskills.png'

function Skills () {
        return (
                <div className='skills-container'>
                    <h1>Eric's Developer Skills</h1>
                    <div>
                    <img src={devskills} alt="skills" className="skillspic" />
                    </div>
                </div>
        )
    }

export default Skills;
