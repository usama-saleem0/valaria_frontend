import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const EmailSubscriberBox = () => {
  const rows = Array.from({ length: 10 });

  return (
    <div className="email_subceriber_box">
      <div className="email_subcriber_flex">
        <h2>Email Subscriber</h2>
        <p>1,234 suscriber</p>
      </div>
      <div className="email_subscriber_table">
        <table>
          <thead>
            <tr>
              <th>
                <h3>
                  Name <IoIosArrowDown />
                </h3>
              </th>
              <th>
                <h3>
                  Email <IoIosArrowDown />
                </h3>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((rows) => (
              <tr>
                <td>
                  <h4>Brooklyn Simmons</h4>
                </td>
                <td>
                  <h4>brooklynsimmons@mail.com</h4>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmailSubscriberBox;
