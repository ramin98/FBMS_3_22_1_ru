import { useEffect, useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from "react-redux"
import { getFetch } from './store/fetchs'

function App() {
  let films = useSelector((state) => state.films)
  let dispatch = useDispatch()
  console.log(films)

  useEffect(() => {
    dispatch(getFetch())
  }, [])

  const addFunction = () => {
    dispatch({
      type: 'ADD MOVIE TO LIST', 
      payload: {
        "title": "A Fall from Grace",
        "year": 2020,
        "cast": [
          "Crystal R. Fox",
          "Phylicia Rashad",
          "Bresha Webb",
          "Mehcad Brooks",
          "Cicely Tyson",
          "Tyler Perry"
        ],
        "genres": [
          "Thriller"
        ],
        "href": "A_Fall_from_Grace",
        "extract": "A Fall from Grace is a 2020 American thriller film produced, written, and directed by Tyler Perry and his first to be released by Netflix. The film follows a woman who finds a dangerous new love and the novice attorney who defends her in a sensational court case. This was the final film of actor Cicely Tyson before her death in January 2021.",
        "thumbnail": "https://upload.wikimedia.org/wikipedia/en/4/4e/AFallFromGrace.png",
        "thumbnail_width": 259,
        "thumbnail_height": 383
      }
    })
  }

  return (
    <>
      <button onClick={addFunction}>ADD</button>
      <ul>
        {films.map((item, index) => {
          return (
            <li key={index}>
              <p>{item.title}</p>
              <p>{item.year}</p>
              <img src={item.thumbnail} alt={item.title} />
            </li>

          )
        })}
      </ul>
    </>
  )
}

export default App


