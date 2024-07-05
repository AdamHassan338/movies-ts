import { useEffect, useState } from 'react';
import Film from '../interfaces/Film'
import ActorCard from '../components/ActorCard';
import Actor, { getActors } from '../interfaces/Actor';
import ActorsGrid from '../components/ActorsGrid';

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