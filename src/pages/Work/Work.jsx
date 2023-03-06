import React from 'react'
import { Link } from 'react-router-dom'

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Work = () => {
    return (
        <div className="feed">
            <div className="page">
                <h1>Workshop</h1>
                <p>Recent projects and ideas I've been working on. Including prototypes, concepts, and more.</p>
            </div>
            <div className="page">
                <div className="pageTitle">
                    <h3>Footy Experience</h3>
                </div>
                <p>An e-commerce product that aims to improve the experiences around buying, gifting, and collecting football kits.</p>
                <div className="pageActions">
                    <Link to="https://footyexperience.com/" target="_blank">
                        <button>
                            <span>View product</span>
                            <ArrowForwardIcon />
                        </button>
                    </Link>
                </div>
            </div>
            <div className="page">
                <div className="pageTitle">
                    <h3>MC Dribbble</h3>
                </div>
                <p>A Dribbble clone using the Material UI library of React JS components.</p>
                <div className="pageActions">
                    <Link to="https://mcdribbble.vercel.app" target="_blank">
                        <button>
                            <span>View product</span>
                            <ArrowForwardIcon />
                        </button>
                    </Link>
                </div>
            </div>
            <div className="page">
                <div className="pageTitle">
                    <h3>MC Youtube</h3>
                </div>
                <p>A YouTube clone using the React Bootstrap front-end framework.</p>
                <div className="pageActions">
                    <Link to="https://mc-youtube.vercel.app" target="_blank">
                        <button>
                            <span>View product</span>
                            <ArrowForwardIcon />
                        </button>
                    </Link>
                </div>
            </div>
            <div className="page">
                <div className="pageTitle">
                    <h3>MC Instagram</h3>
                </div>
                <p>An Instagram clone using the Material UI library of React JS components.</p>
                <div className="pageActions">
                    <Link to="https://mcinstagram.vercel.app" target="_blank">
                        <button>
                            <span>View product</span>
                            <ArrowForwardIcon />
                        </button>
                    </Link>
                </div>
            </div>
            <div className="page blank"></div>
        </div>
    )
}

export default Work