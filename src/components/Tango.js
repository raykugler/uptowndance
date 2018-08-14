import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Q_Instructors from './Q_Instructors';
import Teacher_Name from './Teacher_Name';
import Teachers from './Teachers';
import Low_Style from './Low_Style';
import Style_Description from './Style_Description';
import High_Style from './High_Style'
import Bio from './Bio';
import PropTypes from 'prop-types';
/*class Bio extends React.Component {



    render(){
        return(
            <p>{this.state.instructor}</p>
        )
        }};
*/



        
class Tango extends React.Component {
    constructor(props){
        super(props)
    this.state={
        style: 'Tango',
        instructor: '',
        classes:'tango'
    }
    }
    setBio=(id)=>{
        this.setState({instructor: id})
        console.log({id})
    };    
  
    render(){
    return(  
        <div className='big_style_grid'  >
       <High_Style resetChoice= {this.props.resetChoice} instructor={this.state.instructor}/>
        
        <p className='style_name'>Tango</p>
        <img src={'/images/dance_images/tango.jpg'} className='big_style_image'/>
       
        
        <Low_Style style={this.state.style} setBio={this.setBio} classes={this.state.classes} />
       
        
        </div>    
    );}
    
}


export default Tango;

/*resetChoice = () => { 
           this.setState({ choice: 0 });
           console.log(props.choice)

       }

        <img src={'/images/right_arrow.png'} className='back_arrow' onClick={this.props.resetChoice}/>
       */