import React, { useState, useEffect } from 'react'
import axios from 'axios';
import SideBar from '../Components/SideBar';
import "../App.css"
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


function Products() {


  const [products, setProducts] = useState([])

  const getSmarthphones = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.get("/Productsmartphone", config);
      setProducts(res.data);
    } catch (err) {
      console.error("error", err)
    }
  }


  const [laptopProducts, setLaptopProducts] = useState([])

  const getLaptops = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.get("/Productlaptop", config);
      setLaptopProducts(res.data);

    } catch (err) {
      console.error("error", err)
    }
  }

  useEffect(() => {
    getSmarthphones()
    getLaptops()

  }, [])


  const AddToCart = (pTitle, pPrice, pImage) => {
    let Cart = localStorage.getItem("Cart");
    if (Cart == null) {
      let Products = [];
      let Product = { ProductName: pTitle, ProductPrice: pPrice, ProductQuantity: 1, ProductImage: pImage }
      Products.push(Product);
      localStorage.setItem("Cart", JSON.stringify(Products));
      showToast("Product is added to cart");
      UpdateCart();
    }
    else {
      let pcart = JSON.parse(Cart);
      let oldProduct = pcart.find((item) => item.ProductImage === pImage)
      if (oldProduct) {
        oldProduct.ProductQuantity = oldProduct.ProductQuantity + 1
        pcart.map((item) => {
          if (item.ProductImage === oldProduct.ProductImage) {
            item.ProductQuantity = oldProduct.ProductQuantity;
          }

        })
        localStorage.setItem("Cart", JSON.stringify(pcart));

        showToast("Product Quantity is increased");
      } else {
        let Product = { ProductName: pTitle, ProductPrice: pPrice, ProductQuantity: 1, ProductImage: pImage }
        pcart.push(Product)
        localStorage.setItem("Cart", JSON.stringify(pcart));

        showToast("Product is added to cart");
      }
      UpdateCart();
    }
  }

  const history = useHistory();
  const SingleProduct = (pTitle, pPrice, pImage) => {
    let SingleProduct = localStorage.getItem("SingleProduct");
    let Products = [];
    let Product = { ProductName: pTitle, ProductPrice: pPrice, ProductQuantity: 1, ProductImage: pImage }
    Products.push(Product);
    localStorage.setItem("SingleProduct", JSON.stringify(Products));
    history.push("/SingleProduct")
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


      let table = "";
      let TotalPrice = 0;

      Cart.map((item) => {

        table += ` 
        
      <tr>
        <td>${item.ProductName}</td>
        <td>₹${item.ProductPrice}</td>
        <td>${item.ProductQuantity}</td>
        <td>${item.ProductPrice * item.ProductQuantity}</td>
        <td> <button id="remove" onClick={DeleteItem(${item.ProductId})} class="btn btn-danger btn-sm">Remove</button></td>
      </tr>
      
    `
        TotalPrice += item.ProductPrice * item.ProductQuantity;
        setTotal(TotalPrice);
      })
      document.getElementById("tbody").innerHTML = table

    }
  }
  const buttonEl = document.getElementById('remove');
  buttonEl && buttonEl.addEventListener('click', () => alert("Hi user!"));


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
                  <h3 className="text-dark mt-1 p-3">Best of Smarthphones</h3>
                  <h3 className="text-dark mt-1 p-3 text-center">
                    <button className="btn btn-sm btn-primary">View all</button>
                    {/* <button id='btn5' className="btn mx-2 btn-sm btn-primary" data-toggle="modal" data-target="#exampleModal">Cart</button> */}
                  </h3>
                </div>
                <hr />

                {products.length > 0 ? products.map((product) => (
                  <div className="col-md-3 mt-2">
                    <div className="card border-0" style={{ width: "100%" }}>
                      <img
                        src={process.env.PUBLIC_URL + `/images/${product.imageUrl}`}
                        alt=""
                        className="card-img-top mx-auto p-2 responsive"
                        style={{ height: 200, width: "200PX", cursor: 'pointer' }}
                        onClick={() => SingleProduct(product._id, product.title, product.price, product.imageUrl)}
                      />
                      <div className="card-body text-center">
                        <h3 className="card-title ">{product.title}</h3>
                        <p className="card-text ">
                          {product.description}
                        </p>
                        <button className="btn btn-danger ">₹{product.price}</button>
                        <button
                          className="btn"
                          style={{
                            color: "black",
                            backgroundColor: "#94afc6",
                            borderColor: "#000000",
                            marginLeft: 2
                          }}
                          onClick={() => AddToCart(product._id, product.title, product.price, product.imageUrl)}
                        >
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                )) :
                  <div className="boxes">
                    <div className="container-fluid">
                      <div className="row border-0 mt-1 ms-1 me-1 pb-2 bg-white">
                        <div className="col-md-3 mt-2">
                          <div className="card border-0" style={{ width: "100%" }}>
                            <img
                              src={process.env.PUBLIC_URL + '/images/iphone-13-mlpg3hn-a-apple-original-imag6vpyghayhhrh.webp'}
                              alt=""
                              className="card-img-top mx-auto p-2"
                              style={{ height: 200, width: "200PX" }}
                              onClick={() => SingleProduct("Iphone 13", "69900", "iphone-13-mlpg3hn-a-apple-original-imag6vpyghayhhrh.webp")}
                            />
                            <div className="card-body text-center">
                              <h3 className="card-title ">Iphone 13</h3>
                              <p className="card-text ">
                                128 GB ROM 15.49 cm (6.1 inch) Super Retina XDR Display 12MP +
                                12MP | 12MP Front Camera A15 Bionic Chip Processor
                              </p>
                              <button className="btn btn-danger ">₹69,900</button>
                              <button
                                className="btn"
                                style={{
                                  color: "black",
                                  backgroundColor: "#94afc6",
                                  borderColor: "#000000",
                                  marginLeft: 2
                                }}
                                onClick={() => AddToCart("Iphone 13", "69900", "iphone-13-mlpg3hn-a-apple-original-imag6vpyghayhhrh.webp")}
                              >
                                Buy Now
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 mt-2">
                          <div className="card border-0" style={{ width: "100%" }}>
                            <img

                              src={process.env.PUBLIC_URL + '/images/apple-iphone-12-pro-dummyapplefsn-original-imafwgbrzxg3nggd.webp'}
                              alt=""
                              className="card-img-top mx-auto p-2"
                              style={{ height: 200, width: "200PX" }}
                              onClick={() => SingleProduct("Iphone 12 Pro", "109900", "apple-iphone-12-pro-dummyapplefsn-original-imafwgbrzxg3nggd.webp")}
                            />
                            <div className="card-body text-center">
                              <h3 className="card-title ">Iphone 12 Pro</h3>
                              <p className="card-text ">
                                128 GB ROM 15.49 cm (6.1 inch) Super Retina XDR Display 12MP +
                                12MP + 12MP | 12MP Front Camera A14 Bionic Chip with Next
                                Generation Neural Processor
                              </p>
                              <button className="btn btn-danger ">₹1,09,900</button>
                              <button
                                className="btn"
                                style={{
                                  color: "black",
                                  backgroundColor: "#94afc6",
                                  borderColor: "#000000",
                                  marginLeft: 2
                                }}
                                onClick={() => AddToCart("Iphone 12 Pro", "109900", "apple-iphone-12-pro-dummyapplefsn-original-imafwgbrzxg3nggd.webp")}
                              >
                                Buy Now
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-3 mt-2 ">
                          <div className="card border-0" style={{ width: "100%" }}>
                            <img

                              src={process.env.PUBLIC_URL + '/images/-original-imaggj686yhjdrgk.webp'}
                              alt=""
                              className="card-img-top mx-auto p-2"
                              style={{ height: 200, width: "200PX" }}
                              onClick={() => SingleProduct("SAMSUNG Galaxy S22", "79900", "-original-imaggj686yhjdrgk.webp")}
                            />
                            <div className="card-body text-center">
                              <h3 className="card-title text-center">SAMSUNG Galaxy S22 </h3>
                              <p className="card-text text-center">
                                {" "}
                                8 GB RAM | 128 GB ROM 15.49 cm (6.1 inch) Full HD+ Display 50MP +
                                12MP + 10MP | 10MP Front Camera 3700 mAh Lithium-ion Battery{" "}
                              </p>
                              <button className="btn btn-danger text-center">₹79,900</button>
                              <button
                                className="btn  text-center"
                                style={{
                                  color: "black",
                                  backgroundColor: "#94afc6",
                                  borderColor: "#000000",
                                  marginLeft: 2
                                }}
                                onClick={() => AddToCart("SAMSUNG Galaxy S22", "79900", "-original-imaggj686yhjdrgk.webp")}
                              >
                                Buy Now
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 mt-2 ">
                          <div className="card border-0" style={{ width: "100%" }}>
                            <img

                              src={process.env.PUBLIC_URL + '/images/nord-2t-5g-5011102062-oneplus-original-imagfx6bzs4hd4ft.webp'}
                              alt=""
                              className="card-img-top mx-auto p-2"
                              style={{ height: 200, width: "150PX" }}
                              onClick={() => SingleProduct("OnePlus Nord 2T 5G", "74990", "nord-2t-5g-5011102062-oneplus-original-imagfx6bzs4hd4ft.webp")}
                            />
                            <div className="card-body text-center">
                              <h3 className="card-title text-center">OnePlus Nord 2T 5G </h3>
                              <p className="card-text text-center">
                                {" "}
                                8 GB RAM | 128 GB ROM 17.02 cm (6.7 inch) Display 50MP Rear Camera
                                4500 mAh Battery 3700 mAh Lithium-ion Battery
                              </p>
                              <button className="btn btn-danger text-center">₹74,990</button>
                              <button
                                className="btn  text-center"
                                style={{
                                  color: "black",
                                  backgroundColor: "#94afc6",
                                  borderColor: "#000000",
                                  marginLeft: 2
                                }}
                                onClick={() => AddToCart("OnePlus Nord 2T 5G", "74990", "nord-2t-5g-5011102062-oneplus-original-imagfx6bzs4hd4ft.webp")}
                              >
                                Buy Now
                              </button>
                            </div>
                          </div>
                        </div>



                      </div>
                    </div>
                  </div>


                }


              </div>
            </div>
          </div>
          <div className="boxes">
            <div className="container-fluid">
              <div className="row border mt-3 ms-1 me-1 pb-2 bg-white">
                <div className="navbar">
                  <h3 className="text-dark mt-1 p-3">Best of Laptops</h3>
                  <h3 className="text-dark mt-1 p-3 text-center">
                    <button className="btn btn-sm btn-primary">View all</button>
                  </h3>
                </div>
                <hr />

                {laptopProducts.length > 0 ? laptopProducts.map((laptopProduct) => (
                  <div className="col-md-3 mt-2">
                    <div className="card border-0" style={{ width: "100%" }}>
                      <img
                        src={process.env.PUBLIC_URL + `/images/${laptopProduct.imageUrl}`}
                        alt=""
                        className="card-img-top mx-auto p-2"
                        style={{ height: 200, width: "200PX", cursor: 'pointer' }}
                        onClick={() => SingleProduct(laptopProduct._id, laptopProduct.title, laptopProduct.price, laptopProduct.imageUrl)}
                      />
                      <div className="card-body text-center">
                        <h3 className="card-title ">{laptopProduct.title}</h3>
                        <p className="card-text ">
                          {laptopProduct.description}
                        </p>
                        <button className="btn btn-danger ">₹{laptopProduct.price}</button>
                        <button
                          className="btn"
                          style={{
                            color: "black",
                            backgroundColor: "#94afc6",
                            borderColor: "#000000",
                            marginLeft: 2
                          }}
                          onClick={() => AddToCart(laptopProduct._id, laptopProduct.title, laptopProduct.price, laptopProduct.imageUrl)}
                        >
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                )) :
                  <div className="boxes">
                    <div className="container-fluid">
                      <div className="row border-0 mt-3 ms-1 me-1 pb-2 bg-white">
                        <div className="col-md-3 mt-2">
                          <div className="card border-0" style={{ width: "100%" }}>
                            <img

                              src={process.env.PUBLIC_URL + '/images/inspiron-3511-thin-and-light-laptop-dell-original-imag6n5kbmfcgxk6.webp'}
                              alt=""
                              className="card-img-top mx-auto p-2"
                              style={{ height: 200, width: "270PX" }}
                              onClick={() => SingleProduct("DELL Core i5 11th Gen", "63640", "inspiron-3511-thin-and-light-laptop-dell-original-imag6n5kbmfcgxk6.webp")}
                            />
                            <div className="card-body text-center">
                              <h3 className="card-title ">DELL Core i5 11th Gen</h3>
                              <p className="card-text ">
                                NVIDIA GeForce NVIDIA® GeForce® MX450 with 2GB GDDR5 graphics
                                memory Light Laptop without Optical Disk Drive 14 inch
                              </p>
                              <button className="btn btn-danger ">₹63,640</button>
                              <button
                                className="btn"
                                style={{
                                  color: "black",
                                  backgroundColor: "#94afc6",
                                  borderColor: "#000000",
                                  marginLeft: 2
                                }}
                                onClick={() => AddToCart("DELL Core i5 11th Gen", "63640", "inspiron-3511-thin-and-light-laptop-dell-original-imag6n5kbmfcgxk6.webp")}
                              >
                                Buy Now
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 mt-2">
                          <div className="card border-0" style={{ width: "100%" }}>
                            <img

                              src={process.env.PUBLIC_URL + '/images/15ach6-gaming-laptop-lenovo-original-imaghnqezskfgzas.webp'}
                              alt=""
                              className="card-img-top mx-auto p-2"
                              style={{ height: 200, width: "270PX" }}
                              onClick={() => SingleProduct("Lenovo Core i3 10th Gen", "36490", "15ach6-gaming-laptop-lenovo-original-imaghnqezskfgzas.webp")}
                            />
                            <div className="card-body text-center">
                              <h3 className="card-title ">Lenovo Core i3 10th Gen</h3>
                              <p className="card-text ">
                                Stylish &amp; Portable Thin and Light Laptop 15.6 inch Full HD TN
                                220nits Anti-glare Display Light Laptop without Optical Disk Drive
                              </p>
                              <button className="btn btn-danger ">₹36,490</button>
                              <button
                                className="btn"
                                style={{
                                  color: "black",
                                  backgroundColor: "#94afc6",
                                  borderColor: "#000000",
                                  marginLeft: 2
                                }}
                                onClick={() => AddToCart("Lenovo Core i3 10th Gen", "36490", "15ach6-gaming-laptop-lenovo-original-imaghnqezskfgzas.webp")}
                              >
                                Buy Now
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 mt-2 ">
                          <div className="card border-0" style={{ width: "100%" }}>
                            <img

                              src={process.env.PUBLIC_URL + '/images/-original-imagah7xakzzergf.webp'}
                              alt=""
                              className="card-img-top mx-auto p-2"
                              style={{ height: 200, width: "270PX" }}
                              onClick={() => SingleProduct("acer Aspire 7 Ryzen 5 Hexa Core", "49990", "-original-imagah7xakzzergf.webp")}
                            />
                            <div className="card-body text-center">
                              <h3 className="card-title text-center">
                                acer Aspire 7 Ryzen 5 Hexa Core
                              </h3>
                              <p className="card-text text-center">
                                {" "}
                                15.6 inch Full HD LED Backlit IPS ComfyView Display (16:9 Aspect
                                Ratio, 45% NTSC Color Gamut) Light Laptop without Optical Disk
                                Drive Pre-insta 10 OS{" "}
                              </p>
                              <button className="btn btn-danger text-center">₹49,990</button>
                              <button
                                className="btn  text-center"
                                style={{
                                  color: "black",
                                  backgroundColor: "#94afc6",
                                  borderColor: "#000000",
                                  marginLeft: 2
                                }}
                                onClick={() => AddToCart("acer Aspire 7 Ryzen 5 Hexa Core", "49990", "-original-imagah7xakzzergf.webp")}
                              >
                                Buy Now
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 mt-2 ">
                          <div className="card border-0" style={{ width: "100%" }}>
                            <img

                              src={process.env.PUBLIC_URL + '/images/mkgp3hn-a-thin-and-light-laptop-apple-original-imag7yznc5d2rsuh.webp'}
                              alt=""
                              className="card-img-top mx-auto p-2"
                              style={{ height: 200, width: "190PX" }}
                              onClick={() => SingleProduct("APPLE 2021 Macbook Pro M1 Pro", "186990", "mkgp3hn-a-thin-and-light-laptop-apple-original-imag7yznc5d2rsuh.webp")}
                            />
                            <div className="card-body text-center">
                              <h3 className="card-title text-center">
                                APPLE 2021 Macbook Pro M1 Pro{" "}
                              </h3>
                              <p className="card-text text-center">
                                {" "}
                                Stylish &amp; Portable Thin and Light Laptop 14.2 inch Liquid
                                Retina XDR display, Native resolution at 254 pixels per inch, Up
                                t
                              </p>
                              <button className="btn btn-danger text-center">₹1,86,990</button>
                              <button
                                className="btn  text-center"
                                style={{
                                  color: "black",
                                  backgroundColor: "#94afc6",
                                  borderColor: "#000000",
                                  marginLeft: 2
                                }}
                                onClick={() => AddToCart("APPLE 2021 Macbook Pro M1 Pro", "186990", "mkgp3hn-a-thin-and-light-laptop-apple-original-imag7yznc5d2rsuh.webp")}
                              >
                                Buy Now
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div></div>


                }


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
                // data-dismiss="modal"
                to="/Checkout"
              >
                Place Order
              </NavLink>
            </div>
          </div>
        </div>
      </div>



    </>

  )
}
export default Products