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
                </div>
                <div className="center">
                    <Link to="/">
                        <img class="logo" src="img/manolo-logo.png" alt="" />
                    </Link>
                </div>
                <div className="right">
                </div>
            </div>
        </div>
    )
}

export default Navbar