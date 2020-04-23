import React from 'react'
import './PreviewItem.scss'

interface PreviewItemI{
    name:string,
    price:number,
    imageUrl:string
}

const PreviewItem = ({ name, price, imageUrl}:PreviewItemI) =>{
    return(
    <div className='collection-item'>
        <div className='image' 
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

export default PreviewItem