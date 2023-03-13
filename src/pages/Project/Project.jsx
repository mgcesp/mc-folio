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
                        <Link to="/projects/1">
                            <ArrowBackIcon />
                        </Link>
                    </div>
                    <div className="right">
                    </div>
                </div>
            </div>
            <div className="page">
                <h1>Improving a design system</h1>
                <p>Foureyes | 2022</p>
            </div>
            <div className="pageProject">
                <img src="/img/image_placeholder.png" alt="" className="pageImg" />
            </div>
            <div className="page">
                <div className="pageTitle">
                    <h3>Overview</h3>
                </div>
                <p>
                    The product team at Foureyes, a SaaS company, was growing quickly, working on multiple products, and moving fast. This led the need to evolve the existing design system. The updated design system aimed to improve design team efficiency, improve cross-functional collaboration, and increase product quality.
                </p>
                <p>
                    The results were a more efficient design process, faster product decision-making, and increased UX and UI consistency.
                </p>
            </div>
            <div className="pageProject">
                <img src="/img/image_placeholder.png" alt="" className="pageImg" />
                <div className="pageImgDesc">
                    <p>Prev. Design System Ecosystem</p>
                </div>
            </div>
            <div className="page">
                <div className="pageTitle">
                    <h3>Role</h3>
                </div>
                <p>
                    As the lead product designer, my role involved collaborating with cross-functional partners, conducting a design system audit, improving the UI design kit, standardizing UX patterns, creating templates and documentation, implementing design tokens and starting a reference site.
                </p>
            </div>
            <div className="pageProject">
                <img src="/img/image_placeholder.png" alt="" className="pageImg" />
                <div className="pageImgDesc">
                    <p>Prev. Design UI Kit</p>
                </div>
            </div>
            <div className="page">
                <div className="pageTitle">
                    <h3>Challenge</h3>
                </div>
                <p>
                    The existing design system had several inefficiencies, including a lack of clear design guidelines, and inconsistent UX patterns. These inefficiencies hindered cross-functional collaboration, as product managers and engineers struggled to understand the design direction, and designers struggled to work and iterate effectively.
                </p>
            </div>
            <div className="pageProject">
                <img src="/img/image_placeholder.png" alt="" className="pageImg" />
                <div className="pageImgDesc">
                    <p>Latest Design UI Kit</p>
                </div>
            </div>
            <div className="page">
                <div className="pageTitle">
                    <h3>Approach</h3>
                </div>
                <p>
                    Based on analysis and research, we decided to evolve the existing design system by completing an audit, migrating the UI kit to Figma, running product pilots, and creating design guidelines and documentation. The team also agreed to prioritize the project after to product work.
                </p>
            </div>
            <div className="pageProject">
                <img src="/img/image_placeholder.png" alt="" className="pageImg" />
                <div className="pageImgDesc">
                    <p>Latest Design System Ecosystem</p>
                </div>
            </div>
            <div className="page">
                <div className="pageTitle">
                    <h3>Results & Impact</h3>
                </div>
                <p>
                    The updated design system had a positive impact on cross-functional collaboration by allowing for smoother communication between the design and development teams and reducing time spent on design-related discussions. Design efficiency improved as the design process became more streamlined, leading to faster product development and reduced time to market. Decision-making was also impacted positively, as the updated design system provided a clear direction for the design team and allowed for quicker and more informed decision-making.
                </p>
            </div>
            <div className="pageProject">
                <img src="/img/image_placeholder.png" alt="" className="pageImg" />
                <div className="pageImgDesc">
                    <p>UX Patten Guidelines</p>
                </div>
            </div>
            <div className="pageProject">
                <img src="/img/image_placeholder.png" alt="" className="pageImg" />
                <div className="pageImgDesc">
                    <p>Component Breakdowns</p>
                </div>
            </div>
            <div className="pageProject">
                <img src="/img/image_placeholder.png" alt="" className="pageImg" />
                <div className="pageImgDesc">
                    <p>Workflow Templates</p>
                </div>
            </div>
            <div className="page">
                <div className="pageTitle">
                    <h3>Research</h3>
                </div>
                <p>
                    To further understand the needs and pain-points of design system users, I had conversations with stakeholders from product management, engineering, data science, customer experience, and marketing. These conversations helped me gain a better understanding of the issues that the team was facing and provided me with valuable insights for improving the design system.
                </p>
            </div>
            <div className="pageProject">
                <img src="/img/image_placeholder.png" alt="" className="pageImg" />
                <div className="pageImgDesc">
                    <p>User Brainstorm</p>
                </div>
            </div>
            <div className="page">
                <div className="pageTitle">
                    <h3>User Pain-Points</h3>
                </div>
                <div className="pageLists">
                    <ul>Product Management
                        <li>Spending too much time in granular and nitpick decisions</li>
                        <li>Wasting time and energy in using multiple tools to communicate</li>
                        <li>Slow decision making = bad business</li>
                    </ul>
                    <ul>Engineering
                        <li>Differences in code, designs, and requirements</li>
                        <li>Blocked by design decisions; uncertainty in making design decisions</li>
                        <li> Lack of product consistency</li>
                        <li>Design collaboration could improve</li>
                    </ul>
                    <ul>Product Design
                        <li>Missing components, states, colors, etc. in design kit</li>
                        <li>Unreliable document management and organization of design kit</li>
                        <li>Clunky and slow prototyping</li>
                        <li>Engineering collaboration could improve</li>
                    </ul>
                </div>
            </div>
            <div className="pageProject">
                <img src="/img/image_placeholder.png" alt="" className="pageImg" />
                <div className="pageImgDesc">
                    <p>Jobs-to-be-done by user</p>
                </div>
            </div>
            <div className="page">
                <div className="pageTitle">
                    <h3>Process</h3>
                </div>
                <div className="pageLists">
                    <p>The process of evolving Foureyes' design system involved the following steps</p>
                    <ol>
                        <li>Conducting an audit of the design system, the live products, tooling, and documentation</li>
                        <li>Migrating and implementing the new design system UI kit</li>
                        <li>Conducting presentations and training sessions for the design and development teams</li>
                        <li>Creating guidelines of the most common UX design patterns</li>
                        <li>Collaborating with engineering to create a back-log and roadmap</li>
                    </ol>
                </div>
            </div>
            <div className="pageProject">
                <img src="/img/image_placeholder.png" alt="" className="pageImg" />
                <div className="pageImgDesc">
                    <p>Design System Audit</p>
                </div>
            </div>
            <div className="pageProject">
                <img src="/img/image_placeholder.png" alt="" className="pageImg" />
                <div className="pageImgDesc">
                    <p>Design System Presentations</p>
                </div>
            </div>
            <div className="pageProject">
                <img src="/img/image_placeholder.png" alt="" className="pageImg" />
                <div className="pageImgDesc">
                    <p>Design System Reference Site</p>
                </div>
            </div>
            <div className="page">
                <div className="pageTitle">
                    <h3>User Feedback</h3>
                </div>
                <p>
                    The updated design system received positive feedback from both the design and development teams, who appreciated the clear and consistent design direction it provided. Customers also noted an improvement in the overall quality of the products, with more cohesive and high-quality user experiences across all products.
                </p>
            </div>
            <div className="page">
                <div className="pageTitle">
                    <h3>Moving Forward</h3>
                </div>
                <p>
                    The updated design system has set the foundation for future design system efforts at Foureyes. The design team will continue to monitor and evolve the design system as needed, to ensure it stays current and continues to meet the needs of all stakeholders.
                </p>
            </div>
            <div className="pageProject">
                <img src="/img/image_placeholder.png" alt="" className="pageImg" />
                <div className="pageImgDesc">
                    <p>Design System Roadmap</p>
                </div>
            </div>
            <div className="page blank">
                <p>Manuel G. Cespedes</p>
                <p>Manuel G. Cespedes</p>
                <p>Manuel G. Cespedes</p>
            </div>
        </div>
    )
}

export default Project