import React from 'react'
import "./style.css"
export const AboutUs = () => {
    const container={
        display:"flex",
        backgroundColor: "rgb(246, 239, 231)",
        gap:"10vw"
    }
    const imge ={
        width:"35vw",
        borderTopRightRadius:"17.5vw",
        borderTopLeftRadius:"17.5vw",
        paddingLeft:"5vw"
    }
    const textField={
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        paddingRight:"10vw"
    }
  return (
    <div className="text2" style={container}>
        <img style={imge} src="https://th.bing.com/th/id/OIP.OcPuPltDWL6_70Cb-0kozgHaHa?pid=ImgDet&w=1668&h=1668&rs=1" alt='flower' />
        <div style={textField}>
            <h1>About Us</h1>
            <hr/>
            <h4>Welcome to Bloom & Boom - the flower shop where we offer a wide selection of flowers for unforgettable impressions.</h4>
            <hr/>
            <h4>With our range of fresh and exquisite flowers. we will help express your emotions, creat an atmosphere of joy and impress your loved ones. </h4>
        </div>
    </div>
  )
}
