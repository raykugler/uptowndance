import React from 'react';
import Typekit from 'react-typekit';
import HipHop from './HipHop.js';
import Tango from './Tango.js';
import Salsa from './Salsa.js';

import Modern from './Modern.js';
import Swing from './Swing.js';
import Wedding from './Wedding.js';
import Belly from './Belly.js';

    class Dance_Styles_List extends React.Component {
        constructor() {
            super()
            this.styleChoice = this.styleChoice.bind(this);
            this.state ={
                choice: 0
            };
    
          }
                 
       styleChoice=(e)=> {
           this.setState({choice: e})

       }
        render(){
          
     if (this.state.choice ===1){
         console.log(this.state.choice);
              return(
                  <Salsa />
              )
          }
      else if(this.state.choice ===2){  
        console.log(this.state.choice);          
            return(
                <Tango />
            )
        }
     else if(this.state.choice ===3){  
        console.log(this.state.choice);          
        console.log('hiphop');  
        return(
                <HipHop styleChoice={this.reset}/>
            )
        }
     else if(this.state.choice ===4){  
        console.log(this.state.choice);          
            return(
                <Modern />
            )
        }
     else if(this.state.choice ===5){ 
        console.log(this.state.choice);             
            return(
                <Swing />
            )
        }
     else if(this.state.choice ===6){    
        console.log(this.state.choice);          
            return(
                <Wedding />
            )
        }
     else if(this.state.choice ===7){    
        console.log(this.state.choice);  
                
            return(
                <Belly />
            )
        }

        
    else{
          
    return  (  
    <div className='dance_styles_page'>
   
    <div className='styles_menu'>
    <h1 className="dance_style_head">Dance Styles</h1>

    <div className='block_one' onClick={ e => this.styleChoice(1)}>
        <p className='style_block_text' ref='salsa'>Salsa</p>
        <img src={'/images/dance_images/salsa.jpg'}className='block style_image_one'/>
    </div>
    
    <div className='block_two'  onClick={ e => this.styleChoice(2)}>
        <p className='style_block_text'>Tango</p>
        <img src={'/images/dance_images/tango.jpg'}className='block style_image_two'/>
    </div>
    
    <div className='block_three' onClick={ e => this.styleChoice(3)}>
        <p className='style_block_text'>Hip Hop</p>
        <img src={'/images/dance_images/hiphop.jpg'}className='block style_image_three'/>
    </div>

    <div className='block_four' onClick={ e => this.styleChoice(4)}>
        <p className='style_block_text'>Modern</p>
        <img src={'/images/dance_images/modern.jpg'}className='block style_image_four'/>
    </div>

    <div className='block_five' onClick={ e => this.styleChoice(5)}>
        <p className='style_block_text'>Swing</p>
        <img src={'/images/dance_images/swing.jpg'}className='block style_image_five'/>
    </div>
    
    <div className='block_six' onClick={ e => this.styleChoice(6)}>
        <p className='style_block_text'>Wedding</p>
        <img src={'/images/dance_images/wedding.jpg'}className='block style_image_six'/>
    </div>

    <div className='block_seven' onClick={ e => this.styleChoice(7)}>
        <p className='style_block_text'>Belly</p>
        <img src={'/images/dance_images/belly.jpg'}className='block style_image_seven'/>
    </div>

    <Typekit kitId="sim6twb" /> 
    </div>
    </div>
);
}}}

export default Dance_Styles_List;

       /* state = {
        choice: 1
    };

    styleChoice(){
        
    }
    */