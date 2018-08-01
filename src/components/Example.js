class Style_List extends React.Component{
constructor(props){
    super(props)
    this.styleChoice = this.styleChoice.bind(this);
    this.state={
        choice: 0
    };
}

styleChoice=(e) => {
    this.setState({choice : e})
}
render(){
    if (this.state.choice === 1) {
        return(
            <Style_One />
        )
    }
    else { 

return (
    <div>
    <h1  onClick={ e => this.styleChoice(1)}>First Style</h1>
    <h1>Second Style</h1>
    <h1>Third Style</h1>
    <h1>Fourth Style</h1>
    <h1>Fifth Style</h1>
    <h1>Sixth Style</h1>
    <h1>Seventh Style</h1>
    </div>
)
    }
export default Style_List

}}

