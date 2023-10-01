import React from "react";
import WhyChooseItem from "./WhyChooseItem";

function WhyChoose() {
    return (
        <div className="box-1">
            <p id="wcheading">Why Choose Us?</p>
            <div className="main-box">
                <WhyChooseItem iclass="fa-solid fa-location-dot" title="Locations" des="Convinent location in the city center" />
                <WhyChooseItem iclass="fa-solid fa-truck-fast" title="Fast delivery" des="Fast delivery upto 10 minutes" />
                <WhyChooseItem iclass="fa-regular fa-clock" title="Saving time" des="By ordering from us you save your time" />
                <WhyChooseItem iclass="fa-solid fa-users" title="Client base" des="We have a large and permanent client base" />

            </div>
        </div>
    )
}
export default WhyChoose;