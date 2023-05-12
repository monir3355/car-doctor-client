import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import BookingRow from "./BookingRow";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);
  return (
    <div>
      <h2>My bookings : {bookings.length}</h2>
      <div className="overflow-x-auto w-full my-10">
        <table className="table w-full">
          <tbody>
            {/* row 1 */}
            {bookings.map((booking) => (
              <BookingRow key={booking._id} booking={booking}></BookingRow>
            ))}
            {/* row 2 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
