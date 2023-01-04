import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import "../App.css"
import { useHistory } from 'react-router-dom';


export default function Navbar() {


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
      document.getElementsByClassName(".cart-body").innerHTML = "<h4>Cart is Empty </h4>";
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
        <td> <button onClick={DeleteItem(${item.ProductId})} class="btn btn-danger btn-sm">Removes</button></td>
      </tr>
      
    `
        TotalPrice += item.ProductPrice * item.ProductQuantity;
        setTotal(TotalPrice);
      })
      document.getElementById("tbody").innerHTML = table
    }
  }
  const history = useHistory();
  const SingleProduct = (pID, pTitle, pPrice,pImage) => {
    let SingleProduct = localStorage.getItem("SingleProduct");
    if (SingleProduct !== null) {
      console.log("Working")
     let Products = [];
     let Product = { ProductId: pID, ProductName: pTitle, ProductPrice: pPrice, ProductQuantity: 1 ,ProductImage:pImage }
     Products.push(Product);
     localStorage.setItem("SingleProduct", JSON.stringify(Products));
     history.push("/SingleProduct")
   }
 }


  function DeleteItem(pID) {
    let Cart = JSON.parse(localStorage.getItem('Cart'));
    let NewCart = Cart.filter((item) => item.ProductId !== pID)
    localStorage.setItem('Cart', JSON.stringify(NewCart))
    UpdateCart();
    showToast("Item is Removed From Cart");

  }

  useEffect(() => {
    UpdateCart();
  })



  axios.defaults.withCredentials = true
  const [user, setUser] = useState({
    email: "",
    password: "",
  })

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = registerData;

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
  }

  const onChange = (e) => {
    const { name, value } = e.target
    setRegisterData({
      ...registerData,
      [name]: value
    })
  }

  const [message, setMessage] = useState("")
  const [names, setNames] = useState("LOGIN")



  const login = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5006/login", user)

      setMessage(res.data.message)


      document.getElementById("message").style.display = "block";
      setTimeout(() => {
        document.getElementById("message").style.display = "none";
      }, 8000)

      const loginName = async () => {
        try {
          const res = await axios.post("http://localhost:5006/loginName", user)
          document.getElementById('loginbtn').style.backgroundColor = 'rgb(40, 116, 240)'
          document.getElementById('loginbtn').style.color = 'white'
          document.getElementById('loginbtn').style.border = 'rgb(40, 116, 240)'
          document.getElementById('loginbtn').style.border = 'rgb(40, 116, 240)'
          setNames(res.data.name)
        } catch (err) {
          console.error("error", err)
        }
      }
      loginName()
    } catch (err) {
      console.error("error", err)
    }

  }
  const register = async (e) => {
    e.preventDefault();
    const newUser = {
      name: name,
      email: email,
      password: password,
    }
    try {
      const res = await axios.post("http://localhost:5006/Registration", newUser)
      setMessage(res.data.message)
      document.getElementById("message").style.display = "block";
      setTimeout(() => {
        document.getElementById("message").style.display = "none";
      }, 8000)
      setRegisterData({
        name: "",
        email: "",
        password: "",
      });

    } catch (err) {
      console.log("error", err.response.data)
    }
  }
  useEffect(() => {
    axios.get("http://localhost:5006/loginn").then((response) => {
      // console.log(response)
      if (response.data.loggedin == true) {
        setNames(response.data.user.name)
      }
    })
  }, [])


  return (
    <>
      {/* <====================Navbar============================> */}
      <div
        style={{ backgroundColor: "#2874f0" }}
        className="container-fluid fixed-top"
      >
        <ul className="flex1">
          <a
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvas"

          >
            <li>
              <div className="div"></div>
              <div className="div"></div>
              <div className="div "></div>
            </li>
          </a>
          <li>
            {" "}
            <NavLink to="/Flipkart"><img
              className="mt-1"
              src={process.env.PUBLIC_URL + "/images/FlipkartPlus.png"}
              alt=""
              height="53px"
              id="imgl"
              style={{ width: 95 }} /></NavLink>
            {/* <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/Flipkart">Electronics</NavLink> */}
          </li>

          <li style={{ listStyle: "none" }} className="d-flex">
            {" "}
            <input
              style={{ paddingRight: 0, paddingLeft: 20 }}
              className=""
              type="search"
              placeholder="Search for products,brands and more"
              name=""
              id="input3"
            />


            {" "}
          </li>


          <li className="p1" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvas1" >

            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginLeft: 21 }}
            >
              <g fill="#fff" fillRule="evenodd">
                <path
                  d="m5.948 6.447c0 1.861 1.552 3.369 3.467 3.369 1.914 0 3.466-1.509 3.466-3.369 0-1.862-1.552-3.37-3.466-3.37-1.915 0-3.467 1.509-3.467 3.37m8.289 5.682c-.121-.041-.245-.075-.37-.102 0 0-1.153-.456-4.367-.456-3.214 0-4.367.456-4.367.456-1.735.343-3.133 2.108-3.133 3.878v2.095h9.357c-.229-.525-.357-1.105-.357-1.714 0-2.01 1.377-3.689 3.237-4.157m.215 5.623l.55.555.532-.573 2.973-3.2c.282-.303.264-.778-.039-1.06-.303-.282-.778-.264-1.06.039l-2.406 2.486-.698-.528c-.292-.294-.766-.297-1.061-.005-.294.292-.297.766-.005 1.061l1.213 1.225"
                  fill="#fff"
                />
              </g>
            </svg>
          </li>

          <li>
            {" "}
            <button
              className="btn btn-light rounded-0"
              id="loginbtn"
              style={{
                backgroundColor: "#2874f0",
                borderColor: "#2874f0",
                color: "#f8f9fa",
                padding: "0px 20px",
                height: 27.6,
                fontWeight: 700
              }}
              data-bs-toggle="modal"
              data-bs-target="#Login"
            >
              {names}
            </button>{" "}
          </li>
          {/* <li>
            <div className="dropdown" >
              <button className="btn btn-light rounded-0 dropbtn"
                id="loginbtn" style={{
                  backgroundColor: "#2874f0",
                  borderColor: "#2874f0",
                  color: "#f8f9fa",
                  padding: "0px 20px",
                  height: 27.6,
                  fontWeight: 700
                }}>{names}</button>
              <div className="dropdown-content" style={{ left: 0 }}>
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>

          </li> */}
          <li>
            <button
              id="seller"
              className="btn btn-primary mx-2"
              style={{ fontSize: 20 }}
            >
              Seller
            </button>
          </li>
          <li style={{ fontSize: 20 }}>
            <div className="dropdown">
              <button
                className="btn text-light dropdown-toggle mx-2"
                style={{ fontSize: 20 }}
                data-bs-toggle="dropdown"
                type="button"
              >
                More
              </button>
              <ul className="dropdown-menu" style={{ right: 0, left: "auto" }}>
                <li>
                  <a className="dropdown-item" href="#">
                    Notification Prefrence
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    24*7 Customer Support
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Advertise
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>

            <NavLink type="button" to="/Cart" style={{ backgroundColor: 'rgb(40, 116, 240)', borderColor: 'rgb(40, 116, 240)', color: "white", padding: "0px 0px", height: 27.6, marginLeft: '-103px' }} className="btn cartbtn rounded-0" >
              <i className="fa-solid fa-cart-shopping" ><span id="btn5" style={{ marginTop: '-20px' }} className="badge badge-danger">0</span></i>
            </NavLink>
          </li>


        </ul>
        <ul>
          <li style={{ listStyle: "none" }} className="">
            {" "}
            <input
              className=""
              type="search"
              placeholder="Search for products,brands and more"
              name=""
              id="search"
            />{" "}
          </li>
        </ul>
      </div>
      <br />
      <br />
      {/* <====================Navbar End============================> */}


      {/* <====================Login Modal1============================> */}
      <div className="modal" id="Login" >
        <div className="modal-dialog modal-lg">
          <div className="modal-content bg-light">
            <div className="containe-fluid" id="modal1">
              <div className="row">
                <div
                  className="col-md-5  text-light p-3"
                  style={{ backgroundColor: "#2874f0" }}
                >
                  <h2 style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                    Login
                  </h2>
                  <p className="pt-2">
                    Get access to your orders, whishlist and Recommendation
                  </p>
                  <img
                    className="mt-5 ms-5"
                    // src="images/Screenshot 2022-09-16 at 3.47.08 PM.png"
                    src={
                      process.env.PUBLIC_URL +
                      "/images/p.png"
                    }
                    alt=""
                    width="180px"
                    height="180px"
                  />
                </div>
                <div className="col-md-7 p-3 bg-white ">
                  <form action="#">
                    <button
                      className="btn-close"
                      type="button"
                      data-bs-dismiss="modal"
                      style={{ marginLeft: 415 }}
                    />
                    <div className="mb-2">
                      <label htmlFor="email" className="form-label">
                        Enter Email
                      </label>
                      <input
                        type="email"
                        placeholder=" Enter Email"
                        className="form-control"
                        // id="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        required

                      />
                    </div>
                    <div className="mb-1">
                      <label htmlFor="password" className="form-label">
                        Enter Password
                      </label>
                      <input
                        type="password"
                        placeholder="Enter Password"
                        className="form-control mb-5"
                        // id="password"
                        value={user.password}
                        onChange={handleChange}
                        name="password"
                        required

                      />
                    </div>
                    <p
                      style={{
                        fontSize: 13,
                        cursor: "default",
                        textAlign: "center",
                      }}
                    >
                      By Continuing, you agree to flipkart's
                      <span className="text-primary">Term of Use</span> and{" "}
                      <span className="text-primary">Privacy</span>
                    </p>
                    <div className="container-fluid text-center">
                      <button
                        className="btn btn-primary px-5"
                        type="submit"
                        id="loginbtn3"
                        onClick={(e) => login(e)}
                        data-bs-dismiss="modal"
                        style={{ backgroundColor: "#fb641b" }}
                      >
                        Login
                      </button>
                    </div>
                    <p style={{ textAlign: "center", marginTop: 20 }}>Or</p>
                    <div className="container-fluid text-center bg-light">
                      <button
                        className="btn btn-light text-primary px-4 pt-2"
                        type="button"
                      >
                        Request OTP
                      </button>
                      <hr />
                    </div>
                    <center>
                      {" "}
                      <a
                        className="m-3"
                        onClick={ModalChange}
                        style={{
                          textDecoration: "none",
                          cursor: "pointer",
                          fontSize: 13,
                        }}
                      >
                        New to Flipkart ? Create an account
                      </a>
                    </center>
                  </form>
                </div>
              </div>
            </div>

            {/* <====================Modal1 END============================> */}


            {/* <==================== Registration Modal2============================> */}

            <div className="containe-fluid" id="modal2">
              <div className="row">
                <div
                  className="col-md-5  text-light p-3"
                  style={{ backgroundColor: "#2874f0" }}
                >
                  <h2 style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                    Looks like you're new here!
                  </h2>
                  <p className="pt-2">
                    Sign up with your mobile number to get started
                  </p>
                  <img
                    className="mt-5 ms-5"
                    src={
                      process.env.PUBLIC_URL +
                      "/images/p.png"
                    }
                    alt=""
                    width="180px"
                    height="180px"
                  />
                </div>
                <div className="col-md-7 p-3 bg-white ">
                  <form>
                    <button
                      className="btn-close"
                      type="button"
                      data-bs-dismiss="modal"
                      style={{ marginLeft: 415 }}
                    />
                    <div className="mb-2">
                      <label htmlFor="name" className="form-label">
                        Enter Name
                      </label>
                      <input
                        type="text"
                        placeholder=" Enter Name"
                        className="form-control"
                        // id="name"
                        name="name"
                        value={registerData.name}
                        onChange={(e) => onChange(e)}
                        required

                      />
                    </div>
                    <div className="mb-2">
                      <label htmlFor="email" className="form-label">
                        Enter Email
                      </label>
                      <input
                        type="email"
                        placeholder=" Enter Email"
                        className="form-control"
                        // id="email"
                        value={registerData.email}
                        onChange={(e) => onChange(e)}
                        name="email"

                        required

                      />
                    </div>
                    <div className="mb-2">
                      <label htmlFor="password" className="form-label">
                        Enter password
                      </label>
                      <input
                        type="password"
                        placeholder=" Enter password"
                        className="form-control"
                        // id="password"
                        name="password"
                        value={registerData.password}
                        onChange={(e) => onChange(e)}


                        required
                      />
                    </div>
                    <p style={{ fontSize: 13, cursor: "default" }}>
                      By Continuing, you agree to flipkart's
                      <span className="text-primary">Term of Use</span> and{" "}
                      <span className="text-primary">Privacy</span>
                    </p>
                    <div className="container-fluid text-center">
                      <button
                        className="btn btn-primary px-5"
                        type="submit"
                        onClick={(e) => register(e)}
                        data-bs-dismiss="modal"
                        style={{ backgroundColor: "#fb641b" }}
                      >
                        Continue
                      </button>
                    </div>
                    <p style={{ textAlign: "center", marginTop: 20 }}>Or</p>
                    <center>
                      {" "}
                      <a
                        className="m-3"
                        onClick={ModalChange2}
                        style={{
                          textDecoration: "none",
                          cursor: "pointer",
                          fontSize: 13,
                        }}
                      >
                        Existing user? Log in
                      </a>
                    </center>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <====================Modal2 End============================> */}

      <div style={{ marginBottom: -112 }} className="alert alert-primary mt4" id="message" role="alert">
        {message}
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
  );
}
function ModalChange() {
  document.getElementById("modal1").style.display = "none";
  document.getElementById("modal2").style.display = "block";
}
function ModalChange2() {
  document.getElementById("modal2").style.display = "none";
  document.getElementById("modal1").style.display = "block";
}
