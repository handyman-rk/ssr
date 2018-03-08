import React, {Component} from 'react';
import Card from './card/card';
const counter = require('./card/counter');
import Filter from './filter';
import More from './card/more';

const data = require('../assets/data.json');

class App extends Component {

    constructor() {
     super();
     this.state = {
       "fe": false,
       "pop": false,
       "pd": {},
        "sections": data;

     }

     this.Feh = this.Feh.bind(this);
     this.hsm = this.hsm.bind(this);
     this.rcf = this.rcf.bind(this);
     this.rlf = this.rlf.bind(this);
     this.popm = this.popm.bind(this);

   }

   /**

   componentDidMount(){
     fetch('https://idevop.org/assets/js/tool.json').then(response =>{
      if (!response.ok) throw Error('Response not ok')
       return response.json();
      }).then(json => {
        this.setState({"sections" : json});
      }).catch(err =>{
       this.setState({"fe": true});
     });
   }

   */


   rcf(){
     let sec = this.state.sections, u = false;
     for (let s of sec) {
       if(s.hs === undefined){
         s.hs = true;
         u = true;
       }
     }
     if(u){
       this.setState(sec);
     }
   }

   rlf(){
     let sec = this.state.sections, u = false;
     for (let s of sec) {
       for (let a of s.apps) {
         if (a.hs === undefined) {
           a.hs = 1;
           u = true;
         }
       }
     }
     if(u){
       this.setState(sec);
     }
   }

   catHsm(id, hs){
     let sec = this.state.sections, u = false, sid = `s${id}`;
     for (let s of sec) {
       if (s.id === sid) {
         s.hs = hs;
         u = true;
       }
     }
     if(u){
       this.setState(sec, this.rcf);
     }
   }

   licHsm(id, hs){
     let sec = this.state.sections, u = false, license = "";
       if(id === "op"){
         license = "Open Source";
       } else if (id === "fr"){
         license = "Free";
       } else if (id === "pd") {
         license = "Paid";
       }
       for (let s of sec) {
         for (let a of s.apps) {
           if (a.license.includes(license)) {
             if (a.hs === undefined) {
               a.hs = 1;
             }
             a.hs = a.hs + hs;
             u = true;
           }
         }
       }
       if(u){
         this.setState(sec, this.rlf);
       }
   }

   hsm(t, id, hs){
     if (t === "cat") {
       this.catHsm(id, hs);
     } else if (t === "lic") {
       this.licHsm(id, hs);
     }
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

  popm(app){
    if(app){
      this.setState({"pd": app});
    }
    this.setState({"pop": !this.state.pop});
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
             <h2>{i}. {key.title}</h2>
             <div className="sec-desc" dangerouslySetInnerHTML={{__html: key.intro}} />
            </div>

            <Card apps={key.apps} start={start} totalapps={props.totalapps} popm={props.popm}/>

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
         <Filter hsm={this.hsm}/>
         <this.Sections sections={this.state.sections} totalapps={total} counts={counts} popm={this.popm}/>
         <More state={this.state.pop} app={this.state.pd} popm={this.popm}/>
       </div>
    );
  }
}


export default App;
