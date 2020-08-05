import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StarWarMovies = () => {

  const [ number, setNumber ] = useState(1)
  const [ movie, setMovie ] = useState("")

  const handleChange = (e) => {
    setNumber(e.target.value)
  }

  const renderOptions = () => {
    return [1,2,3,4,5,6,7].map(option => (
    <option value={`${option}`}>{option}</option>
    ))
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
        {renderOptions()}
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