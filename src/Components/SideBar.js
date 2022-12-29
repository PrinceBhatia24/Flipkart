import React from 'react'
import { NavLink } from "react-router-dom";
function SideBar() {
  return (
    <>
      <div className='container2 fixed'>
        <div className="box1">
          <h6 style={{ backgroundColor: '#2874f0', color: 'white', height: 100, textAlign: 'center', paddingTop: 30, borderTopLeftRadius: 1, borderTopRightRadius: 10 }}>Category</h6>
          <ul className="list-group mt-1" style={{ overflow: 'hidden', overflowY: 'scroll', height: 250 }}>
            <div id='m2'>
              <li className="list-group-item" ><NavLink style={{ textDecoration: 'none', color: 'black' }} to="/Flipkart">Electronics</NavLink>  </li>
              <li className="list-group-item" ><NavLink style={{ textDecoration: 'none', color: 'black' }} to="/MensTopWear">Men's Top Wear</NavLink>  </li>
              <li className="list-group-item" >< NavLink style={{ textDecoration: 'none', color: 'black' }} to="/MensBottomWear">Mens's Bottom Wear</NavLink></li>
              <li className="list-group-item" ><a style={{ textDecoration: 'none', color: 'black' }} href="/">Women Ethnic</a>  </li>
              <li className="list-group-item" ><a style={{ textDecoration: 'none', color: 'black' }} href="/">Women Western</a>  </li>
              <li style={{borderBottom:'2px solid #e0e0e0'}} className="list-group-item">Vestibulum at eros</li>
              <li className="list-group-item">Vestibulum at eros</li>
              <li className="list-group-item">Vestibulum at eros</li>
              <li className="list-group-item">Vestibulum at eros</li>
              <li className="list-group-item">Vestibulum at eros</li>


            </div>
          </ul>
          <ul>

            <li><div className="banner">
              <img
                className="banner"
                src="https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70"
              />
            </div>

              <div className='card' style={{ width: 180, marginTop: 20, marginLeft: -30, border: "2px solid white" }}>
                <div className="sidesection b-0" style={{ height: 237 }}>
                  <h4>
                    <a style={{ textDecoration: 'none', color: 'black', marginLeft: 8 }} href="/colors/colors_picker.asp">COLOR PICKER</a>
                  </h4>
                  <a href="https://princebhatia24.github.io/Colour_Gradient/">
                    <img style={{ marginLeft: 6, height: 142, marginTop: 20 }} src={process.env.PUBLIC_URL + '/images/colorpicker2000.png'} />
                  </a>
                </div>
                <div style={{ display: 'flex', marginTop: 10, marginLeft: 9 }}>
                  <div style={{ marginLeft: 20 }}>
                    <a className='mx-1' style={{ color: 'black' }} href="https://www.facebook.com/w3schoolscom/" target="_blank" title="Facebook"><span className="fa fa-facebook-square fa-2x"></span></a>
                    <a className='mx-1' style={{ color: 'black' }} href="https://www.instagram.com/w3schools.com_official/" target="_blank" title="Instagram"><span className="fa fa-instagram fa-2x"></span></a>
                    <a className='mx-1' style={{ color: 'black' }} href="https://www.linkedin.com/company/w3schools.com/" target="_blank" title="LinkedIn"><span className="fa fa-linkedin-square fa-2x"></span></a>
                  </div>
                </div>

              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
export default SideBar