import React, { useState } from "react";
import { Header } from "../header/navbar";
import { Slider } from "../slider/slider";
import { Collection } from "./collection";
import { Themes } from "./themes";
import { Bestselling } from "./bastselling";
import { Service } from "./service";
import { Footer } from "../footer/footer";

function Home(){
    
    return(
        <>
        <Header/>
        <Slider/>
        <Collection/>
        <Themes/>
        <Bestselling/>
        <Service/>
        <Footer/>
        </>
    )
}

export {Home}