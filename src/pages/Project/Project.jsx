import React from 'react'
import { Link } from 'react-router-dom'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./Project.scss"

const Project = () => {
    return (
        <div className="feed">
            <div className='projectNav'>
                <div className="wrapper">
                    <div className="left">
                        <Link to="/Corp">
                            <ArrowBackIcon />
                        </Link>
                    </div>
                    <div className="right">
                    </div>
                </div>
            </div>
            <div className="page about">
                <h1>Foureyes</h1>
                <p>
                    A SaaS product that offers solutions for automating sales and marketing processes.
                </p>
            </div>
            <div className="pageProject">
                <img className="pageImg" src="img/fe_design_system.png" alt="" />
                <div className="pageContent">
                    <div className="pageTitle">
                        <h3>Improving a design system</h3>
                    </div>
                    <p>Jul 2021 - Dec 2021</p>
                    <h4>Overview</h4>
                    <p>The product team was growing and working on multiple products, which led to the need to evolve the existing design system. The updated design system aimed to increase design efficiency, improve cross-functional collaboration, and streamline product development. The results were a more efficient design process, faster decision-making, and increased product quality.</p>
                    <div className="pageActions">
                        <Link to="/project">
                            <button>
                                <span>View more</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="page blank"></div>
        </div>
    )
}

export default Project