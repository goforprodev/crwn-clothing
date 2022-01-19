import React from 'react';
//  adding an highere order component withROUTER
// An higher order compononent is a functio that takes a componenyt as an argument and returns u
// a modified component
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';

// styles
import './MenuItems.scss'

const MenuItem = ({item:{title,imageUrl,size,linkUrl},history,match}) => {
    return (
        <div style={{
            height: `${size  === 'large' ? "380px":"inital"}`
        }} className="menu-item" onClick={() => history.push(`${match.url}${linkUrl}`)}>
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

export default withRouter(MenuItem)