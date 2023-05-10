import React from "react";
import img1 from "../assets/images/banner/1.jpg";
import img2 from "../assets/images/banner/2.jpg";
import img3 from "../assets/images/banner/3.jpg";
import img4 from "../assets/images/banner/4.jpg";

const Slider = () => {
  return (
    <div className="carousel w-full h-[600px] rounded-xl">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full" />
        <div className="absolute flex items-center bottom-0 top-0 gap-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.648053)]">
          <div className="text-white space-y-7 w-1/2 ml-24">
            <h2 className="text-6xl font-semibold">
              Affordable Price For Car Servicing
            </h2>
            <p className="">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-error">Discover More</button>
              <button className="btn btn-outline btn-error ml-4">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 bottom-0 right-5 bu gap-5">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full" />
        <div className="absolute flex items-center bottom-0 top-0 gap-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.648053)]">
          <div className="text-white space-y-7 w-1/2 ml-24">
            <h2 className="text-6xl font-semibold">
              Affordable Price For Car Servicing
            </h2>
            <p className="">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-error">Discover More</button>
              <button className="btn btn-outline btn-error ml-4">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 bottom-0 right-5 bu gap-5">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full" />
        <div className="absolute flex items-center bottom-0 top-0 gap-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.648053)]">
          <div className="text-white space-y-7 w-1/2 ml-24">
            <h2 className="text-6xl font-semibold">
              Affordable Price For Car Servicing
            </h2>
            <p className="">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-error">Discover More</button>
              <button className="btn btn-outline btn-error ml-4">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 bottom-0 right-5 bu gap-5">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full" />
        <div className="absolute flex items-center bottom-0 top-0 gap-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.648053)]">
          <div className="text-white space-y-7 w-1/2 ml-24">
            <h2 className="text-6xl font-semibold">
              Affordable Price For Car Servicing
            </h2>
            <p className="">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-error">Discover More</button>
              <button className="btn btn-outline btn-error ml-4">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 bottom-0 right-5 bu gap-5">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
