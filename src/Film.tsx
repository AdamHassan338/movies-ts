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

export default Film;