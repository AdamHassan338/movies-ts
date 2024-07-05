import { useEffect, useState } from "react"
import Actor, { getActor } from "./Actor"
import Film from "./Film"
import { useNavigate } from 'react-router-dom';

export function FilmTable( id : number) : JSX.Element{

    const [films,setFilms] = useState<Film[]| null>(null);
    const [actor,setActor] = useState<Actor>();
    
    const navigate = useNavigate();
    useEffect(() => {
        async function fetchData() {
          const a = await getActor(id);
            setActor(a);
            if(a.films)
                setFilms(a.films);
        }
        fetchData();
      }, [id]);
    
    function createRow(film :Film) : JSX.Element{
        return (
            <>
                <div className="column">
                    <h3>{film.title}</h3>
                    <div className="row">
                        <img className='poster' src={"/poster.png"} alt="Logo" />
                        <div className="column">
                        <p>{film.description}</p>
                        <div className='leftgird'>
                        <button onClick={ () => (navigate(`/film/${film.id}`))}>Go to Film</button>
                        </div>
                        </div>
                        
                    </div>
                </div>
                <br></br>
            </>
        )
    }

    function createTable(films : Film[] | null) : JSX.Element{
        if(!films)
            return(<></>);
        return(<>{films.map((film: Film) => (
            createRow(film)
          ))}
          </>)
    
     
    }


    return(
        <>
        <div>
        <h3 className='starred'>Starred Films</h3>
        {createTable(films)}
        </div>
        </>
    )
}