import React, {useState} from 'react'
import './Banner.css'

import {
    Button
} from '../indexer'

const Banner = () => {
    const [showSearch, setShowSearch] = useState(false)


    return (
        <div className="banner">
            <div className="banner__search">
                {
                    showSearch && <h1>Show Date Picker</h1>
                }
                <Button
                    className="banner__searchButton"
                    onClick={() => setShowSearch(!showSearch)}
                    variant="outlined"
                >Search Dates</Button>
            </div>
            <div className="banner__info">
                <h1>Get out and stretch your imag ination</h1>
                <h5>
                    Plan a different kind of getaway to uncover the hidden gems near you.
                </h5>
                <Button variant="outlined">Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner
