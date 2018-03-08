import React, {Component} from 'react';


class Filter extends Component {
  constructor() {
    super();
    this.state={
      "cat":[
        {"name": "Collaboration & Communication", "id":"cc"},
        {"name": "Development", "id":"co"},
        {"name": "Continuous Integration", "id":"ci"},
        {"name": "Configuration Management", "id":"cm"},
        {"name": "Virtualization & Containers", "id":"vc"},
        {"name": "Security", "id":"sc"},
        {"name": "Monitoring & Logging", "id":"ml"}
      ],
      "lic":[
        {"name": "Open Source", "id":"op"},
        {"name": "Free", "id":"fr"},
        {"name": "Paid", "id":"pd"}
      ]
    }
    this.chkr = this.chkr.bind(this);
    this.Options = this.Options.bind(this);

  }

  chkr(t, id){
    let ul = this.state[t],
              u = {};

        if (t === "cat") {
          for (let li of ul) {
            if(li.id === id){
              if(!li.chkd){
                u = Object.assign(li, {"chkd":true});
                this.props.hsm(t, id, false);
              } else {
                u = Object.assign(li, {"chkd":false});
                this.props.hsm(t, id, true);
              }
            }
          }
        } else {
          for (let li of ul) {
            if(li.id === id){
              if(!li.chkd){
                u = Object.assign(li, {"chkd":true});
                this.props.hsm(t, id, -1);
              } else {
                u = Object.assign(li, {"chkd":false});
                this.props.hsm(t, id, 1);
              }
            }
          }
        }
        this.setState(u);
  }

  Options(props){
    let ul = props.ul, lis=[];
    for (let li of ul) {
      if(!li.chkd){
        lis.push(
          <li  className="btn btn-w shd" key={li.id} onClick={this.chkr.bind(this, props.t, li.id)}>{li.name}</li>
        );
      } else{
        lis.push(
          <li  className="btn btn-w shd checked" key={li.id} onClick={this.chkr.bind(this, props.t, li.id)}>{li.name}</li>
        );
      }
    }
    return(
      <ul className={`${props.t}-filter`}>
        {lis}
      </ul>
    );
  }


  render(){

    return(
      <div className="filter mb-4">
       <p>I want tools for:</p>
       <this.Options ul={this.state.cat} t="cat" />
       <p>that are</p>
       <this.Options ul={this.state.lic} t="lic" />
      </div>
    );
  }

}

export default Filter;
