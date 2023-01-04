import React, { useState, useEffect } from 'react'
import Footer from './Footer';
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';

function Checkout() {
    const [total, setTotal] = useState(0);
    const [cartItems, setCartItems] = useState(0)
    const [cart, setCart] = useState([])
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
            // setCart(Cart)
            Cart.map((item) => {
                table += `
   <ul>
   <li><div className="card mb-3" style={{listStyleType:'none'}}>
   <div className="row g-0">
     <div className="col-md-4">
     <img 
     src="Flipkart/images/${item.ProductImage}"
     className="img-fluid rounded-start p2 responsive" alt="cd"></img>
     </div>
     <div className="col-md-8">
       <div className="card-body">
         <h5 className="card-title">${item.ProductName}</h5>
         <p className="card-text">₹${item.ProductPrice}</p>
         <p className="card-text"><small className="text-muted">Quantity:${item.ProductQuantity}</p>
         <p className="card-text"><small className="text-muted">Seller:XONIGHT E-Commerce</small></p>
         <button
         className="btn btn-danger btn-sm"
        
         onClick={DeleteItem()}
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
            //  document.getElementById("tbodyy").innerHTML = table
        }
    }

    //  console.log(cart)
    useEffect(() => {
        UpdateCart();
    })

    const DeleteItem = (pID) => {
        let Cart = JSON.parse(localStorage.getItem('Cart'));
        let NewCart = Cart.filter((item) => item.ProductId !== pID)
        localStorage.setItem('Cart', JSON.stringify(NewCart))
        UpdateCart();
        showToast("Item is Removed From Cart");

    }
    function showToast(content) {
        document.getElementById('toast2').classList.add("display");
        document.getElementById('toast2').innerHTML = content;
        setTimeout(() => {
            document.getElementById('toast2').classList.remove("display");
        }, 2000);
    }
    const discount = (total / 100) * 10
    const subTotal = total - discount


    return (
        <>
            <div style={{ backgroundColor: '#f1f3f6' }} >
                <Navbar />

                <div className='container mt5 d-flex'  >
                    <div style={{ border: '2px solid #e5e6e9', marginLeft: 20, height: '84vh', backgroundColor: 'white', float: 'left', width: '100vw', overflow: 'hidden', overflowY: 'scroll', height: 732 }} >
                        <div className=' mt-1' style={{ justifyContent: 'space-between', paddingTop: 10, height: 40 }}>
                            <div className='d-flex' style={{ justifyContent: 'space-between' }}>
                                <h1 style={{ fontSize: 17, marginLeft: 24, fontWeight: 400 }}> 1. LOGIN <span className='mx-3'>&#10003;</span></h1>
                                <button className='btn btn-primary btn-sm' style={{ marginRight: 20 }}>Change  </button>
                            </div>
                        </div>
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item mt-3">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button bg-primary text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        2.  Delivery Address <span className='mx-3'>&#10003;</span>
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <div>
                                            <form action="">
                                                <p>
                                                    <input className='mx-3' type="radio" id='address1' name='address' value="p1" />
                                                    <label For="address1">Prince Bhatia <span className='mx-4'>9468359122</span> </label><br></br>
                                                    <p className='mx-5'> House no 173 , Sunder nagr, Near Hanuman Mandir , Fatehabad , Haryana </p>
                                                </p>

                                                <input className='mx-3' type="radio" id='address2' name='address' value="p1" />
                                                <label For="address2">Surinder <span className='mx-4'>9466859122</span> </label><br></br>
                                                <p className='mx-5'> House no 173 , Sunder nagr, Near Hanuman Mandir , Fatehabad , Haryana </p>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion" id="accordionExample">

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">

                                    <button class="accordion-button collapsed bg-primary text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        3. Payment Option <span className='mx-3'>&#10003;</span>

                                    </button>

                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <div>
                                            <form action="">
                                                <p>
                                                    <input className='mx-3' type="radio" id='Payment1' name='Payment' value="UPI" />
                                                    <label For="Payment1">UPI</label><br></br>

                                                </p>

                                                <p>
                                                    <input className='mx-3' type="radio" id='Payment2' name='Payment' value="Credit/Debit" />
                                                    <label For="Payment2">Credit/Debit</label><br></br>
                                                </p>
                                                <p>
                                                    <input className='mx-3' type="radio" id='Payment3' name='Payment' value="Wallets" />
                                                    <label For="Payment3">Wallets</label><br></br>
                                                </p>
                                                <p>
                                                    <input className='mx-3' type="radio" id='Payment4' name='Payment' value="EMI" />
                                                    <label For="Payment4">EMI</label><br></br>
                                                </p>
                                                <p>
                                                    <input className='mx-3' type="radio" id='Payment5' name='Payment' value="Cash On Delivery" />
                                                    <label For="Payment5">Cash On Delivery</label><br></br>
                                                </p>

                                            </form>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>
                        <div className='mx-4 mt-3' style={{ float: 'right' }}>
                            <NavLink className='btn' to="/Checkout" style={{ backgroundColor: '#fb641b', fontSize: 20, color: 'white' }}> Place Order</NavLink>
                        </div>

                    </div>

                    <div style={{ border: '2px solid #e5e6e9', height: '40vh', marginRight: 0, marginLeft: 0, backgroundColor: 'white', width: '49vw' }}>
                        <p className='CHP' style={{ padding: 10, marginLeft: 10 }}>
                            PRICE DETAILS
                        </p><hr></hr>
                        <div className='d-flex' style={{ justifyContent: 'space-between' }}>
                            <h1 style={{ fontSize: 17, marginLeft: 20, fontWeight: 700 }}>Price ({cartItems} items)</h1>
                            <h1 style={{ fontSize: 17, marginLeft: 20, color: '#3b903f', marginRight: '20px' }}>{total}</h1>
                        </div>

                        <div className='d-flex' style={{ justifyContent: 'space-between', marginTop: '20px' }}>
                            <h1 style={{ fontSize: 17, marginLeft: 20, fontWeight: 700 }}>Delivery Charges</h1>
                            <h1 style={{ fontSize: 17, marginLeft: 20, color: '#3b903f', marginRight: '20px' }}>Free</h1>
                        </div>


                        <hr></hr>
                        <div className='d-flex' style={{ justifyContent: 'space-between', marginTop: '20px' }}>
                            <h1 style={{ fontSize: 17, marginLeft: 20, fontWeight: 700 }}>Total Amount </h1>
                            <h1 style={{ fontSize: 17, marginLeft: 20, color: '#3b903f', marginRight: '20px', fontWeight: 700 }}>{subTotal}</h1>
                        </div>
                        <hr></hr>
                        <div className='d-flex' style={{ justifyContent: 'space-between', marginTop: '20px' }}>
                            <h1 style={{ fontSize: 17, marginLeft: 20, color: '#3b903f', fontWeight: 700 }}>You Will Save 10% off on This Order</h1>
                        </div>

                        <div className='container' style={{ marginTop: 33 }}>
                            <img src="Flipkart/images/fl.png" className='responsive' alt="" />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>


        </>
    )
}
export default Checkout