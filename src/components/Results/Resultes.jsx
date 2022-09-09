import axios from "../../helpers/axios";
import VideoCard from "../VideoCard/VideoCard";
import "../Results/Results.css"

import { React, useEffect, useState } from "react";

const Results = ({ selectedOption }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(selectedOption);
      setMovies(request.data.results);
      //   console.log(request);
    };
    fetchData();
  }, [selectedOption]);

  console.log(movies);

  return (
    <div className="results">
      {movies.map((movie) => (
        <VideoCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Results;
