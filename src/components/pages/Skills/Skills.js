import React  from 'react'
import './Skills.css'
import devskills from '../../../assets/images/devskills1.png'

function Skills () {
        return (
                <div className='skills-container'>
                    <img src="/images/connected2.jpg" alt="" className="background"/> 
                    <div>
                        <h1 className="ericskills">Dev Skills</h1>
                        <div>
                        <img src={devskills} alt="skills" className="skillspic" />
                        </div>
                    </div>
               </div>
        )
    }

export default Skills;
