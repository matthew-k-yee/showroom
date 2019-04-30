import React from 'react'
import { Route, Switch } from 'react-router-dom';
import DisplayUsers from './DisplayUsers';
import SingleUser from './SingleUser'
import PostShow from './PostShow'

let MATCH_PATH = ''

class Users extends React.Component {
  constructor(props){
    super(props)
    MATCH_PATH = props.match.path;
  }
  render() {
    return (
      <Switch>
        <Route exact path={`${MATCH_PATH}`} component={DisplayUsers}/>
        <Route exact path={`${MATCH_PATH}/:id/`} component={SingleUser}/>
        <Route exact path={`${MATCH_PATH}/post`} component={PostShow}/>
      </Switch>
    )
  }
}

export default Users