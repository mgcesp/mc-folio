import React from 'react'

import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaDribbble } from 'react-icons/fa';
import { FaCodepen } from 'react-icons/fa';

import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

import "./Home.scss"
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="frame">
            <div className="feed">
                <div className="page">
                    <div className="avatar">
                        <img src="img/mc-avatar-left.png" alt="" />
                    </div>
                    <h1>Hi, I'm Manuel.</h1>
                    <p>I create products, websites, and experiences that help businesses grow 📈.</p>
                </div>
                <div className="page">
                    <p>I’m a designer and developer, with a focus on product design, design systems, and UX engineering.</p>
                </div>
                <div className="page">
                    <p>You can find me in these social platforms.</p>
                    <div className="socials">
                        <Link className="socialLink" to="https://twitter.com/manny_pixels" target="_blank">
                            <div className="iconBox">
                                <FaTwitter />
                            </div>
                        </Link>
                        <Link className="socialLink" to="https://codepen.io/manny_pixels" target="_blank">
                            <div className="iconBox">
                                <FaCodepen />
                            </div>
                        </Link>
                        <Link className="socialLink" to="https://www.linkedin.com/in/mgcespedes/" target="_blank">
                            <div className="iconBox">
                                <FaLinkedin />
                            </div>
                        </Link>
                        <Link className="socialLink" to="https://dribbble.com/manolo" target="_blank">
                            <div className="iconBox">
                                <FaDribbble />
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="page">
                    <p>Some companies I've worked for.</p>
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
                <div className="page">
                    <p>You can also contact me directly.</p>
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
                    <p>I have experience working on web, mobile, branding, interaction design, visual design, and UX / UI design.</p>
                </div>
            </div>
        </div>
    )
}

export default Home