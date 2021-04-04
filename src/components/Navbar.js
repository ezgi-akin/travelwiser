import React from 'react'
import '../css/navbar.css'
import logo from '../asset/Artboard_1.png'

export default function Navbar() {
    return (
        <header>
            <div>
                <div className="logo">
                    <img src={logo}/>
                    <h4>TralvelWiser</h4>
                </div>
                <div>
                    <ul>
                        <li>Find Destination</li>
                        <li>Plan Your Trip</li>
                        <li>Blog</li>
                        <li>Community</li>
                    </ul>
                    <button>Login</button>
                    <button>Sign up</button>
                </div>
            </div>
        </header>
    )
}
