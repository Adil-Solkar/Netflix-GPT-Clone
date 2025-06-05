import MovieCards from "./MovieCards";

const MovieList = ({ title, movies }) => {
  return (
    <>
      <div className="pl-8">
        {movies && <h2 className="text-white font-bold text-2xl py-5">{title}</h2>}
        <div className="flex gap-4 overflow-x-scroll">
          {movies && movies.length
            ? movies.map((movie) => (
                <MovieCards key={movie.id} posterPath={movie.poster_path} />
              ))
            : null}
        </div>
      </div>
    </>
  );
};

export default MovieList;
