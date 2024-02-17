import React from 'react'
import './style.scss'

const PageEntry = ({ title, text }) => {
    return (
        <div className="Entry">
            {title && <h1>{title}</h1>}
            {text && <p>{text}</p>}
        </div>
    )
}

export default PageEntry
