import React, { useEffect, useState } from "react";
import "animate.css/animate.min.css";
import { Header } from "../header/navbar";
import { Link } from "react-router-dom";
import { Footer } from "../footer/footer";
import ReactLoading from 'react-loading';

function Aboutus() {
    const [loading, setloading] = useState(true)

    const first=performance.now()
    const second = performance.now()
    const result = second-first

   useEffect(()=>{
    setTimeout(() => {
        setloading(false)
    }, result);
   })

    return (
        <>
        <Header />
            {
                loading ? <center className="loading"><ReactLoading type={"bubbles"} color={"rgb(255, 0, 183)"} height={'50%'} width={'15%'}/></center> :
                <>
            <div className="codewear">
                <div className="animate__animated animate__fadeInRightBig">
                    <img src="yogesh.jpeg" alt="logo" />
                </div>
                <div className="animate__animated animate__tada">
                    <h1>Welcome to Codeswear.com</h1>
                </div>
                <div className="about-title-all">
                    <h5>buy</h5>
                    <h4>caps</h4>
                </div>
                <p>Introducing CodesWear, a revolutionary e-commerce platform that delivers amazing products at unbeatable prices. Built on a foundation of NextJs and MongoDB, our website offers a seamless shopping experience powered by server-side rendering. Whether you're a tech enthusiast or simply looking for a stylish geek T-shirt, CodesWear has something for everyone. And for those curious about the development process, be sure to check out the CodeWithHarry NextJs playlist on YouTube. Shop now at CodesWear and experience the future of online shopping.</p>
                <Link to="/caps"><button>start shopping</button></Link>
            </div>
            <div className="about-underline"></div>
            <div className="about-codeswear">
                <div className="about-codeswear-text">
                    <h2>about codswear</h2>
                    <p>Codeswear.com is revolutionizing the way India shops for unique, geeky apparel. From our one-of-a-kind hoodie designs to our wide selection of stickers, mugs and other accessories, we have everything you need to express your individuality and stand out from the crowd. Say goodbye to the hassle of hopping from store to store in search of your perfect geeky look. With just a single click on our website, you can find it all!</p>
                    <p>But what sets Codeswear apart from the competition? The answer is simple: our unique designs and commitment to providing the highest quality products. We understand the importance of style and durability, which is why we put so much effort into creating unique designs and using only the best materials. Don't settle for mediocre clothing and accessories - choose Codeswear and make a statement with your wardrobe.</p>
                    <p>At Codeswear, we strive to be more than just an online store - we want to be a community where like-minded individuals can come together and express themselves through fashion. Whether you're a gamer, a programmer, or simply someone who loves all things geeky, we have something for you. Our collection is curated with the latest trends and fan favorites in mind, ensuring that you'll always find something new and exciting.</p>
                    <p>We also understand the importance of affordability and convenience. That's why we offer competitive prices and fast shipping, so you can get your hands on your new geeky apparel as soon as possible. Plus, with our easy-to-use website and secure checkout process, shopping with us is a breeze.</p>
                    <p>So why wait? Visit Codeswear.com today and discover the latest in geeky fashion. With our unique designs and high-quality products, we're sure you'll find something you'll love. Join our community and express your individuality through fashion.</p>
                </div>
                <div className="about-codeswear-img">
                    <img src="order.jpg" alt="img" />
                </div>
            </div>
            <div className="testimonial">
                <div className="testimonial-heading">
                    <h1>Testimonials</h1>
                </div>
                <div className="testimonial-box">
                    <div className="testimonial-bx">
                        <h3><i class="fa-solid fa-quote-right"></i></h3>
                        <p>I recently discovered this site and I am so impressed with the quality and selection of hoodies and sweatshirts they offer. Not only are the prices incredibly affordable, but the quality of the clothing is top-notch. I have received many compliments on the items I've purchased and have been asked where I got them. The customer service is also excellent - they were very helpful with a question I had. I highly recommend this site to anyone looking for high-quality clothing at unbeatable prices.</p>
                        <div className="customer">
                            <h2>yogesh kumar</h2>
                            <h4>customer</h4>
                        </div>
                    </div>
                    <div className="testimonial-bx">
                        <h3><i class="fa-solid fa-quote-right"></i></h3>
                        <p>I recently purchased a hoodie and t-shirt from this online ecommerce site and I couldn't be happier with my purchase! The quality of the clothing is top-notch and the designs are unique and stylish. The ordering process was easy and the shipping was fast. I also appreciate the wide variety of sizes available. I highly recommend this site to anyone looking for high-quality, fashionable clothing at a great price.</p>
                        <div className="customer">
                            <h2>deepak meena</h2>
                            <h4>customer</h4>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
            </>
            }

        </>
    )
}

export { Aboutus }