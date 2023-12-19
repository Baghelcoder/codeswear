import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../logo.png"
import { Cart } from "../pages/cart";
import LoadingBar from 'react-top-loading-bar'
import { useCart } from "react-use-cart";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Header(props) {

    const first =performance.now()
    const [user] = useAuthState(auth)
    const { totalUniqueItems } = useCart()
    const [progress, setprogress] = useState(0)
    const path = useNavigate()
    const search=(e)=>{
        props.send(e.target.value)
    }
    const logout = () => {
        auth.signOut()
    }

    const menudata = [
        {
            id: 1,
            name: "hoodies",
            path: "/hoodies"
        },
        {
            id: 2,
            name: "sweatshirts",
            path:"/error"
        },
        {
            id: 3,
            name: "mugs",
            path: "/mugs"
        },
        {
            id: 4,
            name: "zipper hoodies",
            path:"/error"
        },
        {
            id: 5,
            name: "mousepads",
            path:"/error"
        },
        {
            id: 6,
            name: "caps",
            path: "/caps"
        }
    ]

    const second = performance.now()
    const result = second-first

    return (
        <>
            <LoadingBar
                color='rgb(255, 0, 183)'
                progress={progress}
                onLoaderFinished={() => setprogress(0)}
            />
            <div className="header">
                <div className="navbar1">
                    <div className="logo">
                        <img src={`${logo}`} alt="logo" onClick={() => {
                            setprogress(progress + 90); setTimeout(() => {
                                path("/")
                            }, 500)
                        }} />
                    </div>
                    <div className="search">
                        <input type="text" placeholder="search from our 1000+ designs"  onChange={search}/>
                        <button><i class="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                </div>
                <div className="navbar2">
                    <div className="dropdown-contaner">
                        <h1 className="dropdown-button" >tshirts</h1>
                        <ul className="droplist">
                           <Link to='/error'> <li>T-shirts</li></Link>
                           <Link to='/error'> <li>polo Tshirts</li></Link>
                            <Link to='/error'><li>oversized Tshirts</li></Link>
                        </ul>

                    </div>
                    <div className="menu">
                        <ul>
                            {
                                menudata.map((menuitem) => {
                                    return (
                                        <>

                                            <li onClick={() => {
                                                setprogress(progress + 90);
                                            }}><NavLink to={menuitem.path} activeClassName="active">{menuitem.name}</NavLink></li>

                                        </>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="carticon">
                        <h3 onClick={() => {
                            setprogress(progress + 90); setTimeout(() => {
                                path("/cart")
                            }, 500)
                        }}><i class="fa-solid fa-cart-shopping"></i></h3><sup>{totalUniqueItems}</sup>

                    </div>
                    <div className="loginbtn">
                        <button onClick={() => {
                            setprogress(progress + 90);
                            logout()
                        }}>{user ? <Link to="/">Logout</Link> : <Link to="/">Login</Link>}</button>
                    </div>
                    <div className="darkmode">
                        <h3><i class="fa-solid fa-moon"></i></h3>
                    </div>
                </div>
            </div >
        </>
    )
}

export { Header }