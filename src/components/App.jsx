import React, { Component } from 'react'
import AudioPlayer from '../components/AudioPlayer.jsx'

export default class App extends Component {
    constructor() {
        super()
    }

    componentWillMount() {
        let el = document.getElementById('render-target')
        let text = document.createElement('h1')
        text.innerText = "SOME TEXT"

        el.appendChild(text)
    }



    render() {
        return (
            <div>
                APP DOE
                <AudioPlayer />
            </div>
        )
    }
}