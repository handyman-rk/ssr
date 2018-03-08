
// Function to calculate apps in  each section
function counter(sections){
  let counts = [];
  for(let i of sections){
      let k=0;
      if(!i.hs){
        for (let j of i.apps) {
          if (j.hs === undefined || j.hs <= 0) {
            k++;
          }   
        }
      }
      counts.push(k);
  }
  return counts;
}

// function to total counts
function getTotal(counts){
   var total = counts.reduce((s,v) =>{
     return s+v;
   },0);

   return total;
}

// gets old index and counts array to calculate new start
function nextCount(counts, index){
   var start = counts.slice(0,index-1).reduce((s,v) =>{
     return s+v;
   },0);

   return start;
}

module.exports = {
  counter: counter,
  getTotal: getTotal,
  nextCount: nextCount
}
