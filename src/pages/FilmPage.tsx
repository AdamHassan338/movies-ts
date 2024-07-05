import { useEffect, useState } from 'react';
import Film, { getFilm } from '../interfaces/Film'
import ActorCard from '../components/ActorCard';
import Actor from '../interfaces/Actor';
import ActorsGrid from '../components/ActorsGrid';
import { useParams } from 'react-router-dom';






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


      const filmBanner : JSX.Element=
      (
        <>
            <div className='gird'>

                <img className="poster" src={"/poster.png"} alt="Logo" />
                 
                <div className='anchorToTop'>

                    <div className='row'>
                        <h2 className='film'>{film?.title}</h2><h3 className='noMargin'>{film?.year}</h3>
                    </div>
                    <h3>{film?.categories[0].name}</h3>
                    
                    <p>{film?.description}</p>

                </div>

            </div>

        </>
    )

    return (
        <div className='page'>
            {filmBanner}
            <div className='center'>
                <div className='girdwrap'>
                    {ActorsGrid(actors)}
                </div>
            </div>

        </div>
    )
    
}