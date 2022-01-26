import React from "react"
import star from "../images/star.png"

export default function Card(props){
    console.log(props)
    return(
        <div className="card">
            {props.openSpots === 0 && <div className="cardBadge"> SOLD OUT </div>}
            <img src={props.image} className="image" />
            <div className="card-stats">
            <img src={star} className="star" /> 
            <span className="bold"> {props.rating}  </span> ({props.reviewCount}) USA 
            </div>
            <p className="card-text"> {props.title} </p>
            <p className="card-text"> <span className="bold"> From ${props.price}</span>/person</p>

        </div>
    )
}