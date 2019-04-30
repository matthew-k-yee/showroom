import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import ExampleUser from './ExampleUser'
import AddNewShow from './AddNewShow'
import AllUsers from './AllUsers'

const BASE_URL = 'http://localhost:3000'
class Users extends React.Component {
  constructor(props){
    super(props)
    this.state = ({
      users: [],
      shows: [],
      showData: {
        title: '',
        img_url: '', 
        genre: {
          genre_name: ''
        },
        userId: 1
      }
    })
  }

  async componentDidMount() {
    await this.getUsers()
    await this.getShow()
  }

  async getUsers() {
    const resp = await axios.get(`${BASE_URL}/users`)
    const users = resp.data.users
    this.setState({
      users: users
    })
  }

  async getShow() {
    const resp = await axios.get(`${BASE_URL}/shows`)
    // console.log(resp)
    const shows = resp.data.showData;
    // console.log(shows)
    this.setState({
      shows: shows
    })
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState( prevState => {
      return {
        showData: {
          ...prevState.showData,
          [name]: value
        }
      }
    })
  }

  async addShow(newShow) {
    const response = await axios.post(`${BASE_URL}/shows`, newShow);
    const show = response.data
    this.setState( prevState => {
      return {
        shows: [...prevState.shows, show],
        showData: {
          title: '',
          img_url: '',
          genre: '',
          userId: 1
        }
      }
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    await this.addShow(this.state.showData)
  }

  render() {
    const match = this.props.match
    return (
      <div>
      <Link to={`${match.url}/post`}>
      <AddNewShow 
      title={this.state.showData.title}
      img_url={this.state.showData.img_url}
      genre={this.state.showData.genre.genre_name}
      onChange={this.handleChange}
      onSubmit={this.handleSubmit}/>
      <p>POST NEW SHOW</p></Link>
        <ExampleUser users={this.state.users}/>
        <AllUsers users={this.state.users} match={this.props.match}/>
      </div>
    )
  }
}

export default Users

