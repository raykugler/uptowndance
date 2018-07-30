import React from 'react';
import Typekit from 'react-typekit';
//import ShowMenu from './Show_Menu';
import Menu from './Menu';
import Hamburger from './Hamburger';
import Cover from './Cover';

const Main =(props)=> {
   
     return(
<div>
<Cover condition={props.condition}/> 
          <Hamburger>
          
          
          <Menu condition={props.condition} />
            
       
    
         
        </Hamburger>          
</div>
   
     );
 }
     
     export default Main;

    

//     <div className="menu_block">
  //   <div className={props.condition ? 'grey_bar' : 'blue_bar'}>
//    </div>    
// </div>
    













/*const Main = (props) =>{
    return(
 
    <div className='main'>
    <div className="menu_block">
    <div className="grey_bar">
    </div>
    </div>
    <input type='image' src={'/images/Hamburger_icon.svg.png'} className='hamburger' onClick={ShowMenu}/>
   <img src={'/images/mainw_omenuflat.png'} className='main_image'/>
    <p className='main_title'>Uptown <br/>   Dance</p>
    <Typekit kitId="sim6twb" />
    
 
    </div>
);

};

export default Main;

*/