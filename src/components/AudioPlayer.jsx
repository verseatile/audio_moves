import React, { Component } from 'react'
import fs from 'fs'
import { EventEmitter } from 'events'


export default class AudioPlayer extends Component {
    constructor() {
        super()

        this.val; //will store the files in the directory

    }

    componentWillMount() {
       // const context = new AudioContext()

       // console.log(context)

       //console.log(fs)

        (() => {
            // fs.readdirSync('./', (err, files) => {
            //     console.log(`\n${files}`)
            //     dirs += files
            // })
        
            this.val = fs.readdirSync('../')
            console.log(this.val)

            //file data or BUFFER
            let got = fs.createReadStream('./berries.wav')
            //console.log(got)

           let audio = document.createElement('audio')
           audio.src = got.path
            
           document.body.appendChild(audio)

           audio.play()
        
        })()

        

    }

    grab() {

        return this.val.map((item, i) => {
           return( <li key={i}>{item}</li>)
        })
        
        
    }


    render() {
        // let files = fs.readdirSync('./')
        // console.log(files)


        return (
            <div>
                <hr />
                <ul style={{listStyle: 'none'}}>
                    {this.grab()}
                </ul>



            </div>
        )
    }
}