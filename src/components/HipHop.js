import React from 'react';
import Dance_Styles_List from './Dance_Styles_List';

class HipHop extends React.Component {
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
        <div className='big_style_grid'>
        <div className='half_menu'></div>
        <img src={'/images/dance_images/hiphop.jpg'}className='big_style_image' />
        <img src={'/images/right_arrow.png'}className='back_arrow' onClick={this.props.resetChoice}/>
        <p className='style_name'>Hip-Hop</p>
        <pre className='style_schedule'> Hip-Hop <br/> Classes</pre>
        <pre className='style_instructors'>   Hip-Hop <br/> Instructors</pre>
        <img src={'images/scheduleicon.png'} className='half_menu_schedule'/>
        <img src={'images/instructors.png'} className='half_menu_instructors'/>
       
         </div>

    );
}}

export default HipHop;