import React from 'react'

export const Address = () => {
    const left = {
        display: "flex",
        flexDirection: "column",
        flexBasis: "40%",
        justifyContent: "center",
        alignItems: "center"
    }
    const container = {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "rgb(246, 239, 231)",
        alignItems:"center",
        padding :"50px"
    }
    const map={
        borderRadius:"40px",
        width:"40vw",
        height:"40vh"
    }
    return (
        <div className='address text3' style={container}>
            <div className="addr" style={left}>
                <h1 className='text2'>Contacts</h1>
                <hr/>
                <h4 className='text2'>Address</h4>
                <p>36 Joseph HardCastle CL.</p>
                <p>London SE14 SRQ</p>
                <p>United Kingdom</p>
                <hr/>
                <h4 className='text2'>Working Hours</h4>
                <p>mon-fri 10:00 - 12:00</p>
                <p>sat-sun 12:00-21:00</p>
            </div>
            <div className="map">
                <iframe style={map} src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13839.947902830765!2d77.89387835!3d29.86464945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1696151886484!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}
