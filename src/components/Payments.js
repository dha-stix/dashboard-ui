import React from 'react'
import "../styles/DashboardI.css"
import PaymentIcon from '@material-ui/icons/Payment';
const Payments = () => {
   
    return (
        <div className="payments">
        <div className="payments--header">
            <h3>Payments</h3>
            <PaymentIcon  fontSize="large" className="payments-icon"/>
        </div>
            
            <div className="payments-fee">
            <h1>$450,000 </h1>
            </div>
        </div>
    )
}

export default Payments
