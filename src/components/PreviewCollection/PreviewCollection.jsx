import React from 'react'
import './PreviewCollection.scss'
import CollectionItem from '../CollectionItems/CollectionItem'

const PreviewCollection = ({title,items}) => {
    return (
        <div className='preview-collection'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                    {
                        items.filter((item,idx) => idx < 4)
                        .map(({id,...otherItems}) => <CollectionItem key={id}{...otherItems}/>)
                    }
            </div>
        </div>
    )
}

export default PreviewCollection