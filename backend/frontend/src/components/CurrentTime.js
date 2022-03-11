import React from 'react'
import moment from 'moment'

const CurrentTime = () => {

    const timeRightNow = moment().format('ll'); 
 
    return(
            <h6 className='p-2 m-1'>{timeRightNow}</h6>
    )
}
export default CurrentTime