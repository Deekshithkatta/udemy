import React from 'react'
import './Preview.scss'
import PreviewItem from '../PreviewItem/PreviewItem'

interface PreviewI {
    title:string,
    items:{
        name:string,
        price:number,
        imageUrl:string
        id:number
    }[]
}

const Preview = ({title,items}:PreviewI) =>(
    <div className='collection-preview' >
        <h1 className='title'>{title.toLocaleUpperCase()}</h1>
            <div className='preview'>
                {
                    items.filter((value,index)=>index<4).map((item)=>{
                   return <PreviewItem key={item.id}  name={item.name} price={item.price} imageUrl={item.imageUrl} />
                   
                    })
                }
            </div>
    </div>
)

export default Preview