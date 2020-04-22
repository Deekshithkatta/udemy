import React from 'react'
import './MenuItem.scss'

type props = {
   title:string,
   imageUrl:string
   size?:string
}

export const MenuItem =({title,imageUrl,size}:props)=>
{
   return(
      <>
         <div className={`${size} menu-item`}>
            <div className="background-image"  style={{backgroundImage:`url(${imageUrl})`}}>
            </div>
               <div className='content'>
                  <h1 className='title'> {title.toLocaleUpperCase()}</h1>
                  <span className='subtitle'> SHOP NOW</span>
               </div>
            
         </div>
      </>
   )

}
