import React from 'react'
import { render } from 'react-dom'
import App from './components/App.jsx'


console.log('fresh webpack')


render(<App />, document.getElementById('render-target'))
