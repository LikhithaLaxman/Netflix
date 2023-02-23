import React from 'react'
import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className='main'>

            <h1>NETFLIX</h1>
            <div className='links'>
                <div id="google_translate_element"></div>
                <Link to="/" className='link2'>Signup</Link>
            </div>
        </div>
    )
}

export default Navbar