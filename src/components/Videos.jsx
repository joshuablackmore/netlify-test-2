import React from 'react'
import { VideoData } from './VideosData'
import ReactPlayer from 'react-player'

const Videos = () => {
    return (
        <div id='videos'>
            {VideoData.map(vid => {
                return (
                    <div className='w-auto h-auto'>
                        <ReactPlayer 
                        url={vid}
                        width='100%' 
                        height="400px"
                        className='player'/>
                    </div>
                )
            })}
        </div>
    )
}

export default Videos