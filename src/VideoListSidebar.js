import { Divider, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import VideoThumbnail from './VideoThumbnail';

function VideoListSidebar() {
    const [isLoading, setIsLoading] = useState(true);
    const [videoList, setVideoList] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://api.dailymotion.com/videos?fields=id,title,url,thumbnail_180_url,owner.id,owner.username,owner.avatar_480_url,duration,channel,views_total,created_time&language=en&limit=12')
        .then(response => {
            return response.json();
        }).then( data => {
            setIsLoading(false);  
    
            setVideoList(data.list);
            console.log((videoList));
        });

    }, []);

    if (isLoading) {
        return (
          <section>
            <p>Loading...</p>
          </section>
        );
      }

    return (
        <List sx={{ width: '100%', maxWidth: '100%' }}>
        <h3>Watch Next</h3>
        {videoList.map((item) => {
            item.thumbnail=item.thumbnail_180_url; 
            item.views=item.views_total; 
            item.createdTime=item.created_time; 
            item.ownerId=item['owner.id']; 
            item.ownerUsername=item['owner.username'];
            item.ownerAvatar=item['owner.avatar_480_url'];
            return(
                <Link to={{pathname:'/video/'+item.id }}  style={{ textDecoration: 'none' }}>
                    <ListItem alignItems="flex-start" key={item.id}>
                        <ListItemAvatar sx={{ maxWidth: 190, minWidth: 190, maxHeight: 109, minHeight: 109}}>
                            <VideoThumbnail thumbnail={item.thumbnail} title={item.title} width="180" height="103"/>
                        </ListItemAvatar>
                    <ListItemText
                        primary={
                            <h5>{item.title}</h5>
                                }
                        secondary={
                        <p>
                            {item.ownerUsername}<br/>
                            {item.views} views • {item.timePassed}<br/>
                        </p>
                        }
                        style={{margin:'20px', color: 'black'}}
                    />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </Link>
            )
        })}
    </List>
    )
}

export default VideoListSidebar
