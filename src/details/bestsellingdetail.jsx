import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { bestselling } from "../data/bestsellingdata";
import {Footer} from "../footer/footer.jsx"
import {Header} from "../header/navbar.jsx"
import { useCart } from "react-use-cart";
import ReactImageMagnify from 'react-image-magnify';

function Bestsellingdetail() {
    
    const { bestId } = useParams()
    const {addItem,inCart}=useCart()


    const best = bestselling.find(bestitem => bestitem.id == bestId)
    const [change,setchange]=useState(`${best.image}`)
    const click=(e)=>{
        setchange(e)
    }
    return (
        <>
        <Header/>
            <div className="bestselling-detail">
                <div className="bestselling-img">
                    <div className="bestselling-img2">
                        <img src={best.image} alt="product" onClick={()=>{click(`${best.image}`)}}/>
                        <img src={best.image2} alt="product" onClick={()=>{click(`${best.image2}`)}}/>
                        <img src={best.image3} alt="product" onClick={()=>{click(`${best.image3}`)}}/>
                    </div>
                    <div className="bestselling-img1" style={{ width:"443px"}}>
                        <ReactImageMagnify {...{
                            smallImage: {
                                alt: 'Wristwatch by Ted Baker London',
                                isFluidWidth: true,
                                src: change,
                                height: 400,
                                width: 500
                            },
                            largeImage: {
                                src: change,
                                width: 1200,
                                height: 1800
                            },
                            enlargedImageContainerDimensions:{
                                height:"140%" ,width:"150%"
                            }
                        }} />
                    </div>
                </div>
                <div className="bestselling-product-detail">
                    <div className="bestselling-detail-title">
                        <h3>CodesWear</h3>
                        <div className="bestselling-detail-title-all">
                        <h1>{best.title}</h1>
                        </div>
                    </div>
                    <div className="bestselling-detail-description">
                        <h3>Product Description:</h3>
                        <p>{best.Description}</p>
                    </div>
                    <div className="bestselling-detail-tages">
                        <h3>Tags:</h3>
                        <p>{best.tages}</p>
                    </div>
                    <div className="bestselling-detail-color">
                        <h3>Color: </h3>
                        <h4>{best.color}</h4>
                    </div>
                    <div className="bestselling-detail-underline"></div>
                    <div className="price-cart-buy">
                        <div className="bestselling-detail-price">
                            <h4><i class="fa-solid fa-indian-rupee-sign"></i>{best.oldprice}</h4>
                            <h5><i class="fa-solid fa-indian-rupee-sign"></i>{best.price}<sup>(free shipping)</sup></h5>
                        </div>
                        <div className="pincode">
                            <input type="number" placeholder="enter your pincode" />
                            <button>cheak</button>
                        </div>
                        <div className="cart-buy-btn">
                            <button>buy now</button>
                            <button onClick={()=>{addItem(best)}}>{(inCart(best.id)?<Link to="/cart">Added✅</Link>:"add to cart")}</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export { Bestsellingdetail }