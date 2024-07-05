import { useEffect, useState } from 'react';
import Film from '../Film'
import ActorCard from '../ActorCard';
import Actor, { getActors } from '../Actor';
import ActorsGrid from '../ActorsGrid';

export async function getFilm(id:number) : Promise<Film>{
    const response : Response = await fetch("http://127.0.0.1:8080/films/3");
    const data: Film = await response.json();
    console.log(data.year);
    return data;
}





export function ActorsPage() : JSX.Element{
    const [actors,setActors] = useState<Actor[]| null>(null);
    useEffect(() => {
        async function fetchData() {
          const a = await getActors();
            if(a)
                setActors(a);
        }
        fetchData();
      }, []);




    return (
        <div className='page'>
            <div className='center'>
                <div className='girdwrap'>
                    {ActorsGrid(actors)}
                </div>
            </div>
            <div className='gird'>
                <button /> <button />
            </div>
        </div>
    )
    
}