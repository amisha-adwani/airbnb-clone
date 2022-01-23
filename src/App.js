import React from "react"
import Navbar from "./components/Navbar"
import Upper from "./components/Upper"
import styles from './style.css'
import Card from "./components/Card"

export default function App() {
    return (
        <div>
            <Navbar />
            <Upper />
            <Card />
        </div>
    )
}