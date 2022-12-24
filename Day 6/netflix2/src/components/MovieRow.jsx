import MovieItem from "./MovieItem";
const MovieRow = () => {
  return (
    <div className="movierow">
      <h3 className="movierowheader">Acara Tv Bingeworthy</h3>
      <div className="flex">
        <MovieItem src="/alice.jpg" alt="/alice.jpg" />
        <MovieItem src="/insatiable.jpg" alt="/insatiable.jpg" />
        <MovieItem src="/stranger.jpg" alt="/stranger.jpg" />
      </div>
    </div>
  );
};

export default MovieRow;
