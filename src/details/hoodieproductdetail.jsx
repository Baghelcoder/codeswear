import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { hoodiesdata } from "../data/hoodiesdata";
import { Header } from "../header/navbar";
import { Bestsellingdetail } from "./bestsellingdetail";
import { Bestselling } from "../pages/bastselling";
import { Footer } from "../footer/footer";
import { useCart } from "react-use-cart";
import ReactImageMagnify from 'react-image-magnify';
import ReactLoading from 'react-loading';

function Hoodieproductdetail() {
    const { hoodieId } = useParams()
    const { addItem, inCart } = useCart()
    const hoodie = hoodiesdata.find(hoodi => hoodi.id == hoodieId)
    const [change, setchange] = useState(`${hoodie.image}`)
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
    return (
        <>
            <Header />
            {
                loading ? <center className="loading" ><ReactLoading type={"bubbles"} color={"rgb(255, 0, 183)"} height={'50%'} width={'15%'}/>
                <h1>loading.....</h1></center>:
                <>
                <div className="details" key={hoodie.id}>
                <div className="product-img">
                    <div className="product-img2">
                        <img src={hoodie.image} onClick={() => { click(`${hoodie.image}`) }} />
                        <img src={hoodie.image2} onClick={() => { click(`${hoodie.image2}`) }} />
                        <img src={hoodie.image3} onClick={() => { click(`${hoodie.image3}`) }} />
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
                            <h1>{hoodie.title}</h1>
                        </div>
                    </div>
                    <div className="detail-description">
                        <h3>Product Description:</h3>
                        <p>{hoodie.Description}</p>
                    </div>
                    <div className="detail-tages">
                        <h3>tages:</h3>
                        <p>{hoodie.tages}</p>
                    </div>
                    <div className="detail-color">
                        <h3>color:</h3>
                        <h4>{hoodie.color}</h4>
                    </div>
                    <div className="detail-underline"></div>
                    <div className="cart-price-buy">
                        <div className="detail-price">
                            <h4><i class="fa-solid fa-indian-rupee-sign"></i>{hoodie.oldprice}</h4>
                            <h5><i class="fa-solid fa-indian-rupee-sign"></i>{hoodie.price}</h5>
                        </div>
                        <div className="pincode">
                            <input type="number" placeholder="enter your pincode" />
                            <button>cheak</button>
                        </div>
                        <div className="cart-buy-btn">
                            <button>buy now</button>
                            <button onClick={() => { addItem(hoodie) }}>{(inCart(hoodie.id) ? <Link to="/cart">Added✅</Link> : "add to cart")}</button>
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
export { Hoodieproductdetail }