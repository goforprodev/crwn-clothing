import React from 'react'
import { useState } from "react"
import SHOP_DATA from './utils'
import PreviewCollection from '../../components/PreviewCollection/PreviewCollection'

// components



const ShopPage = () => {

    const [shopData] = useState(SHOP_DATA)
    
    
    return(
        <div>
         {shopData.map(({id,...otherData}) => <PreviewCollection key={id} {...otherData}/>)}
        </div>
    )
}

export default ShopPage