import React from 'react'
import "../styles/DashboardI.css"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import GroupIcon from '@material-ui/icons/Group';
import EmailIcon from '@material-ui/icons/Email';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import { IconButton } from '@material-ui/core';
const Nav = () => {
    return (
        <nav className="left-nav">
        <IconButton className="left-nav-icons">
            <AccountCircleIcon fontSize="large"/>
            </IconButton>
            <IconButton className="left-nav-icons">
            <GroupIcon fontSize="large" />
            </IconButton>
            <IconButton className="left-nav-icons">
            <EmailIcon fontSize="large" />
            </IconButton>
            <IconButton className="left-nav-icons">
            <LocalOfferIcon fontSize="large"/>
            </IconButton>

        </nav>
    )
}

export default Nav
