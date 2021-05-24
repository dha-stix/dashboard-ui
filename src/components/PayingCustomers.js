import React from 'react'
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import "../styles/DashboardI.css"

const PayingCustomers = () => {
    const customers = [
        {
            name : "Reactial",
            amount : "$230 700",
            id : 1
        },
        {
            name : "Traveller",
            amount : "$182 000",
            id : 2
        },
        {
            name : "Don Walsh",
            amount : "$139 900",
            id : 3
        },
        {
            name : "Ethan Mann",
            amount : "$75 400",
            id : 4
        },
        {
            name : "Promotional",
            amount : "$64 700",
            id : 5
        },

    ]
    return (
        <div className="customers">
        <div className="customers--header">
            <h3>Top Paying Customers</h3>
            <PeopleOutlineIcon  fontSize="large" className="customers--icon"/>
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

export default PayingCustomers
