import React, { useEffect, useState } from "react";
import ServiceCart from "./ServiceCart";

const Services = () => {
  const [fold, setFold] = useState(false);
  const [services, setServices] = useState([]);
  useEffect(() => {
    const fetchServicesData = async () => {
      const res = await fetch("http://localhost:5000/services");
      const data = await res.json();
      setServices(data);
    };
    fetchServicesData();
  }, []);
  return (
    <div className="mb-12">
      <div className="text-center space-y-4 mb-8">
        <h5 className="text-lg font-bold text-[#FF3811]">Service</h5>
        <h2 className="text-3xl font-semibold">Our Service Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.slice(0, fold ? services.length : 4).map((service) => (
          <ServiceCart key={service._id} service={service}></ServiceCart>
        ))}
      </div>
      {!fold && (
        <div className="text-center mt-12">
          <button
            onClick={() => setFold(!fold)}
            className="btn btn-outline btn-error"
          >
            More Services
          </button>
        </div>
      )}
    </div>
  );
};

export default Services;
