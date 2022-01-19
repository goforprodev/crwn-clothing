import React from 'react'
import './CollectionItem.scss'
const CollectionItem = ({price,name,id,imageUrl}) => {
    console.log(imageUrl)
    return(
        <div className='collection-items'>
            <div 
                className='image'
                style={{
                    backgroundImage:`url(${imageUrl})`
                }}
            />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
        </div>
    )
}

export default CollectionItem