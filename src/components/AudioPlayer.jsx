import React, { Component } from 'react'
import fs from 'fs'


export default class AudioPlayer extends Component {
    constructor() {
        super()
    }

    componentWillMount() {
       // const context = new AudioContext()

       // console.log(context)

        (() => {
            // fs.readdirSync('./', (err, files) => {
            //     console.log(`\n${files}`)
            //     dirs += files
            // })
        
            // let files = fs.readdirSync('./')
            // console.log(files)
        
        })()

        

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