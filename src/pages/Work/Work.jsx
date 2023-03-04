import React from 'react'
import { Link } from 'react-router-dom'
import Tabbar from "../../components/Tabbar/Tabbar";

const Work = () => {
    return (
        <div className="frame">
            <div className="feed">
                <div className="pageHeader">
                    <Link className="pageHeaderLink" to="/">
                        <img src="img/mc-avatar-right.png" alt="" />
                        <p>Manuel Cespedes</p>
                    </Link>
                </div>
                <div className="page">
                    <h1>Projects</h1>
                    <p>I work on my own projects and ideas. Some are just prototypes and some are more.</p>
                </div>
                <div className="page">
                    <div className="pageTitle">
                        <h3>Footy Experience</h3>
                        <p>footyexperience.com</p>
                    </div>
                    <p>An e-commerce product that aims to improve the experiences around buying, gifting, and collecting football kits.</p>
                </div>
                <div className="page">
                    <div className="pageTitle">
                        <h3>MC Dribbble</h3>
                        <p>https://mcdribbble.vercel.app</p>
                    </div>
                    <p>An e-commerce product that aims to improve the experiences around buying, gifting, and collecting football kits.</p>
                </div>
                <div className="page">
                    <div className="pageTitle">
                        <h3>MC Instagram</h3>
                        <p>https://mcinstagram.vercel.app</p>
                    </div>
                    <p>An e-commerce product that aims to improve the experiences around buying, gifting, and collecting football kits.</p>
                </div>
                <div className="page">
                    <div className="pageTitle">
                        <h3>MC Youtube</h3>
                        <p>https://mc-youtube.vercel.app</p>
                    </div>
                    <p>An e-commerce product that aims to improve the experiences around buying, gifting, and collecting football kits.</p>
                </div>
            </div>
            <Tabbar />
        </div>
    )
}

export default Work