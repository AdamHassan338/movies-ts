import React, { useEffect, useState } from 'react';
import './App.css';
import { Actor, getActors } from './interfaces/Actor';
import ActorCard from './components/ActorCard';
import {FilmPage} from './pages/FilmPage';
import { ActorPage } from './pages/ActorPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ActorsPage } from './pages/ActorsPage';



function App() {
  const [cards, setCards] = useState<JSX.Element[]>([]);
  const [Film,setFilm] = useState<JSX.Element>();


  async function getCards(): Promise<JSX.Element[]> {
    const data: Promise<Actor[]> = getActors();
    console.log(data);
  
    return (await data).map((actor: Actor) => (
      <ActorCard key={actor.id} id={actor.id} firstName={actor.firstName} lastName={actor.lastName} />
    ));
  }


  useEffect(() => {
    async function fetchData() {
      const cardsData = await getCards();
      setCards(cardsData);
    }
    fetchData();
    

  }, []);





  return (
    <BrowserRouter>
      <Routes>
        <Route path="actors" element={ActorsPage()}>

        </Route>
        <Route path="/actor/:idd" element={<ActorPage/>} >
          </Route>

          <Route path="/film/:idd" element={<FilmPage/>} >
          </Route>
      </Routes>
    </BrowserRouter>
  );


}

export default App;
