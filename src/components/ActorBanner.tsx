import Actor from "../interfaces/Actor";

        
export function ActorBanner(actor : Actor | undefined) : JSX.Element{

    if(!actor)
        return <></>

      return         (
        <>
            <div className='left-column'>
                <div className=''>

                    <div className='row'>
                        <h2 className='actor'>{actor?.firstName + " " + actor?.lastName}</h2>
                    </div>
                    <p className='actor'>Actor</p>

                </div>
                <img className='profile' src={"/unknown.jpg"} alt="Logo" />



            </div>

        </>
    );
}

export default ActorBanner;