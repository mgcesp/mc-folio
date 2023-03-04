import React from 'react'
import { Link } from 'react-router-dom'
import Tabbar from "../../components/Tabbar/Tabbar";

import "./About.scss"

const About = () => {
    return (
        <div className="frame">
            <div className="feed">
                <div className="pageHeader">
                    <Link className="pageHeaderLink" to="/">
                        <img src="img/mc-avatar-right.png" alt="" />
                        <p>Manuel Cespedes</p>
                    </Link>
                </div>
                <div className="page about">
                    <h1>About Me</h1>
                    <p>
                        I’m biased for action and driven by teamwork, high-quality design, and results.
                    </p>
                </div>
                <div className="page">
                    <p>
                        I'm based in Seattle, where I've lived for the past seven years. I'm often traveling to New York and Miami, where I'm originally from.
                    </p>
                </div>
                <div className="page">
                    <p>
                        I've worked with everything from start-ups to industry leaders. Helping them create valuable products and experiences in the consumer and enterprise spaces (B2C, B2B, and B2B2C).
                    </p>
                </div>
                <div className="page">
                    <p>
                        Additionally, I love football, fitness, traveling, investing, music, dogs, and my family.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About