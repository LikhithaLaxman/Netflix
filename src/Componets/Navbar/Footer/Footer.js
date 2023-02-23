import React from 'react'
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer>
            <h2 className='ll'>Questions? Call 000-800-040-1843</h2>
            <div className='f'>
                <div className='f1'>

                    <p>FAQ</p>
                    <p>investors relation</p>
                    <p>Privacy</p>
                    <p>speed test</p>

                </div>
                <div className='f1'>
                    <p>Help center</p>
                    <p>jobs</p>
                    <p>Cookie references</p>
                    <p>Legal notices</p>
                </div>
                <div className='f1'>
                    <p>Account</p>
                    <p>ways to watch</p>
                    <p>corporate information</p>
                    <p>online on netflix</p>
                </div>
                <div className='f1'>

                    <p>media center</p>
                    <p>terms of use</p>
                    <p>contact</p>
                </div>
            </div>
            <div className='links1'>
                <Link to="/" className='link1'>English</Link>


            </div>
            <h4 className='ll1'>netflix india</h4>
        </footer>
    )
}

export default Footer