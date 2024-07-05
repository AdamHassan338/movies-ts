import { useEffect, useState } from "react";
import Actor, { getActor } from "../interfaces/Actor";
import Film from "../interfaces/Film";
import { FilmTable } from "../components/FilmTable";
import { useParams } from "react-router-dom";
import ActorBanner from "../components/ActorBanner";





export function ActorPage() : JSX.Element{
  const { idd } = useParams();
  const id : number = Number(idd);
    const [actor,setActor] = useState<Actor>();
    const [film,setFilms] = useState<Film[]>();

    useEffect(() => {
        async function fetchData() {
          const f = await getActor(id);
            setActor(f);
            setFilms(f.films);
        }
        fetchData();
      }, [id]);



      return(
        <div className='page'>
          <div className='inside'>
        {ActorBanner(actor)}
        <br></br>
        {FilmTable(id)}
        </div>
        </div>
      )


}