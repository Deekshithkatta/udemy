import React from 'react'
import { MenuItem } from '../Menu/MenuItem';
import {sections} from '../../Constants/ShopData'
import './Directory.scss'
interface states{
    section:
            {
                title:string,
                imageUrl:string,
                id:number
                linkUrl:string
                size?:string
            }[]
         
}



class Directory extends React.Component <{},states>  {
    constructor(props:any)
    {
        super(props);
    
    this.state={section :sections}
        
    }

    // state: state = {

    //     sections:[
    //         {
    //             title:'Hats',
    //             imgUrl:'',
    //             id:1
    //         }
           
    //     ]

    // }
    render()
    {
        return(
            <>
              <div className='directory-menu'>
                  {this.state.section.map(({id,title,imageUrl,size})=>(
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                  ))}
              </div>
                
            </>
        )
    }
}

export default Directory