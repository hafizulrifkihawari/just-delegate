import React from 'react'
import '../assets/styles/content.css'
import Carousel from './Carousel'

export default function Section({ country, news }) {
    return (
        <div className="section">
            <div className="country">
                <p id="country-text">{country}</p>
            </div>
            <Carousel news={news} />
        </div>
    )
}