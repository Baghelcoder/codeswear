import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { mugsdata } from "../data/mugsdata";
import { Header } from "../header/navbar";
import { Bestselling } from "../pages/bastselling";
import { Footer } from "../footer/footer";
import { useCart } from "react-use-cart";
import ReactImageMagnify from 'react-image-magnify';
import ReactLoading from 'react-loading';


function Mugsproductdetail() {
    const { mugId } = useParams()
    const { addItem, inCart } = useCart()
    const [loading,setloading]=useState(true)
    const mugs = mugsdata.find(itm => itm.id == mugId)
    
    const [change, setchange] = useState(`${mugs.image}`)
    const click = (e) => {
        setchange(e)
    }

    const first=performance.now()
    const second = performance.now()
    const result = second-first

    useEffect(()=>{
        setTimeout(() => {
            setloading(false)
        },result);
    })
    return (
        <>
            <Header />
           {
            loading ? <center className="loading" ><ReactLoading type={"bubbles"} color={"rgb(255, 0, 183)"} height={'50%'} width={'15%'}/>
            <h1>loading.....</h1></center>:
            <>
             <div className="details" key={mugs.id}>
                <div className="product-img">
                    <div className="product-img2">
                        <img src={mugs.image} onClick={() => { click(`${mugs.image}`) }} />
                        <img src={mugs.image2} onClick={() => { click(`${mugs.image2}`) }} />
                        <img src={mugs.image3} onClick={() => { click(`${mugs.image3}`) }} />
                    </div>
                    <div className="product-img1" style={{ width: "443px" }}>
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
                            enlargedImageContainerDimensions: {
                                height: "140%", width: "150%"
                            }
                        }} />
                    </div>
                </div>
                <div className="product-detail">
                    <div className="detail-title">
                        <h3>CodesWear</h3>
                        <div className="detail-title-all">
                            <h1>{mugs.title}</h1>
                        </div>
                    </div>
                    <div className="detail-description">
                        <h3>Product Description:</h3>
                        <p>{mugs.Description}</p>
                    </div>

                    <div className="detail-color">
                        <h3>color:</h3>
                        <h4>{mugs.color}</h4>
                    </div>
                    <div className="detail-underline"></div>
                    <div className="price-cart-buy">
                        <div className="detail-price">
                            <h4><i class="fa-solid fa-indian-rupee-sign"></i>{mugs.oldprice}</h4>
                            <h5><i class="fa-solid fa-indian-rupee-sign"></i>{mugs.price}<sup>(free shipping)</sup></h5>
                        </div>
                        <div className="pincode">
                            <input type="number" placeholder="enter your pincode" />
                            <button>cheak</button>
                        </div>
                        <div className="cart-buy-btn">
                            <button>buy now</button>
                            <button onClick={() => { addItem(mugs); }}>{(inCart(mugs.id) ? <Link to="/cart">Added✅</Link> : "add to cart")}</button>
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

export { Mugsproductdetail }