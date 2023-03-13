import React from 'react'

import FolioCard from 'folio-design-system/dist/components/FolioCard/FolioCard'
import FolioButton from 'folio-design-system/dist/components/FolioButton'

import "./About.scss"

const About = () => {
    return (
        <div className="feed">
            <FolioCard
                title="About Me"
                desc="I'm based in Seattle, where I've lived for the past seven years. I'm often traveling to New York and Miami, where I'm originally from."
            />
            <FolioCard
                title=""
                desc="My interests include soccer, fitness, traveling, investing, music, dogs, and my family."
            />
            <FolioCard
                title=""
                desc="I live with my wife and doggo in the Greenbridge neighborhood of West Seattle."
            />
            <FolioButton
                label="Let's go!"
            />
            <div className="page blank"></div>
        </div>
    )
}

export default About