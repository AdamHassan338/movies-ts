import Film from "./Film";

export interface Actor {
    id: number;
    firstName: string;
    lastName: string;
    films? : Film[];
  }

  export async function getActors() : Promise<Actor[]> {
    const response : Response = await fetch("http://127.0.0.1:8080/actors");
    const data: Actor[] = await response.json();
    return data;
  }

  export async function getActor(id:number) : Promise<Actor> {
    const response : Response = await fetch("http://127.0.0.1:8080/actors/" +id);
    const data: Actor = await response.json();
    return data;
  }


  export default Actor;