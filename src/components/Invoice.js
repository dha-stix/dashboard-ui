import React from 'react'
import "../styles/DashboardI.css"
import AssignmentIcon from '@material-ui/icons/Assignment';
const Invoice = () => {
    return (
        <div className="invoice">
            <div className="invoice--header">
            <h3>Invoice</h3>
            <AssignmentIcon  fontSize="large" className="invoice-icon"/>
            </div>

            <div className="invoice--issue">
                <h1>#0077</h1>
            </div>
        </div>
    )
}

export default Invoice
