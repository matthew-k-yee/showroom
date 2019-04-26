import React from 'react'
import axios from 'axios'
import UserInfo from './UserInfo'

const BASE_URL = 'http://localhost:3000'

class SingleUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({
      id: Number(this.props.match.params.id),
      user: [],
      shows: []
    })
  }

  async componentDidMount() {
    await this.getUser()
  }

  async getUser() {
    const res = await axios.get(`${BASE_URL}/users/${this.state.id}/shows`)
    this.setState({
      user: res.data.singleUser,
      shows: res.data.singleUser.shows
    })
    // console.log(this.state.shows)
  }

  render() {
    return (
      <div>
        <UserInfo user={this.state.user} shows={this.state.shows}/>
      </div>
    )
  }
}
export default SingleUser