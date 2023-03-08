import React from 'react'
import { Link } from 'react-router-dom'
import CodepenEmbed from "../../components/CodepenEmbed/CodepenEmbed";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./Project.scss"

const Project = () => {
    return (
        <div className="feed">
            <div className='projectNav'>
                <div className="wrapper">
                    <div className="left">
                        <Link to="/Projects">
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
        </div>
    )
}

export default Project