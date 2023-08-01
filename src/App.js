import Form from "./components/Form";
import MovieDisplay from "./components/MovieDisplay";
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Footer from './components/Footer';
// import "./App.css";

const Container = styled.div`
  width: 100%;
  margin: auto;
  text-align: center;
  background-color: Black;
  font-size: 15px;
  color: GreenYellow;
  border-radius: 20px 20px 0 0;
  font-family: Arial, Helvetica, sans-serif;
`

function App() {

  const apiKey = '98e3fb1f'
  const [movie, setMovie] = useState(null)

  const getMovie = async (searchTerm) => {
    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`)
      const data = await response.json();
      // console.log(data)
      setMovie(data)

    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    getMovie('Hackers')
  }, [])

  return (
    <>
      <Container className="App">
        <h1>Movie-Verse</h1>
        <Form movieSearch={getMovie} />
        <MovieDisplay movie={movie} />
      </Container>
      <Footer />


    </>

  )
}

export default App;
