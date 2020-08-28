import React, {useState} from 'react'
import './Banner.css'

import {
    Button, Search
} from '../indexer'

import {
    useHistory
} from 'react-router-dom'

const Banner = () => {
    const [showSearch, setShowSearch] = useState(false)
    const history = useHistory()

    return (
        <div className="banner">
            <div className="banner__search">
                <Button
                    className="banner__searchButton"
                    onClick={() => setShowSearch(!showSearch)}
                    variant="outlined"
                >{showSearch ? "Hide" : "Search Dates"}</Button>
                {
                    showSearch && <Search />
                }
            </div>
            <div hidden={showSearch} className="banner__info">
                <h1>Get out and stretch your imagination</h1>
                <h5>
                    Plan a different kind of getaway to uncover the hidden gems near you.
                </h5>
                <Button 
                    variant="outlined" 
                    onClick={() => history.push('/search')}
                >Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner
