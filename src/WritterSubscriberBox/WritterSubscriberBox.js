import React from 'react'
import { IoIosArrowDown } from 'react-icons/io';

const WritterSubscriberBox = () => {

    
  const rows = Array.from({ length: 10 });

  return (
    <div className="email_subceriber_box">
    <div className="email_subcriber_flex">
      <h2>Writer Subscriber</h2>
      <p>1,234 suscriber</p>
    </div>
    <div className="email_subscriber_table">
      <table>
        <thead>
          <tr>
            <th><h3>ID <IoIosArrowDown /></h3></th>
            <th><h3>Name <IoIosArrowDown /></h3></th>
            <th><h3>Email <IoIosArrowDown /></h3></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((rows) => (<tr>
            <td><h6>#0001</h6></td>
            <td><h5>Brooklyn Simmons</h5></td>
            <td><h5>brooklynsimmons@mail.com</h5></td>
          </tr>))}
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default WritterSubscriberBox