import React from 'react'
import AddNewShow from './AddNewShow'
import axios from 'axios'

const BASE_URL = 'http://localhost:3000'
class PostShow extends React.Component {
  constructor(props){
    super(props)
    this.state = ({
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

  // async componentDidMount() {
  //   await this.getShow()
  // }


  // async getShow() {
  //   const resp = await axios.get(`${BASE_URL}/shows`)
  //   // console.log(resp)
  //   const shows = resp.data.showData;
  //   // console.log(shows)
  //   this.setState({
  //     shows: shows
  //   })
  // }

  // handleChange = e => {
  //   const { name, value } = e.target
  //   this.setState( prevState => {
  //     return {
  //       showData: {
  //         ...prevState.showData,
  //         [name]: value
  //       }
  //     }
  //   })
  // }

  // async addShow(newShow) {
  //   const response = await axios.post(`${BASE_URL}/shows`, newShow);
  //   const show = response.data
  //   this.setState( prevState => {
  //     return {
  //       shows: [...prevState.shows, show],
  //       showData: {
  //         title: '',
  //         img_url: '',
  //         genre: '',
  //         userId: 1
  //       }
  //     }
  //   })
  // }

  // handleSubmit = async (e) => {
  //   e.preventDefault();
  //   await this.addShow(this.state.showData)
  // }

  render() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
      )
    }
  }
  
  
  export default PostShow
  // <AddNewShow 
  //   title={this.state.showData.title}
  //   img_url={this.state.showData.img_url}
  //   genre={this.state.showData.genre.genre_name}
  //   onChange={this.handleChange}
  //   onSubmit={this.handleSubmit}/>