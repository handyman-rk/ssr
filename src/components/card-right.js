import React, {Component} from 'react';
import Title from './title';
const tweet = require('./tweet');

class CardRight extends Component {

  render() {
    return (
      <div className="col-right">
        <div className="app-meta">
           <Title name={this.props.name} publisher={this.props.app.publisher}/>
           <span className="app-lic">{this.props.app.price}</span>
        </div>
        <div className="app-intro" dangerouslySetInnerHTML={{__html: this.props.app.desc}} />
        <hr />
        <div className="app-link">
          <a className="btn" href={this.props.app.link} target="_blank">Get App</a>
          <a href="#/" className="btn btn-twitter" title="Share on Twitter" rel="nofollow"
             onClick={((e) =>{tweet(this.props.app.tweet); e.preventDefault();})}>
            <i className="icon icon-inline icon-twitter-light "></i>
            Tweet
          </a>

        </div>
      </div>
    );
  }

}


export default CardRight;
