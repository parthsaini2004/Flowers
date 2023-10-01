import React, { useEffect, useRef, useState } from 'react'
import { motion } from "framer-motion"
import "./style.css"
import image from "./images"

export const FlCarousal = () => {
    const [width,setWidth] = useState(0);
    const carousel = useRef();

    useEffect(()=>{
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    },[]);

  return (
    <div>
        <motion.div ref={carousel} className='carousel' whileTap={{cursor:"grabbing"}}>
            <motion.div drag="x" dragConstraints={{right:0,left:-width}} className='inner-carousel'>
                {
                    image.map((image)=> {
                        return(
                            <motion.div className="item">
                                <img src={image} alt=""/>
                                </motion.div>
                        )
                    })
                }
            </motion.div>
        </motion.div>
    </div>
  )
}
