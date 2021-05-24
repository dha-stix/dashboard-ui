import React from 'react'

import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';

const Activity = () => {
    const invoiceDetails = [
        {
            title : "Invoice Sent!",
            id : "#0076",
            amount: "$1300",
            date : "11-02-2018"
        },
        {
            title : "Invoice Sent!",
            id : "#0072",
            amount : "$2000",
            date : "08-02-2018"
        },
        {
            title : "Payment Received!",
            id : "#0075",
            amount : "$2500",
            date : "08-02-2018"
        },
        {
            title : "Invoice Generated!",
            id : "#0071",
            amount : "$1500",
            date : "08-02-2018"
        },
        {
            title : "Invoice Generated!",
            id : "#0070",
            amount : "$1000",
            date : "08-02-2018"
        },
    ]
    return (
        <div className="activities">
        <div className="activities--header">
        <h3>Activity</h3>
        <NotificationsActiveIcon fontSize="large" className="activities--icon"/>
        </div>
            
            <div className="activity">
                {invoiceDetails.map(details => (
                    <div className="activity--invoice" key={details.id}>
                    <h4>{details.title}<small>{details.date}</small></h4>
                    <p>
                        Transaction with Invoice <span id="invoice-number">{details.id}</span> of amount <strong>{details.amount}</strong> was successful.
                    </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Activity
