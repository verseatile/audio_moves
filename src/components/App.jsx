import React, { Component } from 'react'
import AudioPlayer from '../components/AudioPlayer.jsx'
import Dragbar from '../components/Dragbar.jsx'
import '../style.css'

export default class App extends Component {
    constructor() {
        super()
    }

    componentWillMount() {


    }



    render() {
        return (
            <div className="global">
                <Dragbar />

                <div className="within-body">
                APP DOEZ
                <AudioPlayer />
                </div>
            </div>
        )
    }
}