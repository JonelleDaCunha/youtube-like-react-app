import React from 'react'
import CardMedia from '@mui/material/CardMedia';


function VideoThumbnail(props) {
    let width,height;

    if(props.width==null)
    {
        width="330"
    }
    else{
        width=props.width;
    }

    if(props.height==null)
    {
        height="190"
    }
    else{
        height=props.height;
    }

    return (
        <CardMedia
        component="img"
        width={width}
        height={height}
        image={props.thumbnail}
        alt={props.title}
        />
    )
}

export default VideoThumbnail
