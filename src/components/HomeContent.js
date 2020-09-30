import React from 'react'
import '../App.css'
import './HomeContent.css';
import SkillCards from './SkillsCards';
import ProjectCards from './ProjectCards'
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Button.css';
import { useState } from 'react';

function HomeContent() {

    const [clickPr, setClickPr] = useState(false);
    const [clickS, setClickS] = useState(false);

    const openProjects = () => {
        setClickPr(!clickPr);
        if(clickPr){
            // <ProjectCards />
        }


    }
    const openSkills = () => {
        setClickS(!clickS);
        if(clickS){
            // <SkillCards />
        }

    }

    return (

        <div className='container'>
            <div className='left'>
                <h1>Hallo,</h1>
                <p>Ich bin Fabian!</p>
                <div className="btn-container">
                    <div className="btn-box">
                        <Link onClick={openSkills}>
                            <Button buttonStyle="btn--outline">
                                Meine Skills
                            </Button>
                        </Link>
                    </div>
                    <div className="btn-box">
                        <Link onClick={openProjects}>
                            <Button buttonStyle="btn--outline">
                                Meine Projekte
                        </Button>
                        </Link>
                    </div>
                </div>
                
                
            </div>
        </div>
    )
}

export default HomeContent;
