import React, {Component} from 'react';

class Title extends Component {
  render(){
    if(this.props.publisher){
       return (
         <h3>{this.props.name}<span className="connector">by </span><span className="publisher">{this.props.publisher}</span> </h3>
       );
    } else{
      return (
        <h3>{this.props.name}</h3>
      );
    }
  }
}

export default Title;
