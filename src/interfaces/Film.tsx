import Category from './Category'
import Actor from './Actor';

export interface Film{
    id : number;
    title: string;
    description : string;
    year: number;
    language : string;
    length : number;
    rating : string;
    specialFeatures : string;
    categories : Category[];
    actors? : Actor[];
    
}

export async function getFilms() : Promise<Film[]> {
    const response : Response = await fetch("/api/films",{
      method: "GET",
      mode : "cors",
    });
    const data: Film[] = await response.json();
    return data;
  }

  export async function getFilm(id:number) : Promise<Film>{
    const response : Response = await fetch("/api/films/"+id,{
      method: "GET",
      mode : "cors",
    });
    const data: Film = await response.json();
    return data;
}


export default Film;