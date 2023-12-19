import React from "react";
import anime from '../themes/anime.webp'
import combo from '../themes/combooffers.webp'
import custo from '../themes/customized.webp'
import fitness from '../themes/fitness.webp'
import gaming from '../themes/gaming.webp'
import lifestyle from '../themes/lifestyle.webp'
import programming from '../themes/programming.webp'
import trending from '../themes/trending.webp'


function Themes(){
    return(
        <>
        <div className="themes-heading">
            <h1>themes</h1>
        </div>
        <div className="themes">
            <div className="themes-img">
                <img src={anime} alt="themes-img"/>
            </div>
            <div className="themes-img">
                <img src={combo} alt="themes-img"/>
            </div>
            <div className="themes-img">
                <img src={custo} alt="themes-img"/>
            </div>
            <div className="themes-img">
                <img src={fitness} alt="themes-img"/>
            </div>
            <div className="themes-img">
                <img src={gaming}alt="themes-img"/>
            </div>
            <div className="themes-img">
                <img src={lifestyle} alt="themes-img"/>
            </div>
            <div className="themes-img">
                <img src={programming} alt="themes-img"/>
            </div>
            <div className="themes-img">
                <img src={trending} alt="themes-img"/>
            </div>
            
        </div>
        </>
    )
}

export {Themes}