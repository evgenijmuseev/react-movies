export default function Movie(props) {

    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster
    } = props;

    return (
        <div key={id} className="card">
            <div className="card-image waves-effect waves-block waves-light">
            <img className="activator movie-img" src={poster}/>
            </div>
            <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{title}</span>
            <p>{type}<span className="right">{year}</span></p>
            </div>
      </div>
    )
}

