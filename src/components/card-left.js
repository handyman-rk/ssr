import React, {Component} from 'react';

class CardLeft extends Component {

  constructor(){
    super();

  }

  Appno(props) {
    let count = 0;
    if(props.counter <10){
      count = ('0' + props.counter).slice(-2);
    }else{
      count = props.counter;
    }
    return(
      <span className={props.cl}>{count}</span>
    );

  }

  render() {
    return (
      <div className="col-left">
        <div className="app-no">
         <this.Appno counter={this.props.appno} cl="current"/>
         <span className="connector">of </span><br />
         <this.Appno counter={this.props.totalapps} cl="total" />
        </div>

        <img className="app-icon" src={this.props.img.src} alt={this.props.img.alt} height="120" width="120"/>
      </div>
    );
  }

}


export default CardLeft;
