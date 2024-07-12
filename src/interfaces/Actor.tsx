import Film from "./Film";

export interface Actor {
    id: number;
    firstName: string;
    lastName: string;
    films? : Film[];
  }

  export async function getActors(page : number | null) : Promise<Actor[]> {
    let request : String = "/api/actors";
    if(page)
      request+="?page="+page;
    const response : Response = await fetch(""+request,{
      method: "GET",
      mode : "cors",
    });
    const data: Actor[] = await response.json();
    return data;
  }

  export async function getActor(id:number) : Promise<Actor> {
    const response : Response = await fetch("/api/actors/" +id,{
      method: "GET",
      mode : "cors",
    });
    const data: Actor = await response.json();
    return data;
  }


  export default Actor;