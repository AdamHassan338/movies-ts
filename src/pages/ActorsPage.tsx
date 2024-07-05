import { useEffect, useState } from 'react';
import Film from '../interfaces/Film'
import ActorCard from '../components/ActorCard';
import Actor, { getActors } from '../interfaces/Actor';
import ActorsGrid from '../components/ActorsGrid';



export function ActorsPage() : JSX.Element{
    const [actors,setActors] = useState<Actor[]| null>(null);
    const [page,setPage] = useState<number>(0);
    useEffect(() => {
        async function fetchData() {
          const a = await getActors(page);
            if(a)
                setActors(a);
        }
        fetchData();
      }, [page]);




    return (
        <div className='page'>
            <div className='center'>
                <div className='girdwrap'>
                    {ActorsGrid(actors)}
                </div>
            </div>
            <div className='gird'>
            <button onClick={()=>(setPage(page  > 0 ? page-1 : page))}> Back </button>
                <button onClick={()=>setPage( (actors && actors?.length > 0) ? page+1 : page)}> Next </button>


            </div>
        </div>
    )
    
}