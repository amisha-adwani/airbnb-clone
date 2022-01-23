import React from "react"
import image from '../images/katie-zaferes.png'
import star from "../images/star.png"

export default function Card(){
    return(
        <div className="card">
            <img src={image} className="image" />
            <div className="card-stats">
            <img src={star} className="star" /> 
            <span className="bold"> 5.0  </span> (6) USA 
            </div>
            <p className="card-text"> Life lessons with Katie Zaferes </p>
            <p className="card-text"> <span className="bold"> From $136</span>/person</p>

        </div>
    )
}