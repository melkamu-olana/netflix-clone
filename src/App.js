import Banner from './Banner';
import React from 'react';
import Nav from './Nav';
import requests from './requests';
import Row from './Row';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fechtNetflixOriginals} isLargeRow/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/> 
      <Row title="Romances Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentary Movies"  fetchUrl={requests.fetchDocumentaries}/>
      
    </div>
  );
}

export default App;
