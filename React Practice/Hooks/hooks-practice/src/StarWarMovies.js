import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StarWarMovies = () => {

  const [ number, setNumber ] = useState(1)
  const [ movie, setMovie ] = useState("")

  const handleChange = (e) => {
    setNumber(e.target.value)
  }

  useEffect(() => {
    async function getData() {
      const response = await axios.get(`https://swapi.dev/api/films/${number}/`)
      setMovie(response.data)
    }
    getData()
  }, [number])

  return (
    <div>
      <h3>Pick a movie</h3>
      <select value={number} onChange={handleChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
      </select>
      <div>
        <h4>{movie.title}</h4>
        <div style={{margin: "0 auto", width: "50vw"}}>
          <p>{movie.opening_crawl}</p>
        </div>
      </div>
    </div>
  )
}

export default StarWarMovies;