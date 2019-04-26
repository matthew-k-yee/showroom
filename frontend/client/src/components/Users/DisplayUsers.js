import React from 'react'
import axios from 'axios'
// import ExampleUser from './ExampleUser'
import AllUsers from './AllUsers'

const BASE_URL = 'http://localhost:3000'
class Users extends React.Component {
  constructor(props){
    super(props)
    this.state = ({
      users: []
    })
  }

  async componentDidMount() {
    await this.getUsers()
  }

  async getUsers() {
    const resp = await axios.get(`${BASE_URL}/users`)
    const users = resp.data.users
    this.setState({
      users: users
    })
  }

  render() {
    return (
      <div>
        <AllUsers users={this.state.users} match={this.props.match}/>
      </div>
    )
  }
}

export default Users