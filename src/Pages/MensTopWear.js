import React, { useState, useEffect } from 'react'
import SideBar from "../Components/SideBar";
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import "../App.css"

function MensTopWear() {

  const AddToCart = (pID, pName, pPrice, pImage) => {
    let Cart = localStorage.getItem("Cart");
    if (Cart == null) {
      let Products = [];
      let Product = { ProductId: pID, ProductName: pName, ProductPrice: pPrice, ProductQuantity: 1, ProductImage: pImage }
      Products.push(Product);
      localStorage.setItem("Cart", JSON.stringify(Products));
      showToast("Product is added to cart");
      UpdateCart();
    }
    else {
      let pcart = JSON.parse(Cart);
      let oldProduct = pcart.find((item) => item.ProductId === pID)
      if (oldProduct) {
        oldProduct.ProductQuantity = oldProduct.ProductQuantity + 1
        pcart.map((item) => {
          if (item.Productid === oldProduct.ProductId) {
            item.ProductQuantity = oldProduct.ProductQuantity;
          }

        })
        localStorage.setItem("Cart", JSON.stringify(pcart));

        showToast("Product Quantity is increased");
      } else {
        let Product = { ProductId: pID, ProductName: pName, ProductPrice: pPrice, ProductQuantity: 1, ProductImage: pImage }
        pcart.push(Product)
        localStorage.setItem("Cart", JSON.stringify(pcart));

        showToast("Product is added to cart");
      }
      UpdateCart();
    }
  }
  function showToast(content) {
    document.getElementById('toast2').classList.add("display");
    document.getElementById('toast2').innerHTML = content;
    setTimeout(() => {
      document.getElementById('toast2').classList.remove("display");
    }, 2000);
  }

  const [total, setTotal] = useState(0);
  function UpdateCart() {
    let cartString = localStorage.getItem("Cart");
    let Cart = JSON.parse(cartString)
    if (Cart === null || Cart.length === 0) {
      document.getElementsByClassName(".cartbtn").innerHTML = "( 0 )";
    }
    else {
      document.getElementById("btn5").innerHTML = `${Cart.length}`

    }
  }


  const DeleteItem = (pID) => {
    let Cart = JSON.parse(localStorage.getItem('Cart'));
    let NewCart = Cart.filter((item) => item.ProductId !== pID)
    localStorage.setItem('Cart', JSON.stringify(NewCart))
    UpdateCart();
    showToast("Item is Removed From Cart");

  }


  useEffect(() => {
    UpdateCart();
  })

  return (
    <>
      <div className="container2 fixed">
        <SideBar />
        <div className="box2">
          <div className="boxes">
            <div className="container-fluid">
              <div className="row border mt-1 ms-1 me-1 pb-2 bg-white">
                <div className="navbar">
                  <h3 className="text-dark mt-1 p-3">Men's Shirt</h3>
                  <h3 className="text-dark mt-1 p-3 text-center">
                    <button className="btn btn-sm btn-primary">View all</button>

                  </h3>
                </div>
                <hr />

                <div className="boxes">
                  <div className="container-fluid">
                    <div className="row border-0 mt-3 ms-1 me-1 pb-2 bg-white">
                      <div className="col-md-3 mt-2">
                        <div className="card border-0" style={{ width: "100%" }}>
                          <img
                            src={process.env.PUBLIC_URL + "/images/4.webp"}
                            alt=""
                            className="card-img-top mx-auto p-2"
                            style={{ height: 200, width: "200PX" }}
                          />
                          <div className="card-body text-center">
                            <h3 className="card-title ">
                              Men Regular Fit Solid Cut Away Collar Casual Shirt
                            </h3>
                            <p className="card-text ">
                              Pack of 1 Style Code CZBA-DB-DEN Closure Button Fit
                              Regular Fabric Denim Sleeve Full Sleeve
                            </p>
                            <button className="btn btn-danger ">₹499</button>
                            <button
                              className="btn"
                              style={{
                                color: "black",
                                backgroundColor: "#94afc6",
                                borderColor: "#000000",
                                marginLeft: 2,
                              }}
                              onClick={() => AddToCart(9, " Men Regular Fit Solid Cut Away Collar Casual Shirt", "499", "4.webp")}
                            >
                              Buy Now
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 mt-2">
                        <div className="card border-0" style={{ width: "100%" }}>
                          <img
                            src={process.env.PUBLIC_URL + "/images/5.webp"}
                            alt=""
                            className="card-img-top mx-auto p-2"
                            style={{ height: 200, width: "200PX" }}
                          />
                          <div className="card-body text-center">
                            <h3 className="card-title ">
                              Men Slim Fit Printed Spread Collar
                            </h3>
                            <p className="card-text ">
                              Pack of 1 Style Code NAVY-POR Fit Slim Fabric Pure
                              Cotton Sleeve Full Sleeve Pattern Printed
                            </p>
                            <button className="btn btn-danger ">₹625</button>
                            <button
                              className="btn"
                              style={{
                                color: "black",
                                backgroundColor: "#94afc6",
                                borderColor: "#000000",
                                marginLeft: 2,
                              }}
                              onClick={() => AddToCart(10, " Men Slim Fit Printed Spread Collar", "625", "5.webp")}
                            >
                              Buy Now
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 mt-2 ">
                        <div className="card border-0" style={{ width: "100%" }}>
                          <img
                            src={process.env.PUBLIC_URL + "/images/6.webp"}
                            alt=""
                            className="card-img-top mx-auto p-2"
                            style={{ height: 200, width: "200PX" }}
                          />
                          <div className="card-body text-center">
                            <h3 className="card-title text-center">
                              Men Slim Fit Solid Spread Collar Formal Shirt
                            </h3>
                            <p className="card-text text-center">
                              {" "}
                              Pack of 1 Style Code Men Regular ,Slim Fit Solid Button
                              Down Collar Formal Shirt Fit Slim Fabric Cotton Blend
                              Sleeve Full Sleeve Pattern Solid{" "}
                            </p>
                            <button className="btn btn-danger text-center">
                              ₹399
                            </button>
                            <button
                              className="btn  text-center"
                              style={{
                                color: "black",
                                backgroundColor: "#94afc6",
                                borderColor: "#000000",
                                marginLeft: 2,
                              }}
                              onClick={() => AddToCart(11, "Men Slim Fit Solid Spread Collar Formal Shirt", "399", "6.webp")}
                            >
                              Buy Now
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 mt-2 ">
                        <div className="card border-0" style={{ width: "100%" }}>
                          <img
                            src={process.env.PUBLIC_URL + "/images/7.webp"}
                            alt=""
                            className="card-img-top mx-auto p-2"
                            style={{ height: 200, width: "190PX" }}
                          />
                          <div className="card-body text-center">
                            <h3 className="card-title text-center">
                              Men Slim Fit Checkered Party Shirt{" "}
                            </h3>
                            <p className="card-text text-center">
                              {" "}
                              Pack of 1 Style Code KHSH000684 Fit Slim Fabric
                              Polycotton Sleeve Full Sleeve Pattern Checkered
                              Reversible No
                            </p>
                            <button className="btn btn-danger text-center">
                              ₹379
                            </button>
                            <button
                              className="btn  text-center"
                              style={{
                                color: "black",
                                backgroundColor: "#94afc6",
                                borderColor: "#000000",
                                marginLeft: 2,
                              }}
                              onClick={() => AddToCart(12, "Men Slim Fit Checkered Party Shirt", "379", "7.webp")}
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
          </div>
          <div className="boxes">
            <div className="container-fluid">
              <div className="row border mt-3 ms-1 me-1 pb-2 bg-white">
                <div className="navbar">
                  <h3 className="text-dark mt-1 p-3">Men's TShirt</h3>
                  <h3 className="text-dark mt-1 p-3 text-center">
                    <button className="btn btn-sm btn-primary">View all</button>
                  </h3>
                </div>
                <hr />

               
                  <div className="boxes">
                    <div className="container-fluid">
                      <div className="row border-0 mt-3 ms-1 me-1 pb-2 bg-white">
                        <div className="col-md-3 mt-2">
                          <div className="card border-0" style={{ width: "100%" }}>
                            <img
                              src={process.env.PUBLIC_URL + '/images/s-bmrgyrnfull-z12-blive-original-imaghm8fyqhybkb5.webp'}
                              alt=""
                              className="card-img-top mx-auto p-2"
                              style={{ height: 200, width: "180PX" }}
                            />
                            <div className="card-body text-center">
                              <h3 className="card-title ">Round Neck Grey T-Shirt</h3>
                              <p className="card-text ">
                                Round Neck Sleeve Full Sleeve Fit Regular Fabric Cotton Blend Sales Package 1 Pack of 1 Style Code BMRGYRNFUL-Z12
                              </p>
                              <button className="btn btn-danger ">₹238</button>
                              <button
                                className="btn"
                                style={{
                                  color: "black",
                                  backgroundColor: "#94afc6",
                                  borderColor: "#000000",
                                  marginLeft: 2
                                }}
                                onClick={() => AddToCart(13, "Round Neck Grey T-Shirt", "238", "s-bmrgyrnfull-z12-blive-original-imaghm8fyqhybkb5.webp")}
                              >
                                Buy Now
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 mt-2">
                          <div className="card border-0" style={{ width: "100%" }}>
                            <img

                              src={process.env.PUBLIC_URL + '/images/3xl-ss20-sp15-scott-international-original-imafwjzdfja8v5ma.webp'}
                              alt=""
                              className="card-img-top mx-auto p-2"
                              style={{ height: 200, width: "180PX" }}
                            />
                            <div className="card-body text-center">
                              <h3 className="card-title ">Round Neck Green T-Shirt</h3>
                              <p className="card-text ">
                                Type Polo Neck Sleeve Half Sleeve Fit Regular Fabric Pure Cotton Sales Package 1 Solid Polo T-shir
                              </p>
                              <button className="btn btn-danger ">₹499</button>
                              <button
                                className="btn"
                                style={{
                                  color: "black",
                                  backgroundColor: "#94afc6",
                                  borderColor: "#000000",
                                  marginLeft: 2
                                }}
                                onClick={() => AddToCart(14, "Round Neck Green T-Shirt", "499", "3xl-ss20-sp15-scott-international-original-imafwjzdfja8v5ma.webp")}
                              >
                                Buy Now
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 mt-2 ">
                          <div className="card border-0" style={{ width: "100%" }}>
                            <img

                              src={process.env.PUBLIC_URL + '/images/2.webp'}
                              alt=""
                              className="card-img-top mx-auto p-2"
                              style={{ height: 200, width: "180PX" }}
                            />
                            <div className="card-body text-center">
                              <h3 className="card-title text-center">
                                Polo Neck Yellow T-Shirt
                              </h3>
                              <p className="card-text text-center">
                                {" "}
                                Polo Neck Sleeve Short Sleeve Fit Slim Fabric Polyester Sales Package 1 T-shirts Pack of 1 Style Code POLO-1{" "}
                              </p>
                              <button className="btn btn-danger text-center">₹319</button>
                              <button
                                className="btn  text-center"
                                style={{
                                  color: "black",
                                  backgroundColor: "#94afc6",
                                  borderColor: "#000000",
                                  marginLeft: 2
                                }}
                                onClick={() => AddToCart(15, "Polo Neck Yellow T-Shirt", "319", "2.webp")}
                              >
                                Buy Now
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 mt-2 ">
                          <div className="card border-0" style={{ width: "100%" }}>
                            <img
                              src={process.env.PUBLIC_URL + '/images/3.webp'}
                              alt=""
                              className="card-img-top mx-auto p-2"
                              style={{ height: 200, width: "180PX" }}
                            />
                            <div className="card-body text-center">
                              <h3 className="card-title text-center">
                                Polyester Half Sleeve Neck{" "}
                              </h3>
                              <p className="card-text text-center">
                                {" "}
                                Round Neck Sleeve Short Sleeve Fit Slim Fabric Polyester Sales Package Pack of 1 Pack of 1 Style Code POLY-510
                              </p>
                              <button className="btn btn-danger text-center">₹299</button>
                              <button
                                className="btn  text-center"
                                style={{
                                  color: "black",
                                  backgroundColor: "#94afc6",
                                  borderColor: "#000000",
                                  marginLeft: 2
                                }}
                                onClick={() => AddToCart(16, " Polyester Half Sleeve Neck", "299", "3.webp")}
                              >
                                Buy Now
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div></div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div id="toast2">Custom Toast Text</div>

      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title " id="exampleModalLabel" >
                You Cart
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body" id="modalBody" style={{ padding: '0px 0px' }}>
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody id="tbody">

                </tbody>



                <tr><td colSpan='5' className='text-left font-weight-bold'> Total Price is :- ₹{total}</td></tr>
              </table>

            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <NavLink
                type="button"
                className="btn btn-primary checkout-btn"
                // onClick={() => GoToButton()}
                to="/Checkout"
              >
                Place Order
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MensTopWear;
