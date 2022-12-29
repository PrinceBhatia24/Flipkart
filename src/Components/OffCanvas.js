import { NavLink } from "react-router-dom";
import axios from 'axios';
import React, { useState} from 'react'




export default function OffCanvas() {
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

  // const [message, setMessage] = useState("")
  // const [names, setNames] = useState("LOGIN")

  const login = async (e) => {
    e.preventDefault();
  try {
     await axios.post("http://localhost:5006/login", user)
    // setNames(res.data.name)
    // setMessage(res.data.message)

    document.getElementById("message").style.display = "block";
    setTimeout(() => {
      document.getElementById("message").style.display = "none";
      // setMessage("")
    }, 8000)
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
    await axios.post("http://localhost:5006/Registration", newUser)
      // setMessage(res.data.message)
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
  return (
    <>
      {/* <====================offCanvas============================> */}
      <div className="offcanvas offcanvas-start bg-light text-dark" id="offcanvas">
        <div className="offcanvas-body">
          <div
            style={{ backgroundColor: "#2874f0", position: "absolute", left: 0, top: 0 }}
            className="container-fluid"
          >
            <ul className="flex3 mt-2 mb-2">
              <li>
                {" "}
                <i
                  className="fa-solid fa-2x fa-user"
                  style={{ marginLeft: 28 }}
                />{" "}
              </li>
              <li>
                {" "}
                <button
                  className="btn"
                  id="loginbtn1"
                  onClick={DisplayChange}
                  style={{ color: "#ffffff" }}
                  href="#About"
                >
                  Login
                </button>{" "}
              </li>
              {/* <li><button class="btn" style="margin-left: 130px; background-color: #2874f0;"
                      data-bs-dismiss="offcanvas"><img
                          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxNSAxNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMS4wNjMgMWwxMi4zIDEyLjQyNW0uMDYzLTEyLjM2MkwxIDEzLjM2MyIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBmaWxsPSJub25lIi8+PC9zdmc+"></button>
              </li> */}
            </ul>
          </div>
          <ul className="mt-5" id="FPI">
            <li className="li">
              <p>
                <img
                  className="_2puWtW _3a3qyb mx-2"
                  alt=""
                  srcSet="https://rukminim1.flixcart.com/www/100/14/promos/05/07/2019/37c19766-0af6-45c8-866a-720adfa534e2.png?q=0 1x,"
                />
              </p>
              <h6 style={{ padding: "-20px" }}>SuperCoin Zone</h6>
              <p />
            </li>
            <li className="li">
              <p>
                <img
                  className="_2puWtW _3a3qyb mx-2"
                  alt=""
                  srcSet="https://rukminim1.flixcart.com/www/100/14/promos/11/07/2018/70e5346e-fce4-4718-8e56-27be8492faa5.png?q=80 1x, https://rukminim1.flixcart.com/www/200/28/promos/11/07/2018/70e5346e-fce4-4718-8e56-27be8492faa5.png?q=60 2x, https://rukminim1.flixcart.com/www/300/42/promos/11/07/2018/70e5346e-fce4-4718-8e56-27be8492faa5.png?q=40 3x, "
                  src="https://rukminim1.flixcart.com/www/undefined/14/promos/11/07/2018/70e5346e-fce4-4718-8e56-27be8492faa5.png?q=80"
                />
              </p>
              <h6>Flipkart Plus Zone</h6>
              <p />
            </li>
            <hr style={{ width: "121%", position: "relative", left: "-50px" }} />
            <li className="li">
              <p>
                {" "}
                <img
                  className="_2puWtW _3a3qyb mx-2"
                  alt=""
                  srcSet="https://rukminim1.flixcart.com/www/100/14/promos/13/11/2019/d19caf2b-e593-4e6b-93e5-a6c388210736.png?q=80 1x, https://rukminim1.flixcart.com/www/200/28/promos/13/11/2019/d19caf2b-e593-4e6b-93e5-a6c388210736.png?q=60 2x, https://rukminim1.flixcart.com/www/300/42/promos/13/11/2019/d19caf2b-e593-4e6b-93e5-a6c388210736.png?q=40 3x, "
                  src="https://rukminim1.flixcart.com/www/undefined/14/promos/13/11/2019/d19caf2b-e593-4e6b-93e5-a6c388210736.png?q=80"
                />
              </p>
              <h6>All Categories</h6>
              <p />
            </li>
            <li className="li">
              <p>
                <img
                  className="_2puWtW _3a3qyb mx-2"
                  alt=""
                  srcSet="https://rukminim1.flixcart.com/www/100/14/promos/26/01/2022/4495e6c3-7a67-4e74-b754-31aa3bd64272.png?q=80 1x, https://rukminim1.flixcart.com/www/200/28/promos/26/01/2022/4495e6c3-7a67-4e74-b754-31aa3bd64272.png?q=60 2x, https://rukminim1.flixcart.com/www/300/42/promos/26/01/2022/4495e6c3-7a67-4e74-b754-31aa3bd64272.png?q=40 3x, "
                  src="https://rukminim1.flixcart.com/www/undefined/14/promos/26/01/2022/4495e6c3-7a67-4e74-b754-31aa3bd64272.png?q=80"
                />
              </p>
              <h6>Trending Stores</h6>
              <p />
            </li>
            <li className="li">
              <p>
                <img
                  className="_2puWtW _3a3qyb mx-2"
                  alt=""
                  srcSet="https://rukminim1.flixcart.com/www/100/14/promos/15/06/2020/3c2eff2c-685f-4002-b3c9-d6942563af76.jpg?q=80 1x, https://rukminim1.flixcart.com/www/200/28/promos/15/06/2020/3c2eff2c-685f-4002-b3c9-d6942563af76.jpg?q=60 2x, https://rukminim1.flixcart.com/www/300/42/promos/15/06/2020/3c2eff2c-685f-4002-b3c9-d6942563af76.jpg?q=40 3x, "
                  src="https://rukminim1.flixcart.com/www/undefined/14/promos/15/06/2020/3c2eff2c-685f-4002-b3c9-d6942563af76.jpg?q=80"
                />
              </p>
              <h6>More on Flipkart</h6>
              <p />
            </li> 
            <hr style={{ width: "121%", position: "relative", left: "-50px" }} />
            <li className="li">
              <p>
                <img
                  className="_2puWtW _3a3qyb mx-2"
                  alt=""
                  srcSet="https://rukminim1.flixcart.com/www/100/14/promos/01/08/2019/23d1528b-d57d-440e-a21f-f374f518b6ed.png?q=80 1x, https://rukminim1.flixcart.com/www/200/28/promos/01/08/2019/23d1528b-d57d-440e-a21f-f374f518b6ed.png?q=60 2x, https://rukminim1.flixcart.com/www/300/42/promos/01/08/2019/23d1528b-d57d-440e-a21f-f374f518b6ed.png?q=40 3x, "
                  src="https://rukminim1.flixcart.com/www/undefined/14/promos/01/08/2019/23d1528b-d57d-440e-a21f-f374f518b6ed.png?q=80"
                />
              </p>
              <h6>Choose Language</h6>
              <p />
            </li>
            <hr style={{ width: "121%", position: "relative", left: "-50px" }} />
            <li className="li">
              <p>
                <img
                  className="_2puWtW _3a3qyb mx-2"
                  alt=""
                  srcSet="https://rukminim1.flixcart.com/www/100/14/promos/08/04/2016/a12880b1-9c2b-4b4b-9029-31ba9ff666bf.png?q=80 1x, https://rukminim1.flixcart.com/www/200/28/promos/08/04/2016/a12880b1-9c2b-4b4b-9029-31ba9ff666bf.png?q=60 2x, https://rukminim1.flixcart.com/www/300/42/promos/08/04/2016/a12880b1-9c2b-4b4b-9029-31ba9ff666bf.png?q=40 3x, "
                  src="https://rukminim1.flixcart.com/www/undefined/14/promos/08/04/2016/a12880b1-9c2b-4b4b-9029-31ba9ff666bf.png?q=80"
                />
              </p>
              <h6>offer Zone</h6>
              <p />
            </li>
            <li className="li">
              <p>
                <img
                  className="_2puWtW _3a3qyb mx-2"
                  alt=""
                  srcSet="https://rukminim1.flixcart.com/www/100/14/promos/18/01/2019/c79d21c6-b201-42a7-b37c-6405c6c4fbf5.png?q=80 1x, https://rukminim1.flixcart.com/www/200/28/promos/18/01/2019/c79d21c6-b201-42a7-b37c-6405c6c4fbf5.png?q=60 2x, https://rukminim1.flixcart.com/www/300/42/promos/18/01/2019/c79d21c6-b201-42a7-b37c-6405c6c4fbf5.png?q=40 3x, "
                  src="https://rukminim1.flixcart.com/www/undefined/14/promos/18/01/2019/c79d21c6-b201-42a7-b37c-6405c6c4fbf5.png?q=80"
                />
              </p>
              <h6>Sell on Flipkart</h6>
              <p />
            </li>
            <hr style={{ width: "121%", position: "relative", left: "-50px" }} />
            <li className="li">
              <p>
                <img
                  className="_2puWtW _3a3qyb mx-2"
                  alt=""
                  srcSet="https://rukminim1.flixcart.com/www/100/14/promos/10/03/2017/b7a79d1a-e088-4c4b-951f-9b8214719cc9.png?q=80 1x, https://rukminim1.flixcart.com/www/200/28/promos/10/03/2017/b7a79d1a-e088-4c4b-951f-9b8214719cc9.png?q=60 2x, https://rukminim1.flixcart.com/www/300/42/promos/10/03/2017/b7a79d1a-e088-4c4b-951f-9b8214719cc9.png?q=40 3x, "
                  src="https://rukminim1.flixcart.com/www/undefined/14/promos/10/03/2017/b7a79d1a-e088-4c4b-951f-9b8214719cc9.png?q=80"
                />
              </p>
              <h6>My Order</h6>
              <p />
            </li>
            <li className="li">
              <p>
                <img
                  className="_2puWtW _3a3qyb mx-2"
                  alt=""
                  srcSet="https://rukminim1.flixcart.com/www/100/14/promos/31/08/2016/3afaefd4-3961-4cac-921c-b9517c96ad47.png?q=80 1x, https://rukminim1.flixcart.com/www/200/28/promos/31/08/2016/3afaefd4-3961-4cac-921c-b9517c96ad47.png?q=60 2x, https://rukminim1.flixcart.com/www/300/42/promos/31/08/2016/3afaefd4-3961-4cac-921c-b9517c96ad47.png?q=40 3x, "
                  src="https://rukminim1.flixcart.com/www/undefined/14/promos/31/08/2016/3afaefd4-3961-4cac-921c-b9517c96ad47.png?q=80"
                />
              </p>
              <h6>Coupons</h6>
              <p />
            </li>
            <li className="li">
              <p>
                <img
                  className="_2puWtW _3a3qyb mx-2"
                  alt=""
                  srcSet="https://rukminim1.flixcart.com/www/100/14/promos/10/03/2017/920f4fcd-8977-43a9-9014-abcad558de8d.png?q=80 1x, https://rukminim1.flixcart.com/www/200/28/promos/10/03/2017/920f4fcd-8977-43a9-9014-abcad558de8d.png?q=60 2x, https://rukminim1.flixcart.com/www/300/42/promos/10/03/2017/920f4fcd-8977-43a9-9014-abcad558de8d.png?q=40 3x, "
                  src="https://rukminim1.flixcart.com/www/undefined/14/promos/10/03/2017/920f4fcd-8977-43a9-9014-abcad558de8d.png?q=80"
                />
              </p>
              <h6>My Cart</h6>
              <p />
            </li>
            <li className="li">
              <p>
                <img
                  className="_2puWtW _3a3qyb mx-2"
                  alt=""
                  srcSet="https://rukminim1.flixcart.com/www/100/14/promos/07/04/2016/c35cca9e-2d7a-4583-9770-32a97ddf1c9b.png?q=80 1x, https://rukminim1.flixcart.com/www/200/28/promos/07/04/2016/c35cca9e-2d7a-4583-9770-32a97ddf1c9b.png?q=60 2x, https://rukminim1.flixcart.com/www/300/42/promos/07/04/2016/c35cca9e-2d7a-4583-9770-32a97ddf1c9b.png?q=40 3x, "
                  src="https://rukminim1.flixcart.com/www/undefined/14/promos/07/04/2016/c35cca9e-2d7a-4583-9770-32a97ddf1c9b.png?q=80"
                />
              </p>
              <h6>My Account</h6>
              <p />
            </li>
            <hr style={{ width: "121%", position: "relative", left: "-50px" }} />
            <li className="li">
              <p></p>
              <h6>Help Center</h6>
            </li>
            <li className="li">
              <p></p>
              <h6>Legal</h6>
            </li>
          </ul>

          <div className="offcanvas-body" id="displayy">
            <div
              style={{ backgroundColor: "#2874f0", position: "absolute", left: 0, top: 0 }}
              className="container-fluid"
            >
              <ul className="flex3 mt-2 mb-2">
                <li>
                  <img
                    src={process.env.PUBLIC_URL + '/images/ban.png'}
                    style={{ marginLeft: 90 }}
                    width="140px"
                    alt=""
                  />
                </li>
                {/* <li><button class="btn" style="margin-left: 15px; background-color: #2874f0;"
                          data-bs-dismiss="offcanvas"><img
                              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxNSAxNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMS4wNjMgMWwxMi4zIDEyLjQyNW0uMDYzLTEyLjM2MkwxIDEzLjM2MyIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBmaWxsPSJub25lIi8+PC9zdmc+"></button>
                  </li> */}
              </ul>
            </div>
            <form>
              <div>
                <ul
                  style={{ marginTop: 80, listStyle: "none", marginLeft: "-35px" }}
                >
                  <li>
                    <h4>Login to check your account</h4>
                  </li>
                  <li>
                    <div className="mb-2">
                      <label htmlFor="email" className="form-label">
                        Enter Email:
                      </label>
                      <input
                        type="email"
                        placeholder=" Enter Email"
                        className="form-control"
                        // id="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        required=""
                      />
                    </div>
                  </li>
                  <li>
                    <div className="mb-1">
                      <label htmlFor="password" className="form-label">
                        Enter Password:
                      </label>
                      <input
                        type="password"
                        placeholder="Enter Password"
                        className="form-control mb-5"
                        // id="password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        required=""
                      />
                    </div>
                  </li>
                  <li>
                    <p
                      style={{
                        fontSize: 13,
                        cursor: "default",
                        textAlign: "center"
                      }}
                    >
                      By Continuing, you agree to flipkart's
                      <span className="text-primary">Term of Use</span> and{" "}
                      <span className="text-primary">Privacy</span>
                    </p>
                  </li>
                  <li>
                    <div className="container-fluid text-center">
                      <button
                        className="btn btn-primary px-5"
                        type="submit"
                        onClick={(e)=>login(e)}
                        data-bs-dismiss="offcanvas"
                        id="loginbtn2"
                        style={{ backgroundColor: "#fb641b" }}
                      >
                        Login
                      </button>
                    </div>
                  </li>
                  <li>
                    <p style={{ textAlign: "center", marginTop: 20, fontSize: 20 }}>
                      Or
                    </p>
                    <div className="container-fluid text-center bg-light">
                      <button
                        className="btn btn-light text-primary px-4 pt-2"
                        type="button"
                      >
                        Request OTP
                      </button>
                      <hr />
                    </div>
                  </li>
                  <li>
                    <center>
                      {" "}
                      <a
                        className="m-3"
                        onClick={DisplayChange2}
                        style={{
                          textDecoration: "none",
                          cursor: "pointer",
                          fontSize: 13
                        }}
                      >
                        New to Flipkart ? Create an account
                      </a>
                    </center>
                  </li>
                </ul>
              </div>
            </form>
          </div>
          <div className="offcanvas-body" id="displayy2">
            <div
              style={{ backgroundColor: "#2874f0", position: "absolute", left: 0, top: 0 }}
              className="container-fluid"
            >
              <ul className="flex3 mt-2 mb-2">
                <li>
                  <img
                    src={process.env.PUBLIC_URL + '/images/ban.png'}
                    style={{ marginLeft: 90 }}
                    width="140px"
                    alt=""
                  />
                </li>
              </ul>
            </div>
            <form>
              <div>
                <ul
                  style={{ marginTop: 80, listStyle: "none", marginLeft: "-35px" }}
                >
                  <li>
                    <h4>Enter details to Register yourself</h4>
                  </li>
                  <div className="mb-2">
                    <label htmlFor="name" className="form-label">
                      Enter Name
                    </label>
                    <input
                      type="text"
                      placeholder=" Enter Name"
                      className="form-control"
                      id="name"
                      name="name"
                      required=""
                      value={registerData.name}
                      onChange={(e) => onChange(e)}
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
                      name="email"
                      required=""
                      value={registerData.email}
                        onChange={(e) => onChange(e)}
                    />
                  </div>
                  <li>
                    <div className="mb-1">
                      <label htmlFor="password" className="form-label">
                        Enter Password:
                      </label>
                      <input
                        type="password"
                        placeholder="Enter Password"
                        className="form-control mb-5"
                        id="password"
                        name="password"
                        required=""
                        value={registerData.password}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                  </li>
                  <li>
                    <p style={{ fontSize: 13, cursor: "default" }}>
                      By Continuing, you agree to flipkart's
                      <span className="text-primary">Term of Use</span> and{" "}
                      <span className="text-primary">Privacy</span>
                    </p>
                  </li>
                  <li>
                    <div className="container-fluid text-center">
                      <button
                        className="btn btn-primary px-5"
                        type="submit"
                        onClick={(e)=>register(e)}
                        data-bs-dismiss="offcanvas"
                        style={{ backgroundColor: "#fb641b" }}
                      >
                        Continue
                      </button>
                    </div>
                    <hr />
                  </li>
                  <li>
                    <center>
                      {" "}
                      <a
                        className="m-3"
                        onClick={DisplayChange3}
                        style={{
                          textDecoration: "none",
                          cursor: "pointer",
                          fontSize: 13
                        }}
                      >
                        Existing user? Log in
                      </a>
                    </center>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="offcanvas offcanvas-start bg-light text-dark" id="offcanvas1">
        <div className="offcanvas-body">
          <div
            style={{ backgroundColor: "#2874f0", position: "absolute", left: 0, top: 0, zIndex: 1 }}
            className="container-fluid"
          >
            <ul className="flex3 mt-2 mb-2">
              <li>
                <img
                  src={process.env.PUBLIC_URL + '/images/'}
                  style={{ marginLeft: 90 }}
                  width="140px"
                  alt=""
                />
              </li>
              {/* <li><button class="btn" style="margin-left: 15px; background-color: #2874f0;"
                          data-bs-dismiss="offcanvas"><img
                              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxNSAxNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMS4wNjMgMWwxMi4zIDEyLjQyNW0uMDYzLTEyLjM2MkwxIDEzLjM2MyIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBmaWxsPSJub25lIi8+PC9zdmc+"></button>
                  </li> */}
            </ul>
          </div>
          <div className='container2 fixed'>
            <div className='box5'>
              <ul className="list-group mt-1">
                <div id='m2' style={{ fontSize: 17 }}>
                  <li className="list-group-item ">
                    {" "}
                    {" "}
                  </li>
                  <li className="list-group-item" ><NavLink style={{ textDecoration: 'none', color: 'black' }} to="/Electronics">Electronics</NavLink>  </li>
                  <li className="list-group-item" ><NavLink style={{ textDecoration: 'none', color: 'black' }} to="/MensTopWear">Men's Top Wear</NavLink>  </li>
                  <li className="list-group-item" >< NavLink style={{ textDecoration: 'none', color: 'black' }} to="/MensBottomWear">Mens's Bottom Wear</NavLink></li>
                  <li className="list-group-item" ><a style={{ textDecoration: 'none', color: 'black' }} href="/">Women Ethnic</a>  </li>
                  <li className="list-group-item" ><a style={{ textDecoration: 'none', color: 'black' }} href="/">Women Western</a>  </li>
                  <li className="list-group-item">Vestibulum at eros</li>
                  <li className="list-group-item">Vestibulum at eros</li>
                  <li className="list-group-item">Vestibulum at eros</li>
                  <li className="list-group-item">Vestibulum at eros</li>
                  <li className="list-group-item">Vestibulum at eros</li>
                  <li className="list-group-item">Vestibulum at eros</li>
                  <li className="list-group-item">Vestibulum at eros</li>
                  <li className="list-group-item">Vestibulum at eros</li>
                  <li className="list-group-item">Vestibulum at eros</li>
                  <li className="list-group-item">Vestibulum at eros</li>
                  <li className="list-group-item">Vestibulum at eros</li>
                  <li className="list-group-item">Vestibulum at eros</li>

                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <====================offCanvas End============================> */}
    </>

  )
}


function DisplayChange() {
  document.getElementById('FPI').style.display = "none";
  document.getElementById('displayy').style.display = "block";

}
function DisplayChange2() {
  // document.getElementById('FPI').style.display="none";
  document.getElementById('displayy').style.display = "none";
  document.getElementById('displayy2').style.display = "block";
}
function DisplayChange3() {
  document.getElementById('displayy2').style.display = "none";
  document.getElementById('displayy').style.display = "block";
}