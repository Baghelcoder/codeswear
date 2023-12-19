import React from "react";

import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from "./firebase"
import { Login } from "./pages/login";
import { Facelogin } from "./facelogin/facelogin";
import { Home } from "./pages/home";


function Mainlogin() {
    const [user] = useAuthState(auth)
    return user ? < Home/> : <Login/>
}

export { Mainlogin }