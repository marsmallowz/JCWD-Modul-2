const Focus = () => {
  return (
    <div className="moviefocus">
      <img src="/title.webp" alt="movie-logo" height={"200px"} />
      <p className="moviesynopsis">
        Sesosok putri duyung dari era Hoseon terdampar di Seoul masa kini, lalu
        bertemu penipu yang mungkin punya ikatan dengan seseorang yang ia kenal
        di masa lalu.
      </p>
      <div>
        <button className="btnmovie btnplay">Putar</button>
        <button className="btnmovie btninfo">Selengkapnya</button>
      </div>
    </div>
  );
};

export default Focus;
