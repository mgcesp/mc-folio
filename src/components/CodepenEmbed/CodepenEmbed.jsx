import React from 'react'

import "./CodepenEmbed.scss"

const CodepenEmbed = ({ user, hash, height, defaultTab, zoom }) => {
    const zoomLevels = {
        "1x": "",
        "0.5x": "&zoom=0.5",
        "0.25x": "&zoom=0.25",
    };
    const zoomLevel = zoomLevels[zoom] || "";

    return (
        <iframe
            height={height}
            style={{ width: "100%" }}
            scrolling="no"
            title={`CodePen Embed ${user}/${hash}`}
            src={`https://codepen.io/${user}/embed/${hash}?default-tab=${defaultTab}&amp;hide-edit=1${zoomLevel}&amp;embed-version=2`}
            frameborder="no"
            loading="lazy"
            allowtransparency="true"
            allowfullscreen="true"
        >
            See the Pen{" "}
            <a href={`https://codepen.io/${user}/pen/${hash}`}>
                {`${user}/${hash}`}
            </a>{" "}
            by {user} (
            <a href={`https://codepen.io/${user}`}>@{user}</a>) on{" "}
            <a href="https://codepen.io">CodePen</a>.
        </iframe>
    );
};

export default CodepenEmbed