import React, {Component} from 'react';
import CardLeft from './card-left';
import CardRight from './card-right';

class Card extends Component {

  Cardbaker(props){

    let cards = [], cardNumber = 1

    for(let app of props.apps){
      cards.push(
           <div className="app-card" key={app.name}>
                <CardLeft img={app.img} appno={cardNumber} totalapps={props.totalapps} />
                <CardRight name={app.name} app={app}/>
           </div>
         )
      cardNumber++
    }

    return ( <div> {cards} </div> )

  }


  render() {

    return (
      <this.Cardbaker apps={this.props.apps} totalapps={this.props.totalapps}/>
    );
  }

}


export default Card;
