import React, { useEffect, useState } from "react";
import { Header } from "../header/navbar";
import { useNavigate } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

function Customerdetail() {
    const [progress, setprogress] = useState(0)
    const path = useNavigate()
    const [pincode, setpincode] = useState("")
    const changepicode = (e) => {
        setpincode(e.target.value)
    }
    const [pindata, setpindata] = useState([])
    async function Pincodedata() {
        const response = await fetch(`https://api.postalpincode.in/pincode/${pincode}`)
        const getdata = await response.json();
        setpindata(getdata)
    }
    useEffect(() => {
        Pincodedata()
    }, [pindata])
    return (
        <>
            <LoadingBar
                color='rgb(255, 0, 183)'
                progress={progress}
                onLoaderFinished={() => setprogress(0)}
            />
            <Header />
            <div className="customer-details">
                <div className="customer-details-heading">
                    <h1>checkout</h1>
                </div>
                <div className="customer-detail">
                    <h1>1.details</h1>
                    <div className="input">
                        <label>Country/Region:</label>
                        <select>
                            <option>choose your Country</option>
                            <option>Afghanistan</option>
                            <option>Albania</option>
                            <option>American Samoa</option>
                            <option>Bangladesh</option>
                            <option>Belize</option>
                            <option>Bhutan</option>
                            <option>China</option>
                            <option>Colombia</option>
                            <option>Cuba</option>
                            <option>Dominica</option>
                            <option>Equatorial Guinea</option>
                            <option>France</option>
                            <option>Germany</option>
                            <option>Hungary</option>
                            <option>India</option>
                        </select>
                    </div>

                    <div className="input">
                        <label>name:</label>
                        <input type="text" placeholder="name" />
                    </div>
                    <div className="input">
                        <label>father's name:</label>
                        <input type="text" placeholder="father's name" />
                    </div>
                    <div className="input">
                        <label>mobile no:</label>
                        <input type="number" placeholder="mobile no." />
                    </div>
                </div>
                <div className="customer-address">
                    <h1>2.address</h1>
                    <div className="input">
                        <label>Flat, House no., Building, Company, Apartment:</label>
                        <input type="text" />
                    </div>
                    <div className="input">
                        <label>Landmark:</label>
                        <input type="text" placeholder="E.g. near apollo hospital" />
                    </div>
                    <div className="pincode-reader">
                        <label>pincode:</label>
                        <input type="text" placeholder="pincode" onChange={changepicode} />
                        {
                            pindata.map((item) => {
                                return (
                                    <>
                                        {
                                            item.Status === "Success" ?
                                                <>
                                                    <div className="pincode-output">
                                                        <label>district:</label>
                                                        <input placeholder="district" value={item.PostOffice[0].District} />
                                                        <label>state:</label>
                                                        <input placeholder="state" type="text" value={item.PostOffice[0].State} />
                                                    </div>
                                                </> : "not fonud"
                                        }
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="payment-method">
                <h1>3.payment method</h1>
                <div className="checkbox">
                    <input type="checkbox" />
                    <label>net banking</label>
                </div>
                <div className="checkbox">
                    <input type="checkbox" />
                    <label>phonpay/paytm</label>
                </div>
                <div className="checkbox">
                    <input type="checkbox" />
                    <label>ATM</label>
                </div>
                <div className="checkbox">
                    <input type="checkbox" />
                    <label>cash on delivery </label>
                </div>
            </div>
            <div className="payment">
                <button onClick={() => {
                    setprogress(progress + 90); setTimeout(() => {
                        path("/buy")
                    }, 1000)
                }}>payment</button>
            </div>

        </>
    )
}

export { Customerdetail }