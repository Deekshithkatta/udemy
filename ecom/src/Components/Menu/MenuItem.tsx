import React from 'react'
import './MenuItem.scss'
import {withRouter} from 'react-router-dom'


type props = {
   title:string,
   imageUrl:string
   size?:string
   history?:any
   match:any
   linkUrl:string
}

 const MenuItem =({title,imageUrl,size, history,linkUrl,match}:props)=>
{
   return(
      <>
         <div className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
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

export default withRouter(MenuItem);