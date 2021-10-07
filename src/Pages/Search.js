import React, { useState, useEffect  } from 'react'
import { useLocation, useParams } from 'react-router';
import VideoCard from '../VideoCard';
import classes from './Search.module.css'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import VideoThumbnail from '../VideoThumbnail';
import { Link } from 'react-router-dom';
import { Pagination } from '@mui/material';
import { Box } from '@mui/system';


export default function Search() {
    const location = useLocation ();
    const [isLoading, setIsLoading] = useState(true);
    const [videoList, setVideoList] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://api.dailymotion.com/videos?fields=id,title,url,thumbnail_180_url,description,owner.id,owner.username,owner.avatar_480_url,duration,channel,views_total,created_time&language=en&search='+location.state.search+'&page='+page)
        .then(response => {
            return response.json();
        }).then( data => {
            setIsLoading(false);  
            setVideoList(data.list);
            console.log((videoList));
        });

    }, [page,location.state]);
        

    const handlePageChange = (event, value) => {
        setPage(value);
      };

    if (isLoading) {
        return (
          <section>
            <p>Loading...</p>
          </section>
        );
      }


    return (
        <List sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}>
            <h1 className={classes.pageTitle}>Search Results</h1>
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
                            <ListItemAvatar sx={{ maxWidth: 330, minWidth: 330, maxHeight: 190}}>
                                <VideoThumbnail thumbnail={item.thumbnail} title={item.title} />
                            </ListItemAvatar>
                        <ListItemText
                            primary={item.title}
                            secondary={
                            <p>
                                {item.ownerUsername}<br/>
                                {item.views} views • {item.timePassed}<br/>
                                <br/>
                                Description :{item.description}
                            </p>
                            }
                            style={{margin:'20px', color: 'black'}}
                        />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </Link>
                )
            })}
            <Box my={2} display="flex" justifyContent="center">
                <Pagination count={10} page={page} onChange={handlePageChange} />
            </Box>
        </List>
    )

}