import { useEffect, useState } from 'react';
import Film from '../Film'
import ActorCard from '../ActorCard';
import Actor from '../Actor';
import ActorsGrid from '../ActorsGrid';
import { useParams } from 'react-router-dom';

export async function getFilm(id:number) : Promise<Film>{
    const response : Response = await fetch("http://127.0.0.1:8080/films/3");
    const data: Film = await response.json();
    console.log(data.year);
    return data;
}





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
                    <p>{film?.description}</p>

                </div>

            </div>

        </>
    )

    return (
        <div className='page'>
            {filmBanner}
            <div className='center'>
                <div className='gird'>
                    {ActorsGrid(actors)}
                </div>
            </div>
            <div className='gird'>
                <button /> <button />
            </div>
        </div>
    )
    
}