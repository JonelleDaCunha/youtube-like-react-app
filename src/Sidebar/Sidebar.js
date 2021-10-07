import React from 'react'
import SidebarItem from './SidebarItem'
import './Sidebar.css'
import { Link } from 'react-router-dom';

function Sidebar(props) {
    let sidebarClass= props.sidebarOpen ? 'sidebar open' : 'sidebar';
    let shadowClass= props.sidebarOpen ? 'shadow open' : 'shadow';
    return (
        <div>
            <div className={sidebarClass}>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <SidebarItem title='home'/>
                </Link>
                <Link to='/explore'  style={{ textDecoration: 'none' }}>
                    <SidebarItem title='explore'/>
                    </Link>
                <Link to='/subscribed'  style={{ textDecoration: 'none' }}>
                    <SidebarItem title='subscriptions'/>
                </Link>
            </div>
            <div className={shadowClass}>

            </div>
        </div>
        
    )
}

export default Sidebar
