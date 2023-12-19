import React, { useState } from "react";
import { bestselling } from "../data/bestsellingdata";
import { Link, useNavigate } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

function Bestselling() {
    const [best, setbest] = useState(bestselling)
    const [imgchange, setimgchange] = useState(false)
    const [progress, setprogress] = useState(0)
    const path = useNavigate()

    const handleMouseEnter = () => {
        setimgchange(true)
    }
    const handleMouseleave = () => {
        setimgchange(false)
    }

    return (
        <>
            <LoadingBar
                color='rgb(255, 0, 183)'
                progress={progress}
                onLoaderFinished={() => setprogress(0)}
            />
            <div className="bestselling">
                <div className="bestselling-heading">
                    <h1>bestselling products</h1>
                    <div className="bestselling-underline"></div>
                </div>
                <div className="bestselling-box">
                    {
                        best.map((item) => {
                            return (
                                <>

                                    <div className="bestselling-bx" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseleave} onClick={() => {
                                        setprogress(progress + 90); setTimeout(() => {
                                            path(`bestsellingdetail/${item.id}`)
                                        }, 500)
                                    }}>
                                        <img src={item.image} alt="product" className="bestimg1"/>
                                        <img src={item.image2} alt="product" className="bestimg2"/>
                                        <h4>{item.category}</h4>
                                        <h1>{item.title}</h1>
                                        <div className="price">
                                            <h5>${item.oldprice}</h5>
                                            <h3>${item.price}</h3>
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

export { Bestselling }