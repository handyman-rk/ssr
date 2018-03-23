import React, {Component} from 'react';
import Card from './card';
const counter = require('./counter');

class App extends Component {

    constructor() {
     super();
     this.state = {
       "fe": false,
        "sections": []
     }

   }



   componentDidMount(){
     fetch('assets/data.json').then(response =>{
      if (!response.ok) throw Error('Response not ok')
       return response.json();
      }).then(json => {
        this.setState({"sections" : json});
      }).catch(err =>{
       this.setState({"fe": true});
     });
   }


  Feh(props){
    if (props.err) {
      return(
        <div>
          <h3 className="text-center">Error fetching data</h3>
        </div>
      );
    } else {
      return null;
    }
  }


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
    let counts = counter.counter(this.state.sections);
    let total = counter.getTotal(counts);
    return (
       <div>
         <this.Feh err={this.state.fe} />
         <this.Sections sections={this.state.sections} totalapps={total} counts={counts}/>
       </div>
    );
  }
}


export default App;
