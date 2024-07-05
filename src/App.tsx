import './App.css';
import {FilmPage} from './pages/FilmPage';
import { ActorPage } from './pages/ActorPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ActorsPage } from './pages/ActorsPage';



function App() {

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
