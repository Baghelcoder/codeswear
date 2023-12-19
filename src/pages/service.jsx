import React from "react";

function Service(){
    const service=[
        {
            logo:<i class="fa-solid fa-shirt"></i>,
            title:"Premium Tshirts",
            details:"Our T-Shirts are 100% made of cotton"
        },
        {
            logo:<i class="fa-solid fa-truck"></i>,
            title:"Free Shipping",
            details:"We ship all over India for FREE"
        },
        {
            logo:<i class="fa-solid fa-indian-rupee-sign"></i>,
            title:"Exciting Offers",
            details:"We provide amazing offers & discounts on our products."
        }
    ]
    return(
        <>
        <div className="service">
            {
                service.map((item)=>{
                    return(
                        <>
                        <div className="service-bx">
                            <h3>{item.logo}</h3>
                            <h5>{item.title}</h5>
                            <p>{item.details}</p>
                        </div>
                        </>
                    )
                })
            }
        </div>
        <div className="scroll-top">
            <a href="/"><i class="fa-solid fa-arrow-up"></i></a>
        </div>
        <div className="whatsapp">
           <a href="https://wa.me/+918385032406"> <h1 ><i class="fa-brands fa-whatsapp"></i></h1></a>
        </div>
        </>
    )
}


export {Service}