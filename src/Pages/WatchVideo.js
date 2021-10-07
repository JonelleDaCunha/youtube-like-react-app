import { React, useEffect, useState} from 'react'
import ReactPlayer from 'react-player';
import { useParams } from 'react-router';
import classes from './WatchVideo.module.css'
import { calcTimeBetween } from '../dataFormat';
import { Avatar, Divider, Grid, Paper } from '@mui/material';
import VideoListSidebar from '../VideoListSidebar';

function WatchVideo() {
    let { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
//    const video={
//         id: "x84mw17",
//         title: "Netflix acquires indie video game studio",
//         url: "https://www.dailymotion.com/video/x84mw17",
//         thumbnail_url: "https://s2.dmcdn.net/v/TI--h1XMpY86zjyV2",
//         'owner.id': "x2ed3vc",
//         'owner.username': "BANGShowbiz-Technology",
//         'owner.avatar_480_url': "https://s1.dmcdn.net/u/8fMhO1XMrHazgIYr5/480x480",
//         duration: 73,
//         channel: "tech",
//         views_total: 3,
//         created_time: 1633354994,
//         description: "description yayay"
//     }

    const [video, setVideo] = useState([]);

    console.log('https://api.dailymotion.com/video/'+id+'?fields=id,title,url,thumbnail_url,owner.id,owner.username,owner.avatar_480_url,duration,channel,views_total,created_time')
    useEffect(() => {
        setIsLoading(true);
        fetch('https://api.dailymotion.com/video/'+id+'?fields=id,title,url,thumbnail_url,owner.id,owner.username,owner.avatar_480_url,duration,channel,views_total,created_time')
        .then(response => {
            return response.json();
        }).then( data => {
            setIsLoading(false);    
            setVideo(data);
            console.log((video));
        });

    }, []);

    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }
   
    var createdDate = new Date(0);
    createdDate.setUTCSeconds(video.created_time);
    var currentDate = new Date();
    //currentDate.setFullYear(2022);


    var timePassed=calcTimeBetween(createdDate,currentDate)
    return (
        <Grid container spacing={2}>
            <Grid item xs={8}>
                 <div className={classes.WatchVideo}>
                    <div className={classes.video}>
                        <ReactPlayer url={video.url} controls='true' width="100%" height="100%" className={classes.reactPlayer} />
                    </div>
                    <Divider variant="inset" style={{margin:0}} />
                    <div className={classes.infoBox}>
                        <div>
                            <h3 className={classes.info}>{video.title}</h3>
                            <p>{video.views_total} views • {timePassed}</p>
                        </div>
                        <div className={classes.owner}>
                            <Avatar src={video['owner.avatar_480_url']} alt={video.title}
                                sx={{ width: 24, height: 24, margin: '5px' }}
                            />
                            <p>{video['owner.username']}</p>
                        </div>
                        <div className={classes.description}>
                            <p>
                                {video.description}
                            </p>
                        </div>
                    </div>
                    
                    <Divider variant="inset" style={{margin:0}} />
                </div> 
            </Grid>
            <Grid item xs={4}>
                {/* <Paper>item 2</Paper> */}
                <VideoListSidebar />
            </Grid>
        </Grid>
        
    )
}

export default WatchVideo
