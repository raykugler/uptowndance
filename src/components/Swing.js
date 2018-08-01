import React from 'react';
class Swing extends React.Component {
    constructor(props){
        super(props)
    }
       
    componentDidMount() {
        window.scrollTo(0,0);
    } 
   resetChoice = () => { 
           this.setState({ choice: 0 });
           console.log(props.choice)
       }
   
      
       render(){
    

    return(
        <div>
        <img src={'/images/dance_images/swing.jpg'}className='big_style_image swing_adjust'/>
        <img src={'/images/right_arrow.png'}className='back_arrow' onClick={this.props.resetChoice}/>
        </div>
    );
}}

export default Swing;