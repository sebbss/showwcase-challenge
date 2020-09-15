import React from 'react'
import Box from './Box'

function Homepage() {
    return (
        <div className='main'>
            <div className='main-side-nav'>
                <p>Showcase University</p>
                <p>Forward Bootcamp</p>
            </div>
            <div className='main-layout'>
                <Box/>
                <Box/>
            </div>
            
        </div>
    )
}

export default Homepage
