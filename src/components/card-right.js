import React, {Component} from 'react';
const tws = require('./tweet');

class CardRight extends Component {

  Title(props){
    if(props.publisher){
       return (
         <h3>{props.name}<span className="connector">by </span><span className="publisher">{props.publisher}</span> </h3>
       );
    } else{
      return (
        <h3>{props.name}</h3>
      );
    }
  }

  License(props){
    let lic = props.license.join(' | ');
    return (
      <span>{lic}</span>
    );
  }

  render() {
    return (
      <div className="col-right">
        <div className="app-meta">
          <div className="app-title">

           <this.Title name={this.props.name} publisher={this.props.app.publisher}/>

          </div>
          <div className="app-lic">
            <this.License license={this.props.app.license} />
          </div>
        </div>
        <div className="app-intro" dangerouslySetInnerHTML={{__html: this.props.app.desc}} />
        <hr />
        <div className="app-link">
          <a className="btn" title="Visit Site" href={this.props.app.link} target="_blank">Visit Site</a>

          <a href="#/" className="btn btn-twitter" title="Share on Twitter" rel="nofollow"
             data-tweet={this.props.app.tweet} onClick={((e) =>{tws(this.props.app.tweet); e.preventDefault();})}>
            <i className="icon icon-inline icon-twitter-light "></i>
            Tweet
          </a>

        </div>
        <div className="m-app-link">
          <a className="btn" title="Visit Site" href={this.props.app.link} target="_blank">Visit Site</a>

          <a href="#/" title="Share on Twitter" rel="nofollow" data-tweet={this.props.app.tweet} onClick={((e) =>{tws(this.props.app.tweet); e.preventDefault();})}>
             <i className="icon icon-inline icon-twitter "></i>
          </a>
        </div>
      </div>
    );
  }

}


export default CardRight;
