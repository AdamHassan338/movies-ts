import Actor from "./Actor";
import ActorCard from "./ActorCard";

export function ActorsGrid(actors : Actor[] | null) : JSX.Element{
    if(!actors)
        return(<></>);
    return(<>{actors.map((actor: Actor) => (
        <ActorCard key={actor.id} id={actor.id} firstName={actor.firstName} lastName={actor.lastName} />
      ))}
      </>)

 
}


export default  ActorsGrid;