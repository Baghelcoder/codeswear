import React, { useEffect, useState } from "react";
import { hoodiesdata } from "../data/hoodiesdata";
import { Header } from "../header/navbar";
import { Footer } from "../footer/footer";
import { Link, matchRoutes, useNavigate } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import ReactLoading from 'react-loading';


function Hoodies(props) {
    const [hoodies, sethoodies] = useState(hoodiesdata)
    const [filteritem,setfilteritem]=useState(hoodies)
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
            sethoodies(hoodies)
        }else{
            sethoodies(hoodies)
        }

        setTimeout(() => {
            setloading(false)
        }, result);
    },[props.inputvalue])

    const search=(e)=>{
        const get=e
        const searchitem=hoodies.filter((itm)=>itm.title.toLowerCase().includes(get))
        if (get){
        setfilteritem(searchitem)
        }else{
            setfilteritem(hoodies)
        }

    }


    const anime=(e)=>{
        const animeitem=hoodies.filter((animeitems)=>animeitems.theme===e)
        setfilteritem(animeitem)
    }
    const coding=(e)=>{
        const codingitem=hoodies.filter((codingitems)=>codingitems.theme===e)
        setfilteritem(codingitem)
    }
    const combo=(e)=>{
        const comboitem=hoodies.filter((comboitems)=>comboitems.theme)
        setfilteritem(comboitem)
    }
    const gym=(e)=>{
        const gymitem=hoodies.filter((gymitems)=>gymitems.theme===e)
        setfilteritem(gymitem)
    }
    const hacking=(e)=>{
        const hackingitem=hoodies.filter((hackingitems)=>hackingitems.theme===e)
        setfilteritem(hackingitem)
    }
    const lifestyle=(e)=>{
        const lifestyleitem=hoodies.filter((lifestyleitems)=>lifestyleitems.theme===e)
        setfilteritem(lifestyleitem)
    }
    const music=(e)=>{
        const musicitem=hoodies.filter((musicitems)=>musicitems.theme===e)
        setfilteritem(musicitem)
    }
    const black=(e)=>{
        const blackitem=hoodies.filter((blackitems)=>blackitems.color===e)
        setfilteritem(blackitem)
    }
    const white=(e)=>{
        const whiteitem=hoodies.filter((whiteitems)=>whiteitems.color===e)
        setfilteritem(whiteitem)
    }
    const navyblue=(e)=>{
        const navyblueitem=hoodies.filter((navyblues)=>navyblues.color===e)
        setfilteritem(navyblueitem)
    }
    const pink=(e)=>{
        const pinkitem=hoodies.filter((pinkitems)=>pinkitems.color===e)
        setfilteritem(pinkitem)
    }
    const maroon=(e)=>{
        const maroonitem=hoodies.filter((maroonitems)=>maroonitems.theme===e)
        setfilteritem(maroonitem)
    }
    const Bottlegreen=(e)=>{
        const Bottlegreenitem=hoodies.filter((Bottlegreenitems)=>Bottlegreenitems.color===e)
        setfilteritem(Bottlegreenitem)
    }
    const price=()=>{
        const priceitem=hoodies.filter((priceitems)=>priceitems.price>800)
        setfilteritem(priceitem)
    }
    return (
        <>
            <LoadingBar
                color='rgb(255, 0, 183)'
                progress={progress}
                onLoaderFinished={() => setprogress(0)}
            />
            <Header send={search} />
            {
                loading ? <center className="loading" ><ReactLoading type={"bubbles"} color={"rgb(255, 0, 183)"} height={'50%'} width={'15%'}/>
                <h1>loading.....</h1></center> :
                <>
                <div className="hoodies">
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
                                <input type="checkbox" onClick={()=>combo("combo")}/>
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
                                <input type="checkbox" onClick={()=>navyblue("navyblue")}/>
                                <label for="inline-checkbox">navyblue</label>
                            </div>
                            <div className="checkbox">
                                <input type="checkbox" onClick={()=>maroon("maroon")}/>
                                <label for="inline-checkbox">maroon</label>
                            </div>
                            <div className="checkbox">
                                <input type="checkbox" onClick={()=>white("white")}/>
                                <label for="inline-checkbox">white</label>
                            </div>
                            <div className="checkbox">
                                <input type="checkbox" onClick={()=>pink("pink")}/>
                                <label for="inline-checkbox">pink</label>
                            </div>
                            <div className="checkbox">
                                <input type="checkbox" onClick={()=>Bottlegreen("bottlegreen")}/>
                                <label for="inline-checkbox">Bottlegreen</label>
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
                                <input type="checkbox" onClick={()=>price()}/>
                                <label for="inline-checkbox">above800</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hoodies-all">
                    <div className="hoodies-heading">
                        <h1>Explore Our Hoodies Collection</h1>
                        <p>Stay warm and stylish with the wide selection of hoodies available at Codeswear.com. Our hoodies are perfect for every occasion, whether you're looking for a casual everyday hoodie or something to wear to the gym. We have a variety of styles to choose from, including coding hoodies, anime hoodies, and casual hoodies for everyday wear. All of our hoodies are made with high-quality materials and are designed to be comfortable and durable. Shop now and find the perfect hoodie for you!</p>
                    </div>
                    <div className="hoodies-products">
                        {
                            filteritem.map((item) => {
                                return (
                                    <>

                                        <div className="hoodies-product" onClick={() => {
                                            setprogress(progress + 90); setTimeout(() => {
                                                path(`hoodiesdetails/${item.id}`)
                                            }, 1000)
                                        }}>
                                            <img src={item.image} alt="product" className="hoodieimg1"/>
                                            <img src={item.image2} alt="product" className="hoodieimg2"/>
                                            <h6>{item.category}</h6>
                                            <h1>{item.title}</h1>
                                            <div className="price-color">
                                                <div className="color">
                                                    <h4>{item.color}</h4>
                                                </div>
                                                <div className="hoodies-price">
                                                    <h4>$599</h4>
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


export { Hoodies }