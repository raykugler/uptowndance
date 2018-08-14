// just for a fun, button have parent and child components
// you can keep it simple and use just one component for button, but if you are learning React
// it's better for you to see how parent-child communication works on this simple example.
// btw, you can find button built from just one component (es5) here https://codepen.io/_danko/pen/yJqRWr
// n.b. in real life project do not use 'div' for a button - think about accessibility

class ButtonParent extends React.Component {
    constructor(props) {    
      super(props)
      this.state = {
        condition: false
      }
      this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
      this.setState({
        condition: !this.state.condition
      })
    }
    render() {
      return (
        <ButtonChild        
          className={ this.state.condition ? "button toggled" : "button" }
          toggleClassName={ this.handleClick }
        >
          Click me if you dare!
        </ButtonChild>
      )
    }
  }
  
  class ButtonChild extends React.Component {
    render() {
      return (
        <div
          className={ this.props.className }
          onClick={ this.props.toggleClassName }
        >
          { this.props.children }
        </div>
      )    
    }
  }
  
  ReactDOM.render(<ButtonParent />, document.getElementById('app'))
  
  var Button = React.createClass({
    getInitialState: function() {
      return {
        condition: false
      }
    },
    handleClick: function() {
      this.setState({
        condition: !this.state.condition
      });
    },
    render: function() {
      return ( 
        <div 
          onClick={ this.handleClick } 
          className= { this.state.condition ? "button toggled" : "button" }
        >
          { this.props.message } 
        </div>
      )    
    }
  });


  class Button extends React.Component {
    this.state ={
      word: 'bird'
    };
   
    handleClick = () => {
      console.log(this.state.word);
    }
  
    render() {
      return (
        <button onClick={e => this.handleClick('well a')}/>
      );
    }
  }

  <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>



class Tango extends React.Component {
  constructor(props){
      super(props)
  this.state={
      style: 'Tango'
  }
  };
  render(){
  return(  
      <div className='big_style_grid'  >

        <High_Style resetChoice= {this.props.resetChoice} >
          <Bio  instructor={this.props.instructor}/>
        </High_Style>
      
        <p className='style_name'>Tango</p>
        <img src={'/images/dance_images/tango.jpg'} className='big_style_image'/> 
      
        <Low_Style style={this.state.style}  />
      
      </div>    
  );}}
export default Tango;



class Teachers extends React.Component{
  constructor(props){
      super(props)
  this.state ={
      instructor: 5
  };}
  
  setBio=(e)=>{
      this.setState({instructor: e})
      console.log({e})
  }
render(teachers){
   return(
  <Query query={Q_Instructors} variable={{teachers}}>
    {({loading, error, data}) =>{
       if (loading) return <td>Loading...</td>
       if (error) return <td>Error:</td>
       return data.teachers.filter(teacher => teacher.tango).map(({ theirPhoto, tango, id }) => (
      <td key={id}>
          <img key={id} src={`${theirPhoto.url}`}  className='headshot' onClick={ e => this.setBio(id)}/>
      </td>
    )); 
    }}
  </Query>         
)}}

export default Teachers;

class High_Style extends React.Component {
  constructor(props){
      super(props)
  }
render(){
return(
  <div className='top_half_menu'>  
    <img src={'/images/right_arrow.png'} className='back_arrow' onClick={this.props.resetChoice}/>
    
    <Bio  instructor={this.props.e}/>
  
  </div>
)}}

export default High_Style;
class Bio extends React.Component {
  constructor(props){
      super(props)
  }
  render(){
  return(
  <p className='bio'> {`efweewfewf ${this.props.instructor} ggererg`}</p>
)}}
export default Bio;




const Teacher = ({teachers})=>(
  <Query query={Q_Instructors} variable={{teachers}}>
  {({loading, error, data}) =>{
     if (loading) return <td>Loading...</td>
     if (error) return <td>Error:</td>
     return data.teachers.filter(teacher => teacher.tango).map(({ teacherName, theirPhoto, tango, id }) => (
      <td key={id}>
        
      <img key={id} src={`${theirPhoto.url}`}  className='headshot' onClick={e =>this.props.setBio(id)}/>
      </td>
    ));
  }}
  </Query>   
  );
