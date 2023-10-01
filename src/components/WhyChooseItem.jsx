import React from "react";


function WhyChooseItem(props) {
    return (
        <div className="wc-main-div">
            <i className={props.iclass} id="wcIcon"></i>
            <br />
            <p className="wcTitle">{props.title}</p>
            <p className="wcDes">{props.des}</p>
        </div>
    )
}

export default WhyChooseItem;