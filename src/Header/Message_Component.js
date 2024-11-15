// client/src/components/NotificationBell.js

import React from 'react';



const NotificationBell = ({ count, onClick }) => {
  return (
    < div onClick={onClick}>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
        >
          <path
            d="M25.4973 13.0506C25.4414 18.9956 21.0944 24.1521 15.268 25.122C12.3793 25.6034 9.66495 25.122 7.10415 23.7055C6.99948 23.6497 6.839 23.6357 6.72736 23.6776C5.29694 24.187 3.86652 24.7173 2.4361 25.2266C1.71042 25.4848 0.998699 25.0522 0.928922 24.2986C0.907989 24.1032 0.963811 23.8799 1.03359 23.6915C1.529 22.303 2.03837 20.9144 2.54774 19.5259C2.60356 19.3654 2.61054 19.2468 2.51983 19.0933C-1.35277 12.2552 2.08024 3.64473 9.58819 1.32815C16.4821 -0.800036 23.8017 3.55402 25.1833 10.6224C25.3437 11.4248 25.3996 12.2412 25.4973 13.0506Z"
            fill="#828282"
          />
        </svg>
        <span className="header_cart_number">{count > 0 ? count : 0}</span>
      </a>

    </div>
  );
};

export default NotificationBell;
