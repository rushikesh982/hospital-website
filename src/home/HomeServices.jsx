import React from "react";
import "./home.css";

const data = [
  {
    img: "./images/homeSErvices1.webp",
    name: "Neonatal Intensive Care Unit",
  },
  {
    img: "./images/homeSEervices2.webp",
    name: "Pediatric Intensive Care Unit",
  },
  {
    img: "./images/homeSEervices3.webp",
    name: "Premature Baby Care Unit",
  },
  {
    img: "./images/homeSEervices4.webp",
    name: "IVF",
  },
  {
    img: "./images/homeSEervices5.webp",
    name: "Ambulance Service",
  },
  {
    img: "./images/homeSEervices6.webp",
    name: "Infertility",
  },
];

export default function HomeServices() {
  return (
    <>
      <div className="container">
        <div className="row text-center">
          <div className="col-12">
            <h1>our services</h1>
          </div>
        {data.map((item) => {
          return (
            <>
              <div className="col-12 col-lg-4">
                <div className="card servicesCard text-center border-0">
                  <div className="card-body">
                    <img src={item.img} alt="" />
                    <p className="">{item.name}</p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
        </div>
      </div>
    </>
  );
}
