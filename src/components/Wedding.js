import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Q_Instructors from './Q_Instructors';
import Teacher_Name from './Teacher_Name';
import Teachers from './Teachers';
import Low_Style from './Low_Style';
import Style_Description from './Style_Description';
import High_Style from './High_Style';

class Wedding extends React.Component {
        constructor(props){
            super(props)
        this.state={
            style: 'Wedding',
            instructor: '',
            classes: 'wedding'
        }
        } 
        componentDidMount() {
            window.scrollTo(0,0);
        } 
        setBio=(id)=>{
            this.setState({instructor: id})
            console.log({id})
        };    
      
      
      
        render(){
        return(  
            <div className='big_style_grid'  >
            <High_Style resetChoice= {this.props.resetChoice} instructor={this.state.instructor}/> 
            
            <p className='style_name'>Wedding</p>
            <img src={'/images/dance_images/wedding.jpg'} className='big_style_image wedding_adjust'/>
           
            
            <Low_Style style={this.state.style} setBio={this.setBio} classes={this.state.classes}/>
           
            
            </div>    
        );}
        
    }
    
    

export default Wedding;