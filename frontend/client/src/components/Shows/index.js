import React from 'react'
import { Route, Switch } from 'react-router-dom';
import TVShows from './TVShows'

let MATCH_PATH = ''

class Users extends React.Component {
  constructor(props){
    super(props)
    MATCH_PATH = props.match.path;
  }
  render() {
    return (
      <Switch>
        <Route exact path={`${MATCH_PATH}`} component={TVShows}/>
      </Switch>
    )
  }
}

export default Users