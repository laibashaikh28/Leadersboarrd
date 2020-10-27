import React, {Component} from 'react';
import './Student.css';

class Student extends Component{
  constructor(){
    super();
    this.state ={
      score: 0
    }
  }
  
  componentDidMount(){
    this.setState({
      score: this.props.score
    })
  }
  addScore () {
    this.setState({
      score: this.state.score + 1
    },
      ()=>{
        if (this.state.score >= 350 ){
          this.setState({success: true})
        }
      }
    )
  }
  render(){
    const isSuccess = this.state.success;
    let text;
    if(isSuccess){
      text = <span>Success</span>
    }
    else{
      text = "";
    }

    return(
  <div className="Student">
    <div className="left">
      <h2 className="studentName">{this.props.name}
      <button className="addScorebtn" onClick={()=> this.addScore()}>+</button>
      </h2>
      <p className="universityName">{this.props.univeristy} {text}</p>
    </div>
    <div className="right">
      <div className="score">{this.state.score}</div>
    </div>
  </div>
)
  }


}
export default Student;