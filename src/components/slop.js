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