import VideoCard from '../VideoCard'
import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import classes from './RecommendedVideos.module.css';
import { Box } from '@mui/system';
import { Pagination } from '@mui/material';

function RecommendedVideos(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [videoList, setVideoList] = useState([]);

    const [page, setPage] = useState(1);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://api.dailymotion.com/videos?fields=id,title,url,thumbnail_180_url,owner.id,owner.username,owner.avatar_480_url,duration,channel,views_total,created_time&language=en&limit=12&page='+page)
        .then(response => {
            return response.json();
        }).then( data => {
            setIsLoading(false);  
    
            setVideoList(data.list);
            console.log((videoList));
        });

    }, [page]);
        
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
        <div>
            <h1 className={classes.pageTitle}>Recommended Videos</h1>
            <div className={classes.videoBlock}>
                {videoList.map((item) => {
                    item.thumbnail=item.thumbnail_180_url; 
                    item.views=item.views_total; 
                    item.createdTime=item.created_time; 
                    item.ownerId=item['owner.id']; 
                    item.ownerUsername=item['owner.username'];
                    item.ownerAvatar=item['owner.avatar_480_url'];

			        return <VideoCard data={item}/>
		        })}
            </div> 
            <Box my={2} display="flex" justifyContent="center">
                <Pagination count={10} page={page} onChange={handlePageChange} />
            </Box>
        </div>
    );
}

export default RecommendedVideos
