import React from "react"
import star from "../images/star.png"

export default function Card(props){
    console.log(props)
        let badgeText
        if(props.item.openSpots === 0){
            badgeText = "SOLD OUT"
        } else if(props.item.location === "Online"){
            badgeText ="ONLINE"
        }
    return(
        <div className="card">
            {badgeText && <div className="cardBadge"> {badgeText} </div>}
            <img src={props.item.coverImg} className="image" />
            <div className="card-stats">
            <img src={star} className="star" /> 
            <span className="bold"> {props.item.stats.rating}  </span> ({props.item.stats.reviewCount}) USA 
            </div>
            <p className="card-text"> {props.item.title} </p>
            <p className="card-text"> <span className="bold"> From ${props.item.price}</span>/person</p>

        </div>
    )
}