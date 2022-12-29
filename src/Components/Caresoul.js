import React from 'react'

export default function Caresoul() {
  return (
    <>

    
  {/* <====================Carousel============================> */}
  <div className="container">
    <div id="demo" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#demo"
          data-bs-slide-to={0}
          className="active"
        />
        <button type="button" data-bs-target="#demo" data-bs-slide-to={1} />
        <button type="button" data-bs-target="#demo" data-bs-slide-to={2} />
      </div>
      <div id="Home" className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={process.env.PUBLIC_URL + '/images/care1.png'}
            alt="Los Angeles"
            className="d-block w-100"
            height="400px"
            width="100%"
          />
        </div>
        <div className="carousel-item">
          <img
            src={process.env.PUBLIC_URL + '/images/care2.png'}
            alt="Chicago"
            className="d-block w-100"
            height="400px"
            width="100%"
          />
        </div>
        <div className="carousel-item">
          <img
            src={process.env.PUBLIC_URL + '/images/care3.png'}
            alt="New York"
            className="d-block w-100"
            height="400px"
            width="100%"
          />
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" />
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" />
        </button>
      </div>
    </div>
  </div>
  <div className="Ads">
  <img
    src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/OHL_HMT/JANART21/1/1/1/1/12/12/new/pc-header1.jpg"
    alt="Advertisement_more"
    className="mt-4"
    style={{ width: "100%" }}

  />
</div>

  {/* <====================Carousel End============================> */}


</>

  )
}
        