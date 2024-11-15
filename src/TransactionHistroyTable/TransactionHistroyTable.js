import React from 'react'

const TransactionHistroyTable = ({employeedata}) => {

    console.log('employeedata' , employeedata)

    const rows = Array.from({ length: 5 }); 

  return (
    <>
        <div className="transaction_histroy_table">
            <table>
                <thead>
                    <tr>
                        <th><select name="" id="">
                            <option value="">Transaction ID</option>
                            <option value="">Transaction ID</option>
                            <option value="">Transaction ID</option>
                        </select></th>
                        <th><select name="" id="">
                            <option value="">Withdrawal Options</option>
                            <option value="">Withdrawal Options</option>
                            <option value="">Withdrawal Options</option>
                        </select></th>
                        <th><select name="" id="">
                            <option value="">Biller Name</option>
                            <option value="">Billing Information</option>
                            <option value="">Billing Information</option>
                        </select></th>
                        <th><select name="" id="">
                            <option value="">Amount</option>
                            <option value="">Amount</option>
                            <option value="">Amount</option>
                        </select></th>
                        <th><select name="" id="">
                            <option value="">Date Requested</option>
                            <option value="">Date Requested</option>
                            <option value="">Date Requested</option>
                        </select></th>
                        <th><select name="" id="">
                            <option value="">Status</option>
                            <option value="">Status</option>
                            <option value="">Status</option>
                        </select></th>
                    </tr>
                </thead>
                <tbody>
                  
                    {employeedata.map((row , index) => ( <tr>
                        <td><h4>#{index + 1}</h4></td>
                        <td><h3>Bank Transfer</h3></td>
                        <td><p>{row.User.username}</p></td>
                        <td><h6>${row.amount}</h6></td>
                        {/* <td><h5>June 23, 2022</h5></td> */}
                        <td>{new Date(row.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</td>
                        <td><a href="#" className="transaction_paid_btn">Paid - {new Date(row.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</a></td>
                    </tr>))}
                </tbody>
            </table>
        </div>
    </>
  )
}

export default TransactionHistroyTable