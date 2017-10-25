import React, { Component } from 'react'
import AudioPlayer from '../components/AudioPlayer.jsx'
import Dragbar from '../components/Dragbar.jsx'
import fs from 'fs'

export default class App extends Component {
    constructor() {
        super()
    }

    componentWillMount() {
        let el = document.getElementById('render-target')
        let text = document.createElement('h1')
        text.innerText = "SOME TEXT"

        el.appendChild(text)

        // (() => {
        //     // fs.readdirSync('./', (err, files) => {
        //     //     console.log(`\n${files}`)
        //     //     dirs += files
        //     // })
        
        //     let files = fs.readdirSync('./')
        //     console.log(files)
        
        // })()
    }



    render() {
        return (
            <div>
                <Dragbar />
                APP DOEZ
                <AudioPlayer />
            </div>
        )
    }
}