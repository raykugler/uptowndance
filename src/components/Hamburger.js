import React from 'react';
import Menu from './Menu';
class Hamburger extends React.Component{
    state = {
        condition: false
    };
    handleClick =() =>{
        this.setState(() => ({condition: !this.state.condition}));
    }
    render(){
        return(
            <div>
            <Menu condition={this.state.condition}/>
            
            
            <input type='image' 
                src={'/images/Hamburger_icon.svg.png'} 
                className='hamburger'
                onClick={this.handleClick}/> 
         </div>

        )
    }
}

export default Hamburger;