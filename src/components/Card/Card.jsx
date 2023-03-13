import React from 'react'
import { Link } from 'react-router-dom'

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Card = (item) => {
    return (
        <div className="page">
            <div className="image">
                {item.isHeader && <span>Header</span>}
            </div>
            <div className="pageTitle">
                <h3>{item.title}</h3>
                <p>{item.date}</p>
            </div>
            <p>At Foureyes, a SaaS company, I led projects end-to-end, helping design the UX of their platform for automotive dealerships.</p>
            <p>I shipped features to streamline sales and marketing processes. I transformed conceptual ideas and customer feedback into useful product opportunities.</p>
            <p>I grew the design system practice by documenting visual patterns, creating workflows, and evolving a component library.</p>
            <div className="pageActions">
                <Link to={`/projects/${item.id}`}>
                    <button>
                        <span>View projects</span>
                        <ArrowForwardIcon />
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Card