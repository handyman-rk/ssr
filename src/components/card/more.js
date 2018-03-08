import React, {Component} from 'react';
import License from './license';
const tws = require('./tweet');

class More extends Component{

  Dialog(props){
    if (props.state) {
      return (
        <div className="pop">
            <div className="app-head">
              <img className="app-icon" src={props.app.img.src} alt={props.app.img.alt} height="60" width="60"/>
              <div className="app-meta">
                <h3>{props.app.name}</h3>
                <License license={props.app.license} />
              </div>
              <div className="closepop">
                <a href="#/" onClick={((e)=>{props.popm(null); e.preventDefault();})}>&#9747;</a>
              </div>
            </div>
            <div className="app-intro" dangerouslySetInnerHTML={{__html: props.app.desc}} />
            <hr />
            <div className="m-app-link">
              <a className="btn" title="Visit Site" href={props.app.link} target="_blank">Visit Site</a>

              <a href="#/" title="Share on Twitter" rel="nofollow" onClick={((e) =>{tws(props.app.tweet); e.preventDefault();})}>
                 <i className="icon icon-inline icon-twitter "></i>
              </a>
            </div>
        </div>
      );
    }

    return (
      null
    );
  }

  render(){
    return (
      <this.Dialog state={this.props.state} app={this.props.app} popm={this.props.popm} />
    );
  }

}

export default More;
