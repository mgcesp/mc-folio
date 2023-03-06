import React from 'react'
import { Link } from 'react-router-dom'
import Tabbar from "../../components/Tabbar/Tabbar";

import "./About.scss"

const About = () => {
    return (
        <div className="feed">
            <div className="page about">
                <h1>About Me</h1>
                <p>
                    I'm based in Seattle, where I've lived for the past seven years. I'm often traveling to New York and Miami, where I'm originally from.
                </p>
            </div>
            <div className="page">
                <p>
                    My interests include soccer, fitness, traveling, investing, music, dogs, and my family.
                </p>
            </div>
            <div className="page">
                <p>I live with my wife and doggo in the Greenbridge neighborhood of West Seattle.</p>
            </div>
            <div className="page blank"></div>
        </div>
    )
}

export default About