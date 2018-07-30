import React from 'react';
import Dance_Styles_List from './Dance_Styles_List';

class HipHop extends React.Component {
    constructor(props) {
        super(props)
          };      
   
          render(){
 
    return(
        <div>
        <img src={'/images/dance_images/hiphop.jpg'}className='block'/>
        <input type='image' 
        src={'/images/stylesicon.png'} 
        className='backtostyles'
        onClick={ (e) => this.styleChoice(0) }/> 
 </div>

    );
}}

export default HipHop;