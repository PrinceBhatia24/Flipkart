import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

function Checkout() {

    const [total, setTotal] = useState(0);
    const [cartItems , setCartItems] = useState(0)
    function UpdateCart() {
        let cartString = localStorage.getItem("Cart");
        let Cart = JSON.parse(cartString)
        if (Cart === null || Cart.length === 0) {

            document.getElementsByClassName(".cartbtn").innerHTML = "( 0 )";
            document.getElementsByClassName(".cart-body").innerHTML = "<h4>Cart is Empty </h4>";
        }
        else {
            document.getElementById("btn5").innerHTML = `${Cart.length}`
            setCartItems(Cart.length)
            let table = "";
            let TotalPrice = 0;
            Cart.map((item) => {
                table += `
     <ul>
     <li><div class="card mb-3" style="max-width: 540px;">
     <div class="row g-0">
       <div class="col-md-4">
       <img
       src="Flipkart/images/${item.ProductImage}"
       alt="p"
       class="card-img-top mx-auto p3"
       style={{ height: "100px", width: "100px" }}
     />
       </div>
       <div class="col-md-8">
         <div class="card-body">
           <h5 class="card-title">${item.ProductName}</h5>
           <p class="card-text">₹${item.ProductPrice}</p>
           <p class="card-text"><small class="text-muted">Quantity:${item.ProductQuantity}</p>
           <p class="card-text"><small class="text-muted">Seller:XONIGHT E-Commerce</small></p>
           <button
           class="btn btn-danger btn-sm"
          
           onClick={DeleteItem(${item.ProductQuantity}){console.log("cd")}}
         >
           Remove
         </button>

           </div>
       </div>
     </div>
   </div>
              </li>
     </ul>     
                `
                TotalPrice += item.ProductPrice * item.ProductQuantity;
                setTotal(TotalPrice);
            })
            document.getElementById("tbodyy").innerHTML = table
        }
    }
    useEffect(() => {
        UpdateCart();
    })

    const DeleteItem = (pID) => {
        let Cart = JSON.parse(localStorage.getItem('Cart'));
        let NewCart = Cart.filter((item) => item.ProductId !== pID)
        localStorage.setItem('Cart', JSON.stringify(NewCart))
        UpdateCart();
        // showToast("Item is Removed From Cart");
    
      }
    const discount = (total / 100) * 10
    const subTotal = total - discount

    
    return (
        <div style={{ backgroundColor: '#f1f3f6' }} >
            <Navbar />
            
            <div className='container mt5 d-flex'  style={{marginTop:'140px'}}>
                <div style={{ border: '2px solid #e5e6e9', marginLeft: 20, height: '84vh', backgroundColor: 'white', float: 'left', width: '100vw' ,overflow: 'hidden', overflowY: 'scroll', height: 730 }} >
                    <div style={{marginRight:20 , textAlign:'end'}}>
                    Delivery by Sun  | Free₹40
                    </div>
                    <div id="tbodyy">
                    


                    </div>
                    <div className='mx-4' style={{float:'right' }}>
                        <button className='btn' style={{backgroundColor:'#fb641b' , fontSize:20 , color:'white'}}> PLACE ORDER</button>
                    </div>
                </div>
                <div style={{ border: '2px solid #e5e6e9', height: '60vh', marginRight: 20, marginLeft: 20, backgroundColor: 'white', width: '35vw' }}>
                    <p className='CHP' style={{ padding: 10, marginLeft: 10 }}>
                        PRICE DETAILS
                    </p><hr></hr>
                    <div className='d-flex' style={{ height: '23vh' }}>
                        <div className='divvv' >
                            <ul className='d-flex CHP' style={{ listStyleType: 'none' }}>
                                <li style={{ color: 'black', fontWeight: '500px' }} className='CHP'>Price ( {cartItems} items)</li>

                            </ul>


                            <ul className='d-flex CHP' style={{ listStyleType: 'none' }}>
                                <li style={{ color: 'black', fontWeight: '500px' }} className='CHP'>Discount</li>

                            </ul>
                            <ul className='d-flex CHP' style={{ listStyleType: 'none' }}>
                                <li style={{ color: 'black', fontWeight: '500px' }} className='CHP'>Delivery Charges</li>

                            </ul>
                            <ul className='d-flex CHP' style={{ listStyleType: 'none' }}>

                                <li style={{ color: 'black', fontWeight: '500px' }} className='CHP'>Packaging Fee</li>
                            </ul>

                        </div>
                        <div className='divv' >
                            <ul className='d-flex CHP2' style={{ listStyleType: 'none' }}>

                                <li style={{ color: '#3b903f', fontWeight: 900, }} className='CHP'>{total}</li>
                            </ul>


                            <ul className='d-flex CHP2' style={{ listStyleType: 'none' }}>

                                <li style={{ fontWeight: 900, }} className='CHP'>10%</li>
                            </ul>
                            <ul className='d-flex CHP2' style={{ listStyleType: 'none' }}>

                                <li style={{ fontWeight: 900, }} className='CHP'>Free</li>
                            </ul>
                            <ul className='d-flex CHP2' style={{ listStyleType: 'none' }}>

                                <li style={{ color: '#3b903f', fontWeight: 900, }} className='CHP'>₹49</li>
                            </ul>

                        </div>
                    </div>
                    <hr></hr>
                    <div className='d-flex' style={{ border: '1px solid white ' }}>

                        <div className='divvv' style={{ border: '1px solid white' }}>

                            <ul className='d-flex CHP' style={{ listStyleType: 'none' }}>
                                <li className='CHP' style={{ fontWeight: 700 }}>Total Amount </li>

                            </ul>

                        </div>

                        <div className='divv' style={{ border: '1px solid white', }}>

                            <ul className='d-flex CHP2' style={{ listStyleType: 'none' }}>

                                <li className='CHP'>{subTotal}</li>
                            </ul>

                        </div>


                    </div>
                    <hr></hr>

                    <div>
                        <ul className='d-flex' style={{ listStyleType: 'none' }}>
                            <li className='CHP' style={{ color: '#3b903f', fontWeight: 900, marginLeft: -31 }}>You Will Save 10% off on This Order</li>

                        </ul>
                    </div>
                </div>
            </div>
      
            <Footer />
        </div>
    )
}
export default Checkout

    // ` 
    //       <tr>
    //         <td>${item.ProductName}</td>
    //         <td>₹${item.ProductPrice}</td>
    //         <td>${item.ProductQuantity}</td>
    //         <td>${item.ProductPrice * item.ProductQuantity}</td>
    //         <td> <button onClick={DeleteItem(${item.ProductId})} class="btn btn-danger btn-sm">Removes</button></td>
    //       </tr>
          
    //     `