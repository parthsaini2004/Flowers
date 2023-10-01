import React from "react";


function Catalog_item(props) {
    return (
        <div className="main">
            <div className="div-1">
                <img src={props.img_src} alt="flower-img" width="100%" />
            </div>
            <div className="div-2">
                <div className="name-love">
                    <p>{props.name}</p>
                    <i class="fa-regular fa-heart"></i>
                </div>
                <p>{props.price}</p>
            </div>
            <div className="div-3">
                <p>Add to cart</p>
                <i class="fa-solid fa-minus"  ></i>
                <i class="fa-solid fa-minus"  ></i>
                <i class="fa-solid fa-minus"  ></i>

            </div>

        </div>
    )

}

export default Catalog_item;