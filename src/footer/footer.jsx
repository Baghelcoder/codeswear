import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png"
import pay from "../pay.png"


function Footer(){
    const shop=[
        {
            name:"T-shirt"
        },
        {
            name:"sweatshirts"
        },
        {
            name:"hoodies"
        },
        {
            name:"zipper hoodies"
        },
        {
            name:"mugs"
        },
        {
            name:"caps",
            path:"/caps"
        }
    ]

    const customer=[
        {
            name:"contact us",
            url:"/contact"
        },
        {
            name:"about us",
            url:"/about"
        },
        {
            name:"return policy",
            url:"/returnpolicy"
        }
    ]

    const policy=[
        {
            name:"privacy policy"
        },
        {
            name:"terms and conditions"
        }
    ]

    return(
        <>
        <div className="footer">
            <div className="logo">
                <img src={`${logo}`} alt="logo"/>
                <p>Wear the code Premium coding tshirts, hoodies and apparals</p>
            </div>
            <div className="footer-bx">
                <h1>shop</h1>
                <ul>
                {
                    shop.map((item)=>{
                        return(
                            <>
                           <Link to={item.path}> <li>{item.name}</li></Link>
                            </>
                        )       
                    })
                }
                </ul>
            </div>
            <div className="footer-bx">
                <h1>customer service</h1>
                <ul>
                    {
                        customer.map((item)=>{
                            return(
                                <>
                                <Link to={item.url}><li>{item.name}</li></Link>
                                </>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="footer-bx">
                <h1>policy</h1>
                <ul>
                    {
                        policy.map((item)=>{
                            return(
                                <>
                                <li>{item.name}</li>
                                </>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="pay">
                <img src={`${pay}`} alt="pay"/>
            </div>
        </div>
        </>
    )
}

export {Footer}