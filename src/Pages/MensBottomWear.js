import React, { useState, useEffect } from 'react'
import SideBar from "../Components/SideBar";

function MensBottomWear() {  
  return (
    <>
      <div className="container2">
        <SideBar />
        <div className="box2">
          <div className="boxes">
            <div className="container-fluid">
              <div className="row border mt-1 ms-1 me-1 pb-2 bg-white">
                <div className="navbar">
                  <h3 className="text-dark mt-1 p-3">Mens Pants</h3>
                  <h3 className="text-dark mt-1 p-3 text-center">
                    <button className="btn btn-sm btn-primary">View all</button>
                  </h3>
                </div>
                <hr />
                <div className="col-md-3 mt-2">
                  <div className="card border-0" style={{ width: "100%" }}>
                    <img
                      src={process.env.PUBLIC_URL + "/images/8.webp"}
                      alt=""
                      className="card-img-top mx-auto p-2"
                      style={{ height: 200, width: "150PX" }}
                    />
                    <div className="card-body text-center">
                      <h3 className="card-title ">Slim Men Black Jeans</h3>
                      <p className="card-text ">
                        Style Code BLACK-JEANS 32 Ideal For Men Suitable For
                        Western Wear Pack Of 1 Pattern Solid Reversible Yes
                        Sales Package 1
                      </p>
                      <button className="btn btn-danger ">₹379</button>
                      <button
                        className="btn"
                        style={{
                          color: "black",
                          backgroundColor: "#94afc6",
                          borderColor: "#000000",
                          marginLeft: 2,
                        }}
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mt-2">
                  <div className="card border-0" style={{ width: "100%" }}>
                    <img
                      src={process.env.PUBLIC_URL + "/images/9.webp"}
                      alt=""
                      className="card-img-top mx-auto p-2"
                      style={{ height: 200, width: "200PX" }}
                    />
                    <div className="card-body text-center">
                      <h3 className="card-title ">Pack of 2 Solid Men Black</h3>
                      <p className="card-text ">
                        Fabric Cotton Blend Pattern Printed Color Light Blue
                        Style Code Mens White Boxer With Green Tree and Blue
                        Bird Design
                      </p>
                      <button className="btn btn-danger ">₹339</button>
                      <button
                        className="btn"
                        style={{
                          color: "black",
                          backgroundColor: "#94afc6",
                          borderColor: "#000000",
                          marginLeft: 2,
                        }}
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mt-2 ">
                  <div className="card border-0" style={{ width: "100%" }}>
                    <img
                      src={process.env.PUBLIC_URL + "/images/10.webp"}
                      alt=""
                      className="card-img-top mx-auto p-2"
                      style={{ height: 200, width: "200PX" }}
                    />
                    <div className="card-body text-center">
                      <h3 className="card-title text-center">
                        Pack of 5 Men Multicolor{" "}
                      </h3>
                      <p className="card-text text-center">
                        {" "}
                        Fabric Pure Cotton Pattern Embroidered Color Multicolor
                        Color Multicolor Color Multicolor Color Multicolor Color
                        Multicolor{" "}
                      </p>
                      <button className="btn btn-danger text-center">
                        ₹499
                      </button>
                      <button
                        className="btn  text-center"
                        style={{
                          color: "black",
                          backgroundColor: "#94afc6",
                          borderColor: "#000000",
                          marginLeft: 2,
                        }}
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mt-2 ">
                  <div className="card border-0" style={{ width: "100%" }}>
                    <img
                      src={process.env.PUBLIC_URL + "/images/11.webp"}
                      alt=""
                      className="card-img-top mx-auto p-2"
                      style={{ height: 200, width: "150PX" }}
                    />
                    <div className="card-body text-center">
                      <h3 className="card-title text-center">
                        Solid Men Black Regular Shorts{" "}
                      </h3>
                      <p className="card-text text-center">
                        {" "}
                        Fabric Cotton Blend Pattern Solid Color Black Style Code
                        TBL-SHORTT Fabric Care Cotton BlendCotton Blend Cotton
                        Blend
                      </p>
                      <button className="btn btn-danger text-center">
                        ₹224
                      </button>
                      <button
                        className="btn  text-center"
                        style={{
                          color: "black",
                          backgroundColor: "#94afc6",
                          borderColor: "#000000",
                          marginLeft: 2,
                        }}
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="boxes">
            {" "}
            <div className="container-fluid">
              <div className="row border mt-3 ms-1 me-1 pb-2 bg-white">
                <div className="navbar">
                  <h3 className="text-dark mt-1 p-3">Men's Jeans</h3>
                  <h3 className="text-dark mt-1 p-3 text-center">
                    <button className="btn btn-sm btn-primary">View all</button>
                  </h3>
                </div>
                <hr />
                <div className="col-md-3 mt-2">
                  <div className="card border-0" style={{ width: "100%" }}>
                    <img
                      src={process.env.PUBLIC_URL + "/images/12.webp"}
                      alt=""
                      className="card-img-top mx-auto p-2"
                      style={{ height: 200, width: "170PX" }}
                    />
                    <div className="card-body text-center">
                      <h3 className="card-title ">Slim Men Dark Blue Jeans</h3>
                      <p className="card-text ">
                        tyle Code 090 Ideal For Men Suitable For Western Wear
                        Pack Of 1 Pocket Type Curved Pocket Pack Of 1 Pocket
                        Type Curved Pocket Pack Of 1 Pocket Type Curved Pocket
                      </p>
                      <button className="btn btn-danger ">₹898</button>
                      <button
                        className="btn"
                        style={{
                          color: "black",
                          backgroundColor: "#94afc6",
                          borderColor: "#000000",
                          marginLeft: 2,
                        }}
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mt-2">
                  <div className="card border-0" style={{ width: "100%" }}>
                    <img
                      src={process.env.PUBLIC_URL + "/images/13.webp"}
                      alt=""
                      className="card-img-top mx-auto p-2"
                      style={{ height: 200, width: "190PX" }}
                    />
                    <div className="card-body text-center">
                      <h3 className="card-title ">Slim Men Black Jeans</h3>
                      <p className="card-text ">
                        Style Code printed jean for men Ideal For Men Suitable
                        For Western Wear Pack Of 1 Pattern n Wear Pack Of 1
                        Pattern n Wear Pack Of 1 Pattern n Wear Pack Of 1
                        Pattern
                      </p>
                      <button className="btn btn-danger ">₹832</button>
                      <button
                        className="btn"
                        style={{
                          color: "black",
                          backgroundColor: "#94afc6",
                          borderColor: "#000000",
                          marginLeft: 2,
                        }}
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mt-2 ">
                  <div className="card border-0" style={{ width: "100%" }}>
                    <img
                      src={process.env.PUBLIC_URL + "/images/14.webp"}
                      alt=""
                      className="card-img-top mx-auto p-2"
                      style={{ height: 200, width: "170PX" }}
                    />
                    <div className="card-body text-center">
                      <h3 className="card-title text-center">
                        Regular Men Blue Jeans
                      </h3>
                      <p className="card-text text-center">
                        {" "}
                        Style Code generic light blue 28 Ideal For Men Suitable
                        For Western Wear or Western Wear or Western Wear or
                        Western Wear or Western Wear or Wear or Western{" "}
                      </p>
                      <button className="btn btn-danger text-center">
                        ₹1,199
                      </button>
                      <button
                        className="btn  text-center"
                        style={{
                          color: "black",
                          backgroundColor: "#94afc6",
                          borderColor: "#000000",
                          marginLeft: 2,
                        }}
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mt-2 ">
                  <div className="card border-0" style={{ width: "100%" }}>
                    <img
                      src={process.env.PUBLIC_URL + "/images/15.webp"}
                      alt=""
                      className="card-img-top mx-auto p-2"
                      style={{ height: 200, width: "190PX" }}
                    />
                    <div className="card-body text-center">
                      <h3 className="card-title text-center">
                        Regular Men Blue Jeans{" "}
                      </h3>
                      <p className="card-text text-center">
                        {" "}
                        Style Code Collection Men's Slim Fit Stretchable Relaxed
                        Jeans (Act-08 Deep Blue) Ideal (Act-08 Deep Blue) Ideal
                        Jeans (Act-08 Deep Blue) Ideal (Act-08 Deep Blue) Ideal
                      </p>
                      <button className="btn btn-danger text-center">
                        ₹898
                      </button>
                      <button
                        className="btn  text-center"
                        style={{
                          color: "black",
                          backgroundColor: "#94afc6",
                          borderColor: "#000000",
                          marginLeft: 2,
                        }}
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
}
export default MensBottomWear;