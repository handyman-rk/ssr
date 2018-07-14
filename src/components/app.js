import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchAppsIfNeeded } from '../redux/actions'

import Card from './card'


class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchAppsIfNeeded())
  }


  render() {
    const { isFetching, apps } = this.props
    let totalapps = apps.length;

    return (
       <div>
         {isFetching && apps.length === 0 && <h2>Loading...</h2>}
         {!isFetching && apps.length === 0 && <h2>Empty.</h2>}
         <Card apps={apps} totalapps={totalapps} />
       </div>
    );
  }
}
 
function mapStateToProps(state) {
  const { isFetching, apps } = state
 
  return {
    isFetching,
    apps
  }
}
 
export default connect(mapStateToProps)(App)
