import React, { useEffect, useState } from "react";
import { capesdata } from "../data/capsdata";
import { Footer } from "../footer/footer";
import { Header } from "../header/navbar";
import { Link, useNavigate } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import ReactLoading from 'react-loading';

function Caps(props) {
    const [capsproduct, setcapsproduct] = useState(capesdata)
    const [filteritem, setfilteritem] = useState([...capsproduct])
    const [progress, setprogress] = useState(0)
    const [loading,setloading]=useState(true)
    const path = useNavigate()

    const first=performance.now()
    const second = performance.now()
    const result = second-first


    useEffect(()=>{
        if (props.inputvalue !== " "){
            search(props.inputvalue)
        }else if(props.inputvalue ===0){
            setcapsproduct(capsproduct)
        }else{
            setcapsproduct(capsproduct)
        }

        setTimeout(() => {
            setloading(false)
        }, result);
    },[props.inputvalue])

    const search=(e)=>{
        const get=e
        const searchitem=capsproduct.filter((itm)=>itm.title.toLowerCase().includes(get))
        if (get){
        setfilteritem(searchitem)
        }else{
            setfilteritem(capsproduct)
        }

    }

   

    const white = (e) => {
    
        const whiteitem = capsproduct.filter((whiteitems) => whiteitems.color === e)
        setfilteritem(whiteitem)

    }
    const price = () => {
        const priceitem = capsproduct.filter((priceitems) => priceitems.price > 300)
        setfilteritem(priceitem)
    }
    const anime = (e) => {
        const animeitem = capsproduct.filter((animeitems) => animeitems.theme === e)
        setfilteritem(animeitem)
    }
    const coding = (e) => {
        const codingitem = capsproduct.filter((codingitems) => codingitems.theme === e)
        setfilteritem(codingitem)
    }
    const combo = (e) => {
        const comboitem = capsproduct.filter((comboitems) => comboitems.theme === e)
        setfilteritem(comboitem)
    }
    const hacking = (e) => {
        const hackingitem = capsproduct.filter((hackingitems) => hackingitems.theme === e)
        setfilteritem(hackingitem)
    }
    const lifestyle = (e) => {
        const lifestyleitem = capsproduct.filter((lifestyleitems) => lifestyleitems.theme === e)
        setfilteritem(lifestyleitem)
    }

    if (filteritem === false) {
        return setfilteritem(capsproduct)
    }
    return (
        <>
           
            
             <LoadingBar
                color='rgb(255, 0, 183)'
                progress={progress}
                onLoaderFinished={() => setprogress(0)}
            />
            <Header send={search}/>
            {
            loading ? <center className="loading" ><ReactLoading type={"bubbles"} color={"rgb(255, 0, 183)"} height={'50%'} width={'15%'}/>
            <h1>loading.....</h1></center>:
            <>
            <div className="caps">
                <div className="filter">
                    <div className="filter-heading">
                        <h1>filters</h1>
                        <h2><i class="fa-solid fa-filter"></i></h2>
                    </div>
                    <div className="filter-underline"></div>
                    <div className="filter-type">
                        <div className="filter-theme">
                            <h2>theme</h2>
                            <div className="checkbox">
                                <input type="checkbox" onClick={() => anime("anime")} />
                                <label for="inline-checkbox">anime</label>
                            </div>
                            <div className="checkbox">
                                <input type="checkbox" onClick={() => coding("coding")} />
                                <label for="inline-checkbox">coding</label>
                            </div>
                            <div className="checkbox">
                                <input type="checkbox" onClick={() => combo("combo")} />
                                <label for="inline-checkbox">combo</label>
                            </div>
                            <div className="checkbox">
                                <input type="checkbox" />
                                <label for="inline-checkbox">gym</label>
                            </div>
                            <div className="checkbox">
                                <input type="checkbox" onClick={() => hacking("hacking")} />
                                <label for="inline-checkbox">hacking</label>
                            </div>
                            <div className="checkbox">
                                <input type="checkbox" onClick={() => lifestyle("lifestyle")} />
                                <label for="inline-checkbox">lifestyle</label>
                            </div>
                            <div className="checkbox">
                                <input type="checkbox" />
                                <label for="inline-checkbox">music</label>
                            </div>
                        </div>
                        <div className="filter-theme">
                            <h2>color</h2>
                            <div className="checkbox">
                                <input type="checkbox" />
                                <label for="inline-checkbox">black</label>
                            </div>
                            <div className="checkbox">
                                <input type="checkbox" />
                                <label for="inline-checkbox">navyblue</label>
                            </div>
                            <div className="checkbox">
                                <input type="checkbox" />
                                <label for="inline-checkbox">red</label>
                            </div>
                            <div className="checkbox">
                                <input type="checkbox" onClick={() => white("white")} />
                                <label for="inline-checkbox" >white</label>
                            </div>
                        </div>
                        <div className="filter-theme">
                            <h2>size</h2>
                            <div className="checkbox">
                                <input type="checkbox" />
                                <label for="inline-checkbox">L</label>
                            </div>
                        </div>
                        <div className="filter-theme">
                            <h2>price</h2>
                            <div className="checkbox">
                                <input type="checkbox" onClick={() => price()} />
                                <label for="inline-checkbox">above300</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="caps-all">
                    <div className="caps-product-heading">
                        <h1>Explore Our Caps Collection</h1>
                        <p>Stay cool and stylish with the wide selection of caps available at Codeswear.com. Our caps are perfect for every occasion, whether you're looking for a casual everyday cap or something to wear to the gym. We have a variety of styles to choose from, including coding caps, anime caps, and casual caps for everyday wear. All of our caps are made with high-quality materials and are designed to be comfortable and durable. Shop now and find the perfect cap for you!</p>
                    </div>
                    <div className="caps-products">
                        {
                            filteritem.map((item) => {
                                return (
                                    <>

                                        <div className="caps-product" key={item.id} onClick={() => {
                                            setprogress(progress + 90); setTimeout(() => {
                                                path(`capsdetails/${item.id}`)
                                            }, 1000)
                                        }}>
                                            <img src={item.image} alt="product" className="capimg1" />
                                            <img src={item.image2} alt="product" className="capimg2" />
                                            <h6>{item.Category}</h6>
                                            <h1>{item.title}</h1>
                                            <div className="price-color">
                                                <div className="color">
                                                    <h4>{item.color}</h4>
                                                </div>
                                                <div className="caps-price">
                                                    <h4>$449</h4>
                                                    <h5>${item.price}</h5>
                                                </div>
                                            </div>
                                            <div className="size">
                                                <h6>{item.size}</h6>
                                            </div>
                                        </div>

                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <Footer />
            </>
           }
        </>
    )
}

export { Caps }