import React from 'react';
import { Link } from 'react-router-dom';
import classes from './VideoCard.module.css';
import ImageListItem from '@mui/material/ImageListItem';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { color } from '@mui/system';
import VideoThumbnail from './VideoThumbnail';
import {calcTimeBetween} from './dataFormat'

function VideoCard(props) {
    const {
        id,
        title,
        url,
        thumbnail,
        ownerId,
        ownerUsername,
        ownerAvatar,
        duration,
        channel,
        views,
        createdTime
    } = props.data
    
    var createdDate = new Date(0);
    createdDate.setUTCSeconds(createdTime);
    var currentDate = new Date();
    
    var timePassed=calcTimeBetween(createdDate,currentDate)

    return (
        <Card sx={{ maxWidth: 330}} elevation={0} style={{backgroundColor: "rgb(241, 240, 240)"}}>
            <CardActionArea> 
                <Link to={{pathname:'/video/'+id }}  style={{ textDecoration: 'none' }}>
                    <VideoThumbnail thumbnail={thumbnail} title={title} />
                    <CardContent >
                        <div className={classes.info}>
                            <h4>{title}</h4>
                            <p>{ownerUsername}</p>
                            <p>{views} views • {timePassed}</p>
                        </div>
                    </CardContent>
                </Link>
          </CardActionArea>
        {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
    </Card>
  );

}

export default VideoCard