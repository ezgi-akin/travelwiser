import React from 'react'
import '../css/firstSection.css'
import logo from '../asset/dino-reichmuth-A5rCN8626Ck-unsplash.jpg';
import logo2 from '../asset/stefan-stefancik-0wMmxNB6Xzc-unsplash.jpg';

export default function FirstSection() {
    return (
        <div className="firstSection">
            <div className="firstDesc">
                <div>
                    <h2>Travel planner in your pocket</h2>
                    <p>TravelWiser is a new platform connecting the travel community & all the functions you need from a travel app.</p>
                    <div>
                        <button>Find a destination</button>
                        <button>Plan your trip</button>
                    </div>
                </div>
            </div>
            <div className="firstImg">
                <div className="circleTop"></div>
                <div className="circleRight"></div>
                <div className="circleCenter"></div>
                <img src={logo}/>
            </div>
            <div className="secondImg">
                <img src={logo2}/>
            </div>
            <div className="secondDesc">
                <div>
                    <h2>Everything in one app</h2>
                    <p>Including finding inspiration for next adventures, we help with planning and booking. After learning your travel interests and hobbies, our large data bank and clever AI is putting together the perfect trip.</p>
                </div>
            </div>

        </div>
    )
}
