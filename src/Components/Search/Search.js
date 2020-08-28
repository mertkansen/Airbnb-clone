import React, {useState} from 'react'
import './Search.css'

// react-date-range 
import 'react-date-range/dist/styles.css' // Main style file
import 'react-date-range/dist/theme/default.css' // Theme style file
import { DateRangePicker } from 'react-date-range'

// date-fns, dependency of react-date-range
import 'date-fns'

// Icons
import {
    PeopleIcon, Button
} from '../indexer'

import {
    useHistory
} from 'react-router-dom'

const Search = () => {
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())

    const history = useHistory()

    const searchClicked = e => {
            history.push('/search')
    }

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection"
    }

    const handleSelection = ranges => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }

    return (
        <div className="search">
            <DateRangePicker 
                ranges={[selectionRange]}
                onChange={handleSelection}    
            />
            <h2>Number of guests <PeopleIcon /></h2>
            <input min={0} defaultValue={2} type='number' />
            <Button onClick={searchClicked}>Search Airbnb</Button>
        </div>
    )
}

export default Search
