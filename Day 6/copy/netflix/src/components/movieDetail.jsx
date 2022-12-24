export default function MovieDetail(props) {
  return (
    <div className="movie-detail">
      <div className="netflix-title1">
        NETFLIX <label className="netflix-title2">ORIGINAL</label>
      </div>
      <div className="movie-title">{props.movie.title}</div>
      <div className="movie-year">
        <label className="match"> {props.movie.match} Match </label>
        {props.movie.year}
      </div>
      <div className="movie-synopsis"> {props.movie.synopsis}</div>
      <div className="movie-category ">{props.movie.category}</div>
    </div>
  );
}
