import React from 'react'
import { Link } from 'react-router-dom';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SegmentIcon from '@mui/icons-material/Segment';

import "./Navbar.scss"

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="left">
                    <div className="item">
                        <Link to="/products/1">
                            <ArrowBackIcon />
                        </Link>
                    </div>
                </div>
                <div className="center">
                    <Link to="/">MANOLO</Link>
                </div>
                <div className="right">
                    <div className="item">
                        <Link to="/products/2">
                            <SegmentIcon />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar