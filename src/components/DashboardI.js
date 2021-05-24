import React from 'react'
import "../styles/DashboardI.css"
import Activity from './Activity'
import Invoice from './Invoice'
import Nav from './Nav'
import PayingCustomers from './PayingCustomers'
import Payments from './Payments'
import SearchBar from './SearchBar'
import TopServices from './TopServices'

const DashboardI = () => {
    return (
        <div className="dashboard">
        <Nav/>
            <div className="dashboard--left">
                <SearchBar />
                <div className="dashboard--body">
                    <h2>Dashboard</h2>
                    <div className="dashboard--cards">
                        <div className="dashboard--cards--left">
                            <div className="dashboard--cardsLeft--first">
                            <Invoice/>
                            <PayingCustomers />
                            </div>
                            <div className="dashboard--cardsLeft--second">
                            <Payments />
                            <TopServices />
                            </div>
                        </div>
                        <div className="dashboard--cards--right">
                            <Activity />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DashboardI
