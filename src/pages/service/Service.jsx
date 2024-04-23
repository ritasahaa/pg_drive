import "./Service.css"
import React from 'react'

const ServicePage = () => {
  return (
    <main className="service-page">
      <div className="service-heading">
        <h3>why choose us?</h3>
        <h2>OUR FEATURES & SERVICES</h2>
        <p>--------------<i className="fa-solid fa-star"></i>--------------</p>
      </div>

      <div className="service-container">
        <div className="service-card">
          <i className="fa-solid fa-hotel"></i>
          <h2>PG RENTAL</h2>
          <p>Our PG rental service offers students convenient, affordable accommodation options, ensuring a comfortable living environment conducive to academic success.</p>
        </div>

        <div className="service-card card2">
          <i className="fa-solid fa-motorcycle"></i>
          <h2>BIKE RENTAL</h2>
          <p>Our bike rental service provides students with convenient and affordable transportation options, ensuring safe and hassle-free campus travel.</p>
        </div>
      </div>
    </main>
  )
}

export default ServicePage