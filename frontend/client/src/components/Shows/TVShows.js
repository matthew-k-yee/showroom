import React from 'react'
import axios from 'axios'
import ShowsList from './ShowsList'

const BASE_URL = 'http://localhost:3000'
class TVShows extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({
      shows: []
    })
  }

  async componentDidMount() {
    await this.getShows()
  }

  getShows = async() =>{
    const res = await axios.get(`${BASE_URL}/shows`)
    const shows = res.data.showData
    this.setState({
      shows: shows
    })
  }

  render(){
    return (
      <div>
        <h1>Masterlist of TV Shows</h1>
        <ShowsList shows={this.state.shows}/>
      </div>
    )
  }
}

export default TVShows

// <ShowsList shows={this.state.shows}/>