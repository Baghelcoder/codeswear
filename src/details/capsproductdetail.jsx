import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { capesdata } from "../data/capsdata";
import { Header } from "../header/navbar";
import { Footer } from "../footer/footer";
import { Bestselling } from "../pages/bastselling";
import { useCart } from "react-use-cart";
import ReactImageMagnify from 'react-image-magnify';
import ReactLoading from 'react-loading';



function Capsproductdetail() {
    const { itemId } = useParams()
    const [loading,setloading]=useState(true)

    const first=performance.now()
    const second = performance.now()
    const result = second-first

    useEffect(()=>{
        setTimeout(() => {
            setloading(false)
        },result);
    })

    const click = (e) => {
        setchange(e)
    }
    const { addItem, inCart } = useCart()
    const caps = capesdata.find(itm => itm.id == itemId)

    const [change, setchange] = useState(`${caps.image}`)
    return (
        <>
            <Header />
            {
                loading ? <center className="loading" ><ReactLoading type={"bubbles"} color={"rgb(255, 0, 183)"} height={'50%'} width={'15%'}/>
                <h1>loading.....</h1></center>:
                <>
                <div className="details" key={caps.id}>
                <div className="product-img">
                    <div className="product-img2">
                        <img src={caps.image} onClick={() => { click(`${caps.image}`) }} />
                        <img src={caps.image2} onClick={() => { click(`${caps.image2}`) }} />
                        <img style={{ border: caps.border }} src={caps.image3} onClick={() => { click(`${caps.image3}`) }} />
                    </div>
                    <div className="product-img1" style={{ width:"443px"}}>
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
                <div className="product-detail">
                    <div className="detail-title">
                        <h3>CodesWear</h3>
                        <div className="detail-title-all">
                            <h1>{caps.title}</h1>
                        </div>
                    </div>
                    <div className="detail-description">
                        <h3>Product Description:</h3>
                        <p>{caps.Description}</p>
                    </div>
                    <div className="detail-tages">
                        <h3>tages:</h3>
                        <p>{caps.Tages}</p>
                    </div>
                    <div className="detail-color">
                        <h3>color:</h3>
                        <h4>{caps.color}</h4>
                    </div>
                    <div className="detail-underline"></div>
                    <div className="price-cart-buy">
                        <div className="detail-price">
                            <h4><i class="fa-solid fa-indian-rupee-sign"></i>{caps.oldprice}</h4>
                            <h5><i class="fa-solid fa-indian-rupee-sign"></i>{caps.price}<sup>(free shipping)</sup></h5>
                        </div>
                        <div className="pincode">
                            <input type="number" placeholder="enter your pincode" />
                            <button>cheak</button>
                        </div>
                        <div className="cart-buy-btn">
                            <button>buy now</button>
                            <button onClick={() => { addItem(caps)}}>{(inCart(caps.id) ? <Link to="/cart">Added✅</Link> : "add to cart")}</button>
                        </div>
                    </div>
                </div>
            </div>
            <Bestselling />
            <Footer />
                </>
            }
        </>
    )
}

export { Capsproductdetail }