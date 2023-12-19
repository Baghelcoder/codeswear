import React, { useEffect, useState } from "react";
import { useCart } from "react-use-cart";
import { Header } from "../header/navbar.jsx"
import { Footer } from "../footer/footer.jsx"
import { Link, useNavigate } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import ReactLoading from 'react-loading';


function Cart() {
    const { items, isEmpty, updateItemQuantity, removeItem, cartTotal, totalUniqueItems } = useCart()
    const [progress, setprogress] = useState(0)
    const [loading,setloading]=useState(true)
    const path = useNavigate()

    const first=performance.now()
    const second = performance.now()
    const result = second-first

    useEffect(()=>{
        setTimeout(() => {
            setloading(false)
        },result);
    })

    if (isEmpty) {
        return (
            <>
                <h1>your cart is empty...</h1>
            </>
        )
    }
    return (
        <>
            <LoadingBar
                color='rgb(255, 0, 183)'
                progress={progress}
                onLoaderFinished={() => setprogress(0)}
            />
            <Header />
            {
                loading ? <center className="loading" ><ReactLoading type={"bubbles"} color={"rgb(255, 0, 183)"} height={'50%'} width={'15%'}/>
                <h1>loading.....</h1></center>:
                <>
                <div className="cart">
                <div className="cart-heading">
                    <h1>shoping Cart({totalUniqueItems})</h1>
                </div>
                <div className="cart-box">
                    {
                        items.map((item) => {
                            return (
                                <>

                                    <div className="cart-bx">
                                        <div className="cart-bx-img">
                                            <img src={item.image} alt="product" />
                                        </div>
                                        <div className="cart-bx-detail">
                                            <div className="cart-bx-title">
                                                <h1>{item.title}</h1>
                                                <h3><i class="fa-solid fa-indian-rupee-sign"></i>{item.price * item.quantity}</h3>
                                            </div>
                                            <div className="cart-bx-add">
                                                <button onClick={() => { updateItemQuantity(item.id, item.quantity - 1) }}>-</button>
                                                <span>{item.quantity}</span>
                                                <button onClick={() => { updateItemQuantity(item.id, item.quantity + 1) }}>+</button>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="cart-remove">
                                        <button onClick={() => { removeItem(item.id) }}>remove</button>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
                <div className="cart-total-buy">
                    <div className="cart-total">
                        <h2>total price is:</h2>
                        <h3><i class="fa-solid fa-indian-rupee-sign"></i>{cartTotal}</h3>
                    </div>
                    <div className="cart-buy">
                        <h1 onClick={() => {
                            setprogress(progress + 90); setTimeout(() => {
                                path("/customer")
                            }, 1000)
                        }}>buy</h1>
                    </div>
                </div>
            </div>
                </>
            }
        </>
    )
}

export { Cart }