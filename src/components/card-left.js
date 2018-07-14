import React, {Component} from 'react';

class CardLeft extends Component {

  numbersLeadingZero(props) {
    let count = 0;

    // Append the leading zero (0) before the app number 
    count = ('0' + props.appno).slice(-2);
    return(
      <span className={props.withclass}>{count}</span>
    );

  }

  render() {
    return (
      <div className="col-left">
        <div className="app-no">
         <this.numbersLeadingZero appno={this.props.appno} withclass="current"/>
         <span className="connector">of </span><br />
         <this.numbersLeadingZero appno={this.props.totalapps} withclass="total" />
        </div>

        <img className="app-icon" src={this.props.img.src} alt={this.props.img.alt} height="120" width="120"/>
      </div>
    );
  }

}


export default CardLeft;
