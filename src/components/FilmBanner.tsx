import Film from "../interfaces/Film";

export function FilmBanner(film : Film | null) : JSX.Element{

    if(!film)
        return <></>

      return (
        <>
            <div className='gird'>

                <img className="poster" src={"/poster.png"} alt="Logo" />

                <div className='anchorToTop'>

                    <div className='row'>
                        <h2 className='film'>{film?.title}</h2><h3 className='noMargin'>{film?.year}</h3>
                    </div>
                    <h3>{film?.categories[0].name}</h3>

                    <p>{film?.description}</p>

                </div>

            </div>

        </>
    );
}

export default FilmBanner;