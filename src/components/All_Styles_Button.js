import React from 'react';
import Typekit from 'react-typekit';
//import ShowMenu from './Show_Menu';
import { BrowserRouter, Route , Switch,  Link} from 'react-router-dom';


const All_Styles =(props)=>{
    return(


<div className={props.condition ? 'menu_images image_two' : 'no_menu_images image_two'}>
        <img src={'images/stylesicon.png'} className={props.condition ? 'menu_images image_two' : 'no_menu_images image_two'} />
     
        <p className={props.condition ? 'menu_title title_two' : 'no_menu_title title_two'}>Styles</p>
     
        </>
 
    )}
 
 export default All_Styles;