// Code YouTubeDebugger Component Here
import React from 'react'

export default class YouTubeDebugger extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    handleBitrate = () => {
        console.log(this.state)
        
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
        console.log(this.state)
    }

    handleResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: '720p'
                }
            }
        })
    }

    render(){
        return(
            <div>
                <button 
                className="bitrate"
                onClick={this.handleBitrate}
                >Bitrate
                </button>

                <button className="resolution" onClick={this.handleResolution}>Resolution</button>
            </div>
            

            

        )
    }
}