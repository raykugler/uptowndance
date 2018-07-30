import React from 'react';
import Typekit from 'react-typekit';


const Cover =(props)=>{

    return(
<div className='main'>
<div className='overlay'>
</div>
<p 
className={props.condition ? 'main_title' : 'right_title'}>

          Uptown <br/>   Dance</p>
         <Typekit kitId="sim6twb" />     
         
         
          <img 
          src={'/images/mainimage.jpg'} 
          className='main_image'/>

          </div>
    );}
    
    export default Cover;

    /*    */