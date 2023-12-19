// import React, { useEffect } from "react";
// import faceIO from '@faceio/fiojs'
// import { useNavigate } from "react-router-dom";
// import face from '../face.jpg'


// function Facelogin(){
//     let faceio;
//     useEffect(()=>{
//         faceio=new faceIO("fioaca76")
//     })
//     const nav=useNavigate()
    
//     const register=async()=>{
//         try{
//             let facedata=await faceio.enroll({
//                 locale:"auto",
//                 payload:{
//                     email:"yogeshbaghel1072002@gmail.com",
//                     pin:1234
//                 }
//             })
//             console.log(facedata.detaill.age)
//         }catch(e){
//             console.log(e)
//         }

//     }
//     const login=async()=>{
//         try{
//             let facedata=await faceio.authenticate({
//                 locale:"auto",
//             })
//             nav("/home")
//         }catch(error){
//             console.log(error)
//         }
//     }
//     return(
//         <>
//         <div className="face-login">
//             <center>
//                 <div className="face-head">
//                 <h1>face recognition</h1>
//                 </div>
//                 <div className="face-img">
//                     <img src={`${face}`} alt="face"/>
//                 </div>
//                 <div className="face-btn">
//                     <button onClick={register}>register</button>
//                     <button onClick={login}>login</button>
//                 </div>
//             </center>
//         </div>
//         </>
//     )
// }

// export {Facelogin}