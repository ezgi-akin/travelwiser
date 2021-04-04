import React from 'react'
import '../css/blog.css'
import firstPhoto from '../asset/david-marcu-78A265wPiO4-unsplash.jpg'
import secondPhoto from '../asset/1_WxBqQDRI7f9u0whS4bcoAQ.jpeg'

export default function Blog() {
    return (
        <div className="blog">
            <div><h2>Our Blog</h2></div>
            <div><p>Stories and tips written by us and our group of ambassadors from all over the world</p></div>
            <div className="articles"> 
                <div className="articleChild1">
                    <div className="articleImg"></div>
                    <h4>Mountains of Babylon!</h4>
                    <p>The hills are large and wide. Some even reach up to 4km. from the ground level. Read more</p>
                    <p>@May.Smith</p>
                </div>
                <div className="articleChild2">
                    <div className="articleImg"></div>
                    <div className="articleTitle">
                        <h4>Norway hiking – dangerous & difficult but extremely amusing</h4>
                        <p>@Egle.Leino</p>
                    </div>
                </div>
                <div className="articleChild3">
                    <div className="articleImg"></div>
                    <div className="articleTitle">
                        <h4>New Year’s Eve in Denmark | Evening full of surprises</h4>
                        <p>@Toomas.Laigu</p>
                    </div>
                </div>
                <div className="articleChild4">
                    <div className="articleImg"></div>
                    <div className="articleTitle">
                        <h4>Ultimate backpacking travel guide for men</h4>
                        <p>@Toomas.Laigu</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
