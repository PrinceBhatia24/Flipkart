import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

function Cart() {

    const [total, setTotal] = useState(0);
    const [cartItems , setCartItems] = useState(0)
    const [cart , setCart] = useState([])
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
     <ul >
     <li><div class="card border-0 mb-3" style="max-width: 540px;">
     <div class="row g-0">
       <div class="col-md-4">
       <img 
       src="Flipkart/images/${item.ProductImage}"
       class="img-fluid rounded-start p2 responsive" alt="cd"></img>
       </div>
       <div class="col-md-8">
         <div class="card-body">
           <h5 class="card-title">${item.ProductName}</h5>
           <p class="card-text">₹${item.ProductPrice}</p>
           <p class="card-text"><small class="text-muted">Quantity:${item.ProductQuantity}</p>
           <p class="card-text"><small class="text-muted">Seller:XONIGHT E-Commerce</small></p>
           <button
           class="btn btn-danger btn-sm"
          
           onClick="()=>DeleteItem"
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
        <div style={{ backgroundColor: '#f1f3f6' }} >
            <Navbar />
            
            <div className='container mt5 d-flex'  >
                {/* <div style={{ border: '2px solid #e5e6e9 ', backgroundColor: 'white', width: '100vw' ,overflow: 'hidden', overflowY: 'scroll', height: 660 }} >
                    <div style={{marginRight:20 , textAlign:'end'}}>
                    Delivery by Sun  | Free₹40
                    </div>
                    <div id="tbodyy">
                    </div>
                    <div className='mx-4' style={{float:'right' }}>
                    <NavLink className='btn' to="/Checkout" style={{backgroundColor:'#fb641b' , fontSize:20 , color:'white'}}> PLACE ORDER</NavLink>
                    </div>
                </div> */}
                   <div style={{ border: '2px solid #e5e6e9', marginLeft: 20, height: '84vh', backgroundColor: 'white', float: 'left', width: '100vw',  height: 619 }} >
                   <div style={{marginRight:20 , textAlign:'end'}}>
                    Delivery by Sun  | Free₹4̶0̶
                    </div>
          <div className=' mt-1' style={{  justifyContent: 'space-between', paddingTop:10 ,  overflow: 'hidden', overflowY: 'scroll', height: 500   }}>
         
              <div className='d-flex'  style={{  justifyContent: 'space-between'}}>
                
              <div id="tbodyy">
                    </div>
              </div>
             </div>
             <hr></hr>
             <div className='mx-4' style={{float:'right' }}>
                    <NavLink className='btn' to="/Checkout" style={{backgroundColor:'#fb641b' , fontSize:20 , color:'white'}}> Continue</NavLink>
                    </div>
             
             
          </div>
                
                <div style={{ border: '2px solid #e5e6e9', height: '52vh', marginRight: 0, marginLeft: 0, backgroundColor: 'white', width: '49vw' }}>
            <p className='CHP' style={{ padding: 10, marginLeft: 10 }}>
              PRICE DETAILS
            </p><hr></hr>
            <div className='d-flex' style={{ justifyContent: 'space-between' }}>
              <h1 style={{ fontSize: 17, marginLeft: 20, fontWeight: 700 }}>Price ({cartItems} items)</h1>
              <h1 style={{ fontSize: 17, marginLeft: 20, color: '#3b903f', marginRight: '20px' }}>{total}</h1>
            </div>
            <div className='d-flex' style={{ justifyContent: 'space-between', marginTop: '20px' }}>
              <h1 style={{ fontSize: 17, marginLeft: 20, fontWeight: 700 }}>Discount</h1>
              <h1 style={{ fontSize: 17, marginLeft: 20, color: '#3b903f', marginRight: '20px' }}>10%</h1>
            </div>
            <div className='d-flex' style={{ justifyContent: 'space-between', marginTop: '20px' }}>
              <h1 style={{ fontSize: 17, marginLeft: 20, fontWeight: 700 }}>Delivery Charges</h1>
              <h1 style={{ fontSize: 17, marginLeft: 20, color: '#3b903f', marginRight: '20px' }}>Free</h1>
            </div>
            <div className='d-flex' style={{ justifyContent: 'space-between', marginTop: '20px' }}>
              <h1 style={{ fontSize: 17, marginLeft: 20, fontWeight: 700 }}>Packaging Fee</h1>
              <h1 style={{ fontSize: 17, marginLeft: 20, color: '#3b903f', marginRight: '20px' }}>₹49</h1>
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
    )
}
export default Cart

