import React from 'react';
import FP_Left_Menu from './FP_Left_Menu';
import FP_Right_Menu from './FP_Right_Menu';

class FP_HipHop extends React.Component {
        constructor(props){
            super(props)
        this.state={
            style: 'HipHop',
            instructor: '',
            classes: 'hipHop'
        }
        } 
   
        setBio=(id)=>{
            this.setState({instructor: id})
            console.log({id})
        };    
      
      
      
        render(){
        return(  
            <div className='fp_full_style'>
            <div className='fp_dance_style_head'>Dance Styles</div>
            <FP_Left_Menu style={this.state.style} setBio={this.setBio} classes={this.state.classes}/>
            <p className='fp_style_name'>Hip Hop</p>
            <img src={'/images/dance_images/hiphop.jpg'} className='fp_big_style_image fp_salsa_adjust'/>
            <FP_Right_Menu resetChoice= {this.props.resetChoice} instructor={this.state.instructor}/>
            
            </div>    
        );}
        
    }
    
    

export default FP_HipHop;