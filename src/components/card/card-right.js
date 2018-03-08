import React, {Component} from 'react';
import License from './license';
import Title from './title';
const tws = require('./tweet');

class CardRight extends Component {

  render() {
    return (
      <div className="col-right">
        <div className="app-meta">
           <Title name={this.props.name} publisher={this.props.app.publisher}/>
           <License license={this.props.app.license} />
        </div>
        <div className="app-intro" dangerouslySetInnerHTML={{__html: this.props.app.desc}} />
        <hr />
        <div className="app-link">
          <a className="btn" title="Visit Site" href={this.props.app.link} target="_blank">Visit Site</a>
          <a href="#/" className="btn btn-twitter" title="Share on Twitter" rel="nofollow"
             onClick={((e) =>{tws(this.props.app.tweet); e.preventDefault();})}>
            <i className="icon icon-inline icon-twitter-light "></i>
            Tweet
          </a>

        </div>
      </div>
    );
  }

}


export default CardRight;
