import React, {Component} from 'react';
import Card from './card';
const counter = require('./counter');

class App extends Component {

  Sections(props){
    let sec = [], i=0, start=0;
    for(let key of props.sections){
      if(!key.hs){
        i++;
        start = counter.nextCount(props.counts, i);
        sec.push(
          <section className="section" id={key.id} key={key.id}>
            <div className="section-intro">
             <h2> {key.title}</h2>
             <div className="sec-desc" dangerouslySetInnerHTML={{__html: key.intro}} />
            </div>

            <Card apps={key.apps} start={start} totalapps={props.totalapps}/>

          </section>
        );
      }
    }

    return(
      <div>{sec}</div>
    );
  }

  render() {
    let counts = counter.counter(this.props.sections);
    let total = counter.getTotal(counts);
    return (
       <div>
         <this.Sections sections={this.props.sections} totalapps={total} counts={counts}/>
       </div>
    );
  }
}


export default App;
