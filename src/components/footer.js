import React from 'react'
import "./style.css"
export const Footer = () => {
    const left = {
        display: "flex",
        flexDirection: "column",
        flexBasis: "40%",
        justifyContent: "center",
        alignItems: "center"
    }
    const right = {
        display: "flex",
        flexBasis: "60%",
        gap: "3vw",
        paddingRight:"0.5vw"
    }
    const container = {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#728EA8",
        paddingBottom: "50px",
        justifyContent: "space-between",
        paddingLeft:"0.5vw"
    }
    const icons = {
        display:"flex",
        gap:"20px",
        padding:"50px"
    }
    const bg={
        backgroundColor:"rgb(246, 239, 231)"
    }
    return (
        <div className='text1' >
            <svg style={bg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="#728EA8" fill-opacity="1" d="M0,128L80,154.7C160,181,320,235,480,229.3C640,224,800,160,960,133.3C1120,107,1280,117,1360,122.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            <div style={container}>

                <div style={left} >
                    <h3><b>BLOOM&BOOM</b></h3>
                    <hr />
                    <h5>36 Joseph HardCastle CL</h5>
                    <h5>London, United Kingdom</h5>
                    <h5>bloomboom@gmail.com</h5>
                </div>
                <div>
                    <div style={right}>
                        <h5>About Us</h5>
                        <h5>Catalog</h5>
                        <h5>Delivery</h5>
                        <h5>Reviews</h5>
                        <h5>Contacts</h5>
                    </div>
                    <div style={icons} >
                        <img className='ic' src='https://www.pngplay.com/wp-content/uploads/5/Instagram-Logo-Silhouette-PNG.png' />
                        <img className='ic' src='https://www.pngkey.com/png/full/84-842567_twitter-logo-black-png.png'  />
                        <img className='ic' src='https://www.freeiconspng.com/uploads/facebook-black-radius-transparent-26.png'  />
                    </div>
                </div>
            </div>
        </div>
    )
}
