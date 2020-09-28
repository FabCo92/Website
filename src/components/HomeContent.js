import React from 'react'
import '../App.css'
import './HomeContent.css'
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Button.css'

function HomeContent() {
    return (

        <div className='container'>
            <div className='left'>
                <h1>Hallo,</h1>
                <p>Ich bin Fabian!</p>
                <div className="btn-container">
                    <div className="btn-box">
                        <Link to="/Projects">
                            <Button buttonStyle="btn--outline">
                                Meine Skills
                            </Button>
                        </Link>
                    </div>
                    <div className="btn-box">
                        <Link to="/Projects">
                            <Button buttonStyle="btn--outline">
                                Meine Projekte
                        </Button>
                        </Link>
                    </div>
                </div>
                <div className='icon-container'>
                    <a href="https://github.com/FabCo92">
                        <i class="fab fa-github fa-4x"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/fabian-seelert/">
                        <i class="fab fa-linkedin fa-4x"></i>
                    </a>

                </div>
            </div>
        </div>
    )
}

export default HomeContent;
