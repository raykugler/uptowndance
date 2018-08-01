import React from 'react';
import Menu from './Menu';
import Hamburger from './Hamburger';
import Typekit from 'react-typekit';
import Dance_Styles_List from './Dance_Styles_List';



const Dance_Styles =(props) => {
    
    return(
    <div>
    <Dance_Styles_List />
        <Hamburger>
        <Menu condition={props.condition}/>
        </Hamburger>
    </div>
    );
}

export default Dance_Styles;

/*

<img src={'/images/one_screen.jpg'}className='block style_image_one_screen'/>
    
class Dance_Styles extends React.Component {
    state = { 
           condition: false 
         };
     handleClick= ()=> {
       this.setState(()=>({condition: !this.state.condition}));
     }
  render(){
      
    <img src={'/images/dance_images/salsa.jpg'}className='block style_image_one'/>
        <img src={'/images/one_screen.jpg'}className='block style_image_one_screen'/>
        
    
    */