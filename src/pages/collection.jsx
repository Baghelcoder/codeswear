import React, { useState } from "react";

import "animate.css/animate.min.css";
import { Header } from "../header/navbar";
import { Link, useNavigate } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import caps from '../collection/caps.webp'
import hoodie from '../collection/hoodie.webp'
import mousepad from '../collection/mousepad.webp'
import mugs from '../collection/mugs.webp'
import over from '../collection/oversizedtshirt.webp'
import polo from '../collection/polotshirts.webp'
import sweatshirt from '../collection/sweatshirt.webp'
import tshirt from '../collection/tshirt.webp'



function Collection() {
    const [progress, setprogress] = useState(0)
    const path=useNavigate()


    const collectionimg = [
        {
            img: `${caps}`,
            url: "/caps"
        },
        {
            img:`${hoodie}`,
            url: "/hoodies"
        },
        {
            img: `${mousepad}`,
            url:"/error"
        },
        {
            img: `${mugs}`,
            url: "/mugs"
        },
        {
            img: `${over}`,
            url:"/error"
        },
        {
            img:`${polo}`,
            url:"/error"
        },
        {
            img:`${sweatshirt}`,
            url:"/error"
        },
        {
            img:`${tshirt}`,
            url:"/error"
        }
    ]
    return (
        <>
            <LoadingBar
                color='rgb(255, 0, 183)'
                progress={progress}
                onLoaderFinished={() => setprogress(0)}
            />

            <div className="collection-box">
                <div className="collection-heading">
                    <h1>collections</h1>
                </div>
                <div className="collection-bx">
                    {
                        collectionimg.map((collectionitem) => {
                            return (
                                <>
                                    <div className="animate__animated animate__fadeInUp">

                                        <div className="imgcollection" >
                                            <img src={collectionitem.img} alt="collection" onClick={() => {
                                                setprogress(progress + 90); setTimeout(() => {
                                                    path(`${collectionitem.url}`)
                                                }, 1000)
                                            }} />
                                        </div>

                                    </div>
                                </>
                            )
                        })
                    }
                </div>

            </div>

        </>
    )
}

export { Collection }