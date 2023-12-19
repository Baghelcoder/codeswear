import React, { useEffect, useState } from "react";
import { mugsdata } from "../data/mugsdata";
import { Header } from "../header/navbar";
import { Footer } from "../footer/footer";
import { Link, useNavigate } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import ReactLoading from 'react-loading';

function Mugsproduct(props) {
    const [mugs, setmugs] = useState(mugsdata)
    const [filteritem,setfilteritem]=useState(mugs)
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
            setmugs(mugs)
        }else{
            setmugs(mugs)
        }

        setTimeout(() => {
            setloading(false)
        }, result);
    },[props.inputvalue])

    const search=(e)=>{
        const get=e
        const searchitem=mugs.filter((itm)=>itm.title.toLowerCase().includes(get))
        if (get){
        setfilteritem(searchitem)
        }else{
            setfilteritem(mugs)
        }

    }

    const anime=(e)=>{
        const animeitem=mugs.filter((animeitems)=>animeitems.theme===e)
        setfilteritem(animeitem)
    }
    const coding=(e)=>{
        const codingitem=mugs.filter((codingitems)=>codingitems.theme===e)
        setfilteritem(codingitem)
    }
    const gym=(e)=>{
        const gymitem=mugs.filter((gymitems)=>gymitems.theme===e)
        setfilteritem(gymitem)
    }
    const hacking=(e)=>{
        const hackingitem=mugs.filter((hackingitems)=>hackingitems.theme===e)
        setfilteritem(hackingitem)
    }
    const lifestyle=(e)=>{
        const lifestyleitem=mugs.filter((lifestyleitems)=>lifestyleitems.theme===e)
        setfilteritem(lifestyleitem)
    }
    const music=(e)=>{
        const musicitem=mugs.filter((musicitems)=>musicitems.theme===e)
        setfilteritem(musicitem)
    }
    const white=(e)=>{
        const whiteitem=mugs.filter((whiteitems)=>whiteitems.color===e)
        setfilteritem(whiteitem)
    }
    const black=(e)=>{
        const blackitem=mugs.filter((blackitems)=>blackitems.color===e)
        setfilteritem(blackitem)
    }
    const red=(e)=>{
        const reditem=mugs.filter((reditems)=>reditems.color===e)
        setfilteritem(reditem)
    }
    const price=()=>{
        const priceitem=mugs.filter((priceitems)=>priceitems.price>300)
        setfilteritem(priceitem)
    }

    return (
        <>
            <LoadingBar
                color='rgb(255, 0, 183)'
                progress={progress}
                onLoaderFinished={() => setprogress(0)}
            />
            <Header  send={search}/>
            {
                loading ? <center className="loading" ><ReactLoading type={"bubbles"} color={"rgb(255, 0, 183)"} height={'50%'} width={'15%'}/>
                <h1>loading.....</h1></center>:
                <>
                <div className="mugs">
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
                                <input type="checkbox" onClick={()=>anime("anime")}/>
                                <label for="inline-checkbox">anime</label>
                            </div>
                            <div className="checkbox">
                                <input type="checkbox" onClick={()=>coding("coding")}/>
                                <label for="inline-checkbox">coding</label>
                            </div>
                            <div className="checkbox">
                                <input type="checkbox" />
                                <label for="inline-checkbox">combo</label>
                            </div>
                            <div className="checkbox">
                                <input type="checkbox" onClick={()=>gym("gym")}/>
                                <label for="inline-checkbox">gym</label>
                            </div>
                            <div className="checkbox">
                                <input type="checkbox" onClick={()=>hacking("hacking")}/>
                                <label for="inline-checkbox">hacking</label>
                            </div>
                            <div className="checkbox">
                                <input type="checkbox" onClick={()=>lifestyle("lifestyle")}/>
                                <label for="inline-checkbox">lifestyle</label>
                            </div>
                            <div className="checkbox">
                                <input type="checkbox" onClick={()=>music("music")}/>
                                <label for="inline-checkbox">music</label>
                            </div>
                        </div>
                        <div className="filter-theme">
                            <h2>color</h2>
                            <div className="checkbox">
                                <input type="checkbox" onClick={()=>black("black")}/>
                                <label for="inline-checkbox">black</label>
                            </div>
                            <div className="checkbox">
                                <input type="checkbox" />
                                <label for="inline-checkbox">navyblue</label>
                            </div>
                            <div className="checkbox">
                                <input type="checkbox" onClick={()=>red("red")}/>
                                <label for="inline-checkbox">red</label>
                            </div>
                            <div className="checkbox">
                                <input type="checkbox" onClick={()=>white("white")}/>
                                <label for="inline-checkbox">white</label>
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
                                <input type="checkbox" onClick={()=>price()} />
                                <label for="inline-checkbox">above 300</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mugs-all">
                    <div className="mugs-heading">
                        <h1>Explore Our Mugs Collection</h1>
                        <p>Stay hydrated and show off your personality with the wide selection of mugs available at Codeswear.com. Our mugs are perfect for every interest, including coding mugs for tech enthusiasts, anime mugs, and casual mugs for everyday use. All of our mugs are made with high-quality materials and are designed to be durable and long-lasting. Shop now and find the perfect mug for you!</p>
                    </div>
                    <div className="mugs-products">
                        {
                            filteritem.map((item) => {
                                return (
                                    <>

                                        <div className="mugs-product" onClick={() => {
                                            setprogress(progress + 90); setTimeout(() => {
                                                path(`mugsdetails/${item.id}`)
                                            }, 1000)
                                        }}>
                                            <img src={item.image} alt="product" className="mugsimg1"/>
                                            <img src={item.image2} alt="product" className="mugsimg2"/>
                                            <h6>{item.category}</h6>
                                            <h1>{item.title}</h1>
                                            <div className="price-color">
                                                <div className="color">
                                                    <h4>{item.color}</h4>
                                                </div>
                                                <div className="mugs-price">
                                                    <h4>$449</h4>
                                                    <h5>${item.price}</h5>
                                                </div>
                                            </div>
                                            <div className="mugs-size">
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

export { Mugsproduct }