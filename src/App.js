import React from "react"
import "./App.css"

class App extends React.Component{
  constructor(){
    super()
    this.state={
      inputValue:"",
      passedMsg:""
    }
  }
handleChange=(e)=>{
  this.setState({inputValue: e.target.value})
}
passMsg=()=>{
  const newMsg = this.state.inputValue.toUpperCase().trim();
  if(this.state.inputValue){
    this.setState({
      passedMsg: newMsg,
      inputValue: ""
    })
  }else{
    alert("Pass your message")
  }
}
render(){
  return(
    <div className="container">
      <h2>Message You Would Like To Pass</h2>
      <input value={this.state.inputValue} onChange={this.handleChange} />
      <button onClick={this.passMsg}>Submit</button>
      <div className="alert"></div>
      <h2>Delivered Message</h2>
      <div className="message">{this.state.passedMsg}</div>
    </div>
  )
}
}
export default App;
