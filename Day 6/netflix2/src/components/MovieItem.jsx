const MovieItem = ({ src, alt }) => {
  return (
    <div className="movieitem">
      <img className="movieimage" src={src} alt={alt} />
    </div>
  );
};

export default MovieItem;
