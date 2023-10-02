import React from 'react'
import "./style.css"

export const Delivery = () => {
    const stl={
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        gap:"50px",
        padding:"50px",
        paddingTop:"100px",
        backgroundColor:"rgb(246, 239, 231)"
    }
  return (
    <div style={stl}>
        <h1 className='text2'>Delivery Process</h1>
        <cards>
            <div className="dcard ">
                <div className="num text2">.1</div>
                <h3 className="text3">Ordering and payment</h3>
                <h4 className="text2">You choose your flowers,place an order and pay for it.</h4>
            </div>
            <div className="dcard">
                <div className="num text2">.2</div>
                <h3 className="text3">Picking a bouquet</h3>
                <h4 className="text2">We collect a bouquet and prepare it for delivery.</h4>
            </div>
            <div className="dcard">
                <div className="num text2">.3</div>
                <h3 className="text3">Delivery of Flowers</h3>
                <h4 className="text2">We deliver your order directly to your home in a short time.</h4>
            </div>
        </cards>
    </div>
  )
}
