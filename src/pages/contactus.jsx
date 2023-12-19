import React, { useEffect, useState } from "react";
import { Header } from "../header/navbar";
import { Footer } from "../footer/footer";
import logo from '../codeswearcircle.png'
import ReactLoading from 'react-loading';

function Contactus(){
    const [loading ,setloading]=useState(true)

    const first=performance.now()
    const second = performance.now()
    const result = second-first

    useEffect(()=>{
        setTimeout(() => {
            setloading(false)
        }, result);
    })
    return(
        <>
        <Header/>
        {
            loading ? <center className="loading" ><ReactLoading type={"bubbles"} color={"rgb(255, 0, 183)"} height={'50%'} width={'15%'}/>
            <h1>loading.....</h1></center>:
            <>
            <div className="contactus">
            <div className="contact-title-img">
                <h1>Lets talk about everything!</h1>
                <img src={`${logo}`} alt="logo"/>
                <h2>Feel free to ask us anything!</h2>
                <p>If you have any questions regarding your order, feel free to send email, call or Whatsapp us on our support number</p>
            </div>
            <div className="address-contact">
                <div className="address">
                    <h2>Corporate Address</h2>
                    <ul>
                        <li>CWH Solutions</li>
                        <li>94, Ghair Saifuddin Domehla Road,</li>
                        <li>Rampur, Uttar Pradesh, 244901</li>
                    </ul>
                </div>
                <div className="contact">
                    <h2>Customer Support</h2>
                    <ul>
                        <li>Call/Whatsapp: +918385032406</li>
                        <li>Email: yogeshbaghel1072002@gmail.com</li>
                        <li>Morning: 10AM - 6PM</li>
                    </ul>
                </div>
            </div>
        </div>
        <Footer/>
            </>
        }
        </>
    )
}

export {Contactus}