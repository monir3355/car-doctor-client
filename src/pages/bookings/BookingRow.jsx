import React from "react";

const BookingRow = ({ booking }) => {
  const { amount, title, date, img, customerName } = booking;
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask rounded-lg w-24 h-24">
              <img src={img} alt="Booking" />
            </div>
          </div>
          <div>
            <div className="font-bold">{title}</div>
            <div className="text-sm opacity-50">Name: {customerName}</div>
          </div>
        </div>
      </td>
      <td>${amount}</td>
      <td>{date}</td>
      <th>
        <button className="btn btn-ghost btn-xs">Pending</button>
      </th>
    </tr>
  );
};

export default BookingRow;
