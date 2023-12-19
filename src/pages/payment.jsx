import React from "react";
import { useCart } from "react-use-cart";
import { QRCode } from "react-qrcode-logo"
import qr from "../barcode.jpeg"

function Buy() {
    const { cartTotal } = useCart()

    return (
        <>
            <div className="qrcode">
                <QRCode value={`upi://pay?pa=8385032406@paytm&pn=Intellemo&tn=cftrhwetaw4gta&am=${cartTotal}`} />
                <img src={`${qr}`} alt="qrcode" />
            </div>
        </>
    )
}

export { Buy }