import React from 'react';
class Salsa extends React.Component {
    constructor(props){
        super(props)
    }
       
   resetChoice = () => { 
           this.setState({ choice: 0 });
           console.log(props.choice)
       }
   
      
       render(){
    
    return(
        <div className='big_style_grid'>
        <div className='bottom-half_menu'></div>
        <div className='top-half_menu'></div>
        <p className='style_name'>Salsa</p>
        <pre className='style_schedule'>   Salsa <br/> Classes</pre>
        <pre className='style_instructors'>     Salsa <br/> Instructors</pre>
        <img src={'images/scheduleicon.png'} className='half_menu_schedule'/>
        <img src={'images/instructors.png'} className='half_menu_instructors'/>
        
        <img src={'/images/dance_images/salsa.jpg'}className='big_style_image salsa_adjust'/>
        <img src={'/images/right_arrow.png'}className='back_arrow' onClick={this.props.resetChoice}/>
        </div>
    )
}
}
export default Salsa;