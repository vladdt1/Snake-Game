import React from 'react'
import ReactDOM from 'react-dom'
import Routes from "./routes/Routes";
import './index.css'

ReactDOM.render(
    <React.StrictMode>
        <div>
            <Routes/>
        </div>
    </React.StrictMode>,

    document.getElementById('root')

);