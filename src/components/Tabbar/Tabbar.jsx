import React from 'react'
import { NavLink } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import WorkIcon from '@mui/icons-material/Work';
import BusinessIcon from '@mui/icons-material/Business';

import "./Tabbar.scss"

const Tabbar = () => {
    let inactiveClassname = "tab";
    let activeClassName = "tabActive";

    return (
        <div className="tabbar">
            <div className="wrapper">
                <NavLink
                    className={({ isActive }) => (isActive ? activeClassName : inactiveClassname)}
                    to="/">
                    <div className="iconBox">
                        <HomeIcon />
                    </div>
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? activeClassName : inactiveClassname)}
                    to="/corp">
                    <div className="iconBox">
                        <BusinessIcon />
                    </div>
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? activeClassName : inactiveClassname)}
                    to="/work">
                    <div className="iconBox">
                        <WorkIcon />
                    </div>
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? activeClassName : inactiveClassname)}
                    to="/about">
                    <div className="iconBox">
                        <AccountBoxIcon />
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default Tabbar