import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const CheckOut = () => {
  const loaderService = useLoaderData();
  const { user } = useContext(AuthContext);
  const { _id, title, price, img } = loaderService;
  const handleService = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const amount = form.amount.value;
    const email = form.email.value;
    const message = form.message.value;
    const booking = {
      serviceId: _id,
      customerName: name,
      img,
      title,
      date,
      email,
      message,
      amount,
    };
    console.log(booking);
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Your Booking Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
        form.reset();
      });
  };
  return (
    <div className="bg-base-200 rounded-lg py-8 my-16">
      <form onSubmit={handleService} className="card-body ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-control">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bbookinged"
            />
          </div>
          <div className="form-control">
            <input type="date" name="date" className="input input-bbookinged" />
          </div>
          <div className="form-control">
            <input
              type="text"
              name="amount"
              defaultValue={price}
              placeholder="$2000"
              className="input input-bbookinged"
            />
          </div>
          <div className="form-control">
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              placeholder="Your Email"
              className="input input-bbookinged"
            />
          </div>
        </div>
        <div className="form-control">
          <textarea
            placeholder="Your Message"
            name="message"
            className="input input-bbookinged h-40"
          ></textarea>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-primary"
            type="submit"
            value="booking Confirm"
          />
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
