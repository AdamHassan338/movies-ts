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
    const response : Response = await fetch("http://127.0.0.1:8080/films");
    const data: Film[] = await response.json();
    return data;
  }

  export async function getFilm(id:number) : Promise<Film>{
    const response : Response = await fetch("http://127.0.0.1:8080/films/"+id);
    const data: Film = await response.json();
    return data;
}


export default Film;