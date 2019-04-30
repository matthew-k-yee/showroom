import React from 'react'

const AddNewShow = props => {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
      <label>
        Show
        <input
          type='text'
          name='title'
          value={props.title} 
          placeholder="title text input" 
          onChange={props.onChange}/>
      </label>
      <label>
        Image
        <input 
          type='text'
          name='img_url'
          value={props.img_url} 
          placeholder="image url text input"
          onChange={props.onChange} />
      </label>
      <label>
        Genre
        <select
          name='genre'
          value={props.genre}
          onChange={props.onChange}>
        <option value=''>--Select an option--</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Family">Family</option>
        <option value="Drama">Drama</option>
        <option value="Comedy">Comedy</option>
        </select>
      </label>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default AddNewShow

