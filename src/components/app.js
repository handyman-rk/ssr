import React, { Component } from 'react'
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
    const totalapps = apps.length;

    return (
       <>
         {isFetching && totalapps === 0 && <h2>Loading...</h2>}
         {!isFetching && totalapps === 0 && <h2>Empty.</h2>}
         <Card apps={apps} totalapps={totalapps} />
       </>
    );
  }
}
 
function mapStateToProps({ isFetching, apps }) {
  return {
    isFetching,
    apps
  }
}
 
export default connect(mapStateToProps)(App)
