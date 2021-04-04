import React from 'react'
import '../css/offer.css'


export default function Offer() {
    return (
        <div className="offer">
            <h2>What we can offer you</h2>
            <div className="offerCard">
                <div>
                    <h4>Inspiration</h4>
                    <p>We want to inspire people to travel more and explore the beauty of the Earth!</p>
                </div>
                <div>
                    <h4>Shared experiences</h4>
                    <p>We are building a community where you can share your exploration.</p>
                </div>
                <div>
                    <h4>Tailored travels</h4>
                    <p>Everybody have their ideas of perfect travels and we help them happen!</p>
                </div>
            </div>
        </div>
    )
}
