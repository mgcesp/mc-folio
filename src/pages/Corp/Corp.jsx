import React from 'react'
import { Link } from 'react-router-dom'
import Tabbar from "../../components/Tabbar/Tabbar";

const Corp = () => {
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
                    <h1>Work</h1>
                    <p>For the past seven years I've worked with everything from start-ups to industry leaders.</p>
                </div>
                <div className="page">
                    <div className="pageTitle">
                        <h3>Foureyes</h3>
                        <p>2021 - 2022</p>
                    </div>
                    <p>At Foureyes, a SaaS company, I led projects end-to-end, helping design the UX of their platform for automotive dealerships.</p>
                    <p>I helped ship features to streamline sales and marketing processes. Transforming conceptual ideas and customer feedback into useful product opportunities.</p>
                    <p>I grew the design system practice by documenting visual patterns, creating workflows, and evolving their component library.</p>
                </div>
                <div className="page">
                    <div className="pageTitle">
                        <h3>Amazon</h3>
                        <p>2020</p>
                    </div>
                    <p>At Amazon, I helped design the UX for the Amazon Brand Portal, an internal product to obtain brand assets and guidelines.</p>
                    <p>I helped ship features relating to search, navigation, content management, user feedback, accessibility, and natural language processing.</p>
                    <p>I elevated their visual craft and laid the foundations for a design system.</p>
                </div>
                <div className="page">
                    <div className="pageTitle">
                        <h3>Microsoft</h3>
                        <p>2019</p>
                    </div>
                    <p>At Microsoft, I helped design the UX for the M365 Admin Center, an enterprise product for IT management.</p>
                    <p>I helped ship features relating to user feedback, search, and user management.</p>
                    <p>I prototyped experiences and micro-interactions using components of their Fluent UI design system.</p>
                </div>
                <div className="page">
                    <div className="pageTitle">
                        <h3>Snap! Mobile</h3>
                        <p>2017 - 2018</p>
                    </div>
                    <p>At Snap! Mobile, I helped design the UX for the Snap! Raise App, a mobile sales product and Snap! Shop, an e-commerce product.</p>
                    <p>I helped ship features relating to fundraising, sales processes, onboarding, time management, account management, internal operations and marketing.</p>
                    <p>I elevated the visual language of their products and introduced design system thinking.</p>
                </div>
            </div>
            <Tabbar />
        </div >
    )
}

export default Corp