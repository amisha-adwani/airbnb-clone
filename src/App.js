import React from "react"
import Navbar from "./components/Navbar"
import Upper from "./components/Upper"
import styles from './style.css'
import Card from "./components/Card"
import data from "./data"

export default function App() {
    const cards= data.map(item=>{
      return(
        <Card
          key={item.id}
        item={item}
          />
      )
    })
    return (
        <div>
            <Navbar />
            <Upper />
            <section className="cardList">  {cards}</section>
          
        </div>
    )
}