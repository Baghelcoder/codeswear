import React from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import { Auth } from "firebase/auth";
import { Emaillogin } from "./emaillogin";
import { auth } from "../firebase";
import { Facelogin } from "../facelogin/facelogin";
import { Home } from "../pages/home";


function Emailmain() {
    const [user] = useAuthState(auth)
    return user ? <Home/> : < Emaillogin/>
}


export { Emailmain }