import { useEffect, useState } from 'react';
import Film, { getFilm } from '../interfaces/Film'
import ActorCard from '../components/ActorCard';
import Actor from '../interfaces/Actor';
import ActorsGrid from '../components/ActorsGrid';
import { useParams } from 'react-router-dom';
import FilmBanner from '../components/FilmBanner';





export function FilmPage(){
    const { idd } = useParams();
    const id : number = Number(idd);
    const [film,setFilm] = useState<Film| null>(null);
    const [actors,setActors] = useState<Actor[]| null>(null);


    
    useEffect(() => {
        async function fetchData() {
          const f = await getFilm(id);
            setFilm(f);
            if(f.actors)
                setActors(f.actors);
        }
        fetchData();
      }, [id]);


      
    return (
        <div className='page'>
            <div className='inside'>
            {FilmBanner(film)}
            <div className='center'>
                <div className='girdwrap'>
                    {ActorsGrid(actors)}
                </div>
            </div>
            </div>
        </div>
    )
    
}