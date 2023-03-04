import React from 'react'

import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaDribbble } from 'react-icons/fa';
import { FaCodepen } from 'react-icons/fa';

import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

import "./Home.scss"

const Home = () => {
    return (
        <div className="frame">
            <div className="feed">
                <div className="page">
                    <div className="avatar">
                    </div>
                    <h1>Hi, I'm Manuel.</h1>
                    <p>
                        I’m a designer with a focus on product design, UX engineering, and design systems.
                    </p>
                </div>
                <div className="page">
                    <p>
                        I create products and experiences people ❤️ <br />
                        and that help businesses 📈.
                    </p>
                </div>
                <div className="page">
                    <p>You can find me in these socials.</p>
                    <div className="socials">
                        <div className="social">
                            <FaTwitter />
                        </div>
                        <div className="social">
                            <FaCodepen />
                        </div>
                        <div className="social">
                            <FaLinkedin />
                        </div>
                        <div className="social">
                            <FaDribbble />
                        </div>
                    </div>
                </div>
                <div className="page">
                    <p>You can also contact me.</p>
                    <div className="contact">
                        <div className="iconBox">
                            <EmailIcon />
                        </div>
                        <p>mgcesp@gmail.com</p>
                    </div>
                    <div className="contact">
                        <div className="iconBox">
                            <PhoneIphoneIcon />
                        </div>
                        <p>786.351.1255</p>
                    </div>
                </div>
                <div className="page">
                    <p>Some companies I've worked with.</p>
                    <div className="companies">
                        <div className="company">
                            <h4>Microsoft</h4>
                        </div>
                        <div className="company">
                            <h4>Amazon</h4>
                        </div>
                        <div className="company">
                            <h4>Foureyes</h4>
                        </div>
                        <div className="company">
                            <h4>Snap! Mobile</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home