import React from 'react';

// styles
import './MenuItems.scss'

const MenuItem = ({item:{title,imageUrl,size}}) => {
    return (
        <div style={{
            height: `${size  === 'large' ? "380px":"inital"}`
        }} className="menu-item">
        <div className='background-image'
            style={{
                backgroundImage:`url(${imageUrl})`,
            }}
        />
        <div className="content">
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
    )
}

export default MenuItem