import React from 'react'
import '../css/community.css'
import map from '../asset/5054c4daf530354d9ce199ac7c59c324.png'

export default function Community() {
    return (
        <div className="community">
            <div><h2>Join our wordwide community of travelers</h2></div>
            <button>Sign up</button>
            <div className="map">
                 <img src={map}/>
            </div>
        </div>
    )
}
