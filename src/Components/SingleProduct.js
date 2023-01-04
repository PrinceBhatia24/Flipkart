import React, {useEffect } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import SubCategory from './SubCategory';


function SingleProduct() {
    function UpdateCart() {
        let SingleProduct = localStorage.getItem("SingleProduct");
        let Product = JSON.parse(SingleProduct)
        let table = "";
        Product.map((item) => {

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
        })
        document.getElementById("tbodyy").innerHTML = table


    }
    useEffect(() => {
        UpdateCart();
    })
    return (
        <>
            <Navbar />
            <SubCategory/>
            <div className='mt10' id="tbodyy">

            </div>


            <Footer />

        </>
    )
}

export default SingleProduct
