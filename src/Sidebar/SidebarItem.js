import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import styled from 'styled-components';
import './Sidebar.css'

export const Row = styled.div`
    display: flex;
    padding: 10px;   
    color: black;

    > p {
        margin-left: 10px;
    }

    &:hover{
        background-color: rgb(247, 101, 121);
        color: white;
    }
`;

function SidebarItem(props) {
    if(props.title=='home'){
        return(
            <Row>
                <HomeOutlinedIcon></HomeOutlinedIcon>
                <p>Home</p>
            </Row>
        )
    }
    else if(props.title=='explore'){
        return(
            <Row>
                <ExploreOutlinedIcon></ExploreOutlinedIcon>
                <p>Explore</p>
            </Row>
        )
    }
    return(
        <Row>
            <SubscriptionsOutlinedIcon></SubscriptionsOutlinedIcon>
            <p>Subscription</p>
        </Row>
    )
}

export default SidebarItem
