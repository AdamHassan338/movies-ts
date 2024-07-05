import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Actor, getActors } from './Actor';
import ActorCard from './ActorCard';
import {getFilm,FilmPage} from './pages/FilmPage';
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
  //const film  = FilmPage(2);
  //const actor : JSX.Element = ActorPage(2);
  //const actors : JSX.Element = ActorsPage();

  useEffect(() => {
    async function fetchData() {
      const cardsData = await getCards();
      setCards(cardsData);
    }
    fetchData();
    
    //const film =  getFilm(1);

  }, []);

  // return (
  //   <div className='gird'>
  //     {actors} 
  //   </div>
  // );



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
