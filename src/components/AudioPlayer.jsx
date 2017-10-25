import React, { Component } from 'react'


export default class AudioPlayer extends Component {
    constructor() {
        super()
    }

    componentWillMount() {
        const context = new AudioContext()

        console.log(context)

       const fs = require('fs')
       console.log(fs)

        

    }

    render() {
        return (
            <div>
                <hr />
                <h2>this is the audio player doe</h2>



            </div>
        )
    }
}