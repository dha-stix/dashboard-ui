import React from 'react'
import MoreIcon from '@material-ui/icons/More';
import "../styles/DashboardI.css"

const TopServices = () => {
    const customers = [
        {
            name : ".Net Consultancy Services",
            amount : "$124 200",
            id : 1
        },
        {
            name : "Software Testing and QA",
            amount : "$99 600",
            id : 2
        },
        {
            name : "UI/UX Design Services",
            amount : "$72 550",
            id : 3
        },
        {
            name : "Mobile Application Development",
            amount : "$64 300",
            id : 4
        },
        {
            name : "Art direction",
            amount : "$23 700",
            id : 5
        },

    ]
    return (
        <div className="services">
        <div className="services--header">
        <h3>Top Selling Services/Products</h3>
        <MoreIcon fontSize="large" className="services--icon"/>
        </div>
         
            <div className="customers--lists">
            {customers.map( customer => (
                <div className="customers--list" key={customer.id}>
                    <div className="customers--id">
                        <p>{customer.id}</p>
                    </div>
                    <div className="customers--details">
                        <p className="customers--name">{customer.name}</p>
                       
                        <div className="customers--fee">
                            <p>{customer.amount}</p>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default TopServices
