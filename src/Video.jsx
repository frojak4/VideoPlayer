import React from 'react';

function Video({src}){


const styling = {
    width: '720px',
    height: 'auto'
}

    return(
        <video src={src} style={styling} controls autostart autoPlay muted></video>
    )
}

export default Video;