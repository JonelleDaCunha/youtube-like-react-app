import { React, useRef, useState } from 'react'
import classes from './Header.module.css'
import MenuIcon from '@mui/icons-material/Menu';
import VideocamIcon from '@mui/icons-material/Videocam';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link, useHistory } from 'react-router-dom';
import { IconButton } from '@mui/material';

function Header( props ) {
    const history = useHistory()
     const searchQuery = useRef();
    //const [searchQuery, setSearchQuery] = useState(null);

    function search(){
        const query=searchQuery.current.value;
        history.push({
            pathname: '/search',
            search: '?search='+query,  // query string
            state: {  // location state
              search: query, 
            },
          }); 

    }

    return (
        <div className={classes.Header}>
            <div className={classes.iconsDiv}>
                <IconButton 
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <MenuIcon onClick={props.toggleSidebar} className={classes.icons} />
                </IconButton>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <div>
                        <img src='/images/video-player.png' alt='Icons made by Freepik from www.flaticon.com' className={classes.logo}/>
                        <h1 className={classes.logoText}>Jonelle</h1>
                    </div>
                </Link>                
            </div>
            <div className={classes.searchBar}>
                <input type='text' required id='searchBar' placeholder="Search" 
                    // onChange={(e)=> setSearchQuery(e.target.value)} 
                    ref={searchQuery}
                    onKeyPress={event => {
                        if (event.key === 'Enter') {
                          search()
                        }
                      }}/>
                {/* <Link to={{pathname:'/search/'+searchQuery.current }}  style={{ textDecoration: 'none' }}> */}
                    
                    <SearchIcon className={classes.icons} onClick={search}/>
                {/* </Link> */}
            </div>
            <div>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                    // onClick={handleProfileMenuOpen}
                    >
                    <AccountCircleIcon className={classes.icons}/>
                </IconButton>
                {/* <AccountCircleIcon className={classes.icons}/> */}
            </div>
        </div>
    )
}

export default Header
