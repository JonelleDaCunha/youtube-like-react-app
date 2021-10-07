import { Route, Switch } from 'react-router';
import { useState } from 'react';
import WatchVideo from './Pages/WatchVideo';
import './App.css';
import Header from './Header';
import RecommendedVideos from './Pages/RecommendedVideos';
import Sidebar from './Sidebar/Sidebar';
import Explore from './Pages/Explore';
import Subscribed from './Pages/Subscribed';
import Search from './Pages/Search';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#f76579',
      main: '#ff97a8',
      dark: '#bf314d',
      contrastText: '#fff',
    },
    secondary: {
      light: '#f7c4c2',
      main: '#fff7f5',
      dark: '#c39392',
      contrastText: '#000',
    },
  },
});

function App() {
  
  const [sidebarOpen, setSidebarOpen] = useState(false)

  let appClass= sidebarOpen ? 'App open' : 'App';

  function toggleSidebar(){
      setSidebarOpen(!sidebarOpen);
  }

  return (
    <div className={appClass}>
      
      <Header toggleSidebar={toggleSidebar}></Header>
      {/* <div className='sidebarVideoLayout'> */}
        <Sidebar sidebarOpen={sidebarOpen}/>
        <Switch>
          <Route path='/' exact>
            <RecommendedVideos />
          </Route>
          <Route path='/video/:id'>
            <WatchVideo />
          </Route>
          <Route path='/explore'>
            <Explore />
          </Route>
          <Route path='/subscribed'>
            <Subscribed />
          </Route>
          <Route path='/search'>
            <Search />
          </Route>
        </Switch>
      {/* </div> */}
    </div>
  );
}

export default App;
