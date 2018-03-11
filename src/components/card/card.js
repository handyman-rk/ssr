import React, {Component} from 'react';
import CardLeft from './card-left';
import CardRight from './card-right';

class Card extends Component {

  Cardbaker(props){

    let cards = [];
    let start = props.start;
    for(let key of props.apps){
      if (!key.hs || key.hs < 0) {
        start++;
         cards.push(
           <div className="app-card" id={key.name} key={key.name}>
                <CardLeft img={key.img} appno={start} totalapps={props.totalapps} />
                <CardRight name={key.name} app={key}/>
           </div>
         );
      }
    }

    return (
     <div>{cards}</div>
    );

  }


  render() {

    return (
      <this.Cardbaker apps={this.props.apps} start={this.props.start} totalapps={this.props.totalapps}/>
    );
  }

}


export default Card;
