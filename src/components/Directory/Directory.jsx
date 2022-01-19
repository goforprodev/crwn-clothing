import React from 'react';

// components
import MenuItem from '../MenuItems/MenuItems'

// utils
import { useState } from 'react'
import SECTION from './utils'
// styles
import './Directory.scss'

const Directory = () => {
    const [section] = useState(SECTION)


    return(
        <div className="directory-menu">
            {
                section.map(item => <MenuItem item={item} key={item.id}/>
                )
            }
        </div>
    )
}


export default Directory