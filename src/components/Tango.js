import React from 'react';

class Tango extends React.Component {
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
        <div className='top_half_menu'>
        <table className='schedule_table'>
            <thead>
             <tr >
                <th colSpan="7" className='half_menu_text'>Tango Classes</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>6/27</td>
                <td>6/28</td>
                <td>6/29</td>
                <td>6/30</td>
                <td>7/1</td>
                <td>7/2</td>
                <td>7/3</td>
            </tr>
            <tr>
                <td>3pm <br/>
                    4pm <br/>
                    5pm <br/>
                    6pm</td>
                <td>
                    3pm
                    4pm
                    5pm
                    6pm</td>
                <td>
                    3pm
                    4pm
                    5pm
                    6pm</td>
                <td>
                    3pm
                    4pm
                    5pm
                    6pm</td>
                <td>
                    3pm
                    4pm
                    5pm
                    6pm</td>
                <td>
                    3pm
                    4pm
                    5pm
                    6pm</td>
                <td>
                    3pm
                    4pm
                    5pm
                    6pm</td>
            </tr>
            </tbody>
        </table>


        </div>
        
        
        <p className='style_name'>Tango</p>
        <img src={'/images/dance_images/tango.jpg'} className='big_style_image'/>
        <img src={'/images/right_arrow.png'} className='back_arrow' onClick={this.props.resetChoice}/>
        
        <div className='bottom_half_menu'>
        <p className='half_menu_text bottom_element'> Tango Instructors </p>
        

        </div>
        </div>    
    );
}}

export default Tango;