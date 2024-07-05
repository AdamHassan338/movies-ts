import { useEffect, useState } from "react";
import Actor, { getActor } from "../interfaces/Actor";
import Film from "../interfaces/Film";
import { FilmTable } from "../components/FilmTable";
import { useParams } from "react-router-dom";





export function ActorPage() : JSX.Element{
  const { idd } = useParams();
  const id : number = Number(idd);
    const [Actor,setActor] = useState<Actor>();
    const [film,setFilms] = useState<Film[]>();

    useEffect(() => {
        async function fetchData() {
          const f = await getActor(id);
            setActor(f);
            setFilms(f.films);
        }
        fetchData();
      }, [id]);


    const actorBanner: JSX.Element =
        (
            <>
                <div className='left-column'>
                    <div className=''>

                        <div className='row'>
                            <h2 className='actor'>{Actor?.firstName + " " + Actor?.lastName}</h2>
                        </div>
                        <p className='actor'>Actor</p>

                    </div>
                    <img className='profile' src={"/unknown.jpg"} alt="Logo" />



                </div>

            </>
        )



      return(
        <div className='page'>
        {actorBanner}
        <br></br>
        {FilmTable(id)}
        </div>
      )


}