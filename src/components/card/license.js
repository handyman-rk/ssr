import React, {Component} from 'react';

class License extends Component {
  render(){
    let lic = this.props.license.join(' | ');
    return (
      <span className="app-lic">{lic}</span>
    );
  }
}

export default License;
