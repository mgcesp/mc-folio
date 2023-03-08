import React from 'react'
import { Link } from 'react-router-dom'
import CodepenEmbed from "../../components/CodepenEmbed/CodepenEmbed";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./Projects.scss"

const Projects = () => {
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
                    <p>
                        The product team was growing and working on multiple products, this led to the need to evolve the existing design system. The updated design system aimed to increase design efficiency and improve cross-functional collaboration.
                    </p>
                    <div className="pageActions">
                        <Link to="/project">
                            <button>
                                <span>Read more</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="pageProject">
                <CodepenEmbed
                    user="manny_pixels"
                    hash="MWmVpVm"
                    height="320"
                    defaultTab="result"
                    zoom="0.5x"
                />
                <div className="pageContent">
                    <div className="pageTitle">
                        <h3>Creating a branded loader</h3>
                    </div>
                    <p>
                        There was an opportunity to improve the UX by inserting a loader in between product transitions.
                    </p>
                </div>
            </div>
            <div className="pageProject">
                <img className="pageImg" src="img/foureyes_surfacing_value_latest.jpg" alt="" />
                <div className="pageContent">
                    <div className="pageTitle">
                        <h3>Surfacing product value and increasing revenue</h3>
                    </div>
                    <p>
                        I was part of a team who uncovered opportunities to increase revenue by surfacing product value of the Foureyes Omni-Tracking product.
                    </p>
                    <div className="pageActions">
                        <Link to="/">
                            <button>
                                <span>Coming soon</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="pageProject">
                <img className="pageImg" src="img/foureyes_new_product.jpg" alt="" />
                <div className="pageContent">
                    <div className="pageTitle">
                        <h3>Prototyping and testing a new product concept</h3>
                    </div>
                    <p>
                        I was part of a team who prototyped, validated, and delivered Foureyes Call Tracking, a proof of concept for Foureyes’ newest product module aimed for marketing and sales professionals.
                    </p>
                    <div className="pageActions">
                        <Link to="/project">
                            <button>
                                <span>Coming soon</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="page blank"></div>
        </div>
    )
}

export default Projects