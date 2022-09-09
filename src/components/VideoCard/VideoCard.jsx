import TextTruncate from "react-text-truncate";
import  {ThumbUpSharp} from "@mui/icons-material"
import React from "react";
import "../../components/VideoCard/VideoCard.css"
const base_url = "https://image.tmdb.org/t/p/original";

const VideoCard = ({ movie }) => {
  return (
    <div className="videoCard">
      <img className="img"
        src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
        alt=""
      />
      <TextTruncate
        line={1}
        element="p"
        truncateText="…"
        text={movie.overview}
        // textTruncateChild={<a href="#">Read on</a>}
      />
      <h2>{movie.title || movie.original_title}</h2>
      <p className="videoCard_stats">
        {movie.media_type && `${movie.media_type} * `}
        {movie.release_date || movie.first_air_date} 
        <ThumbUpSharp/>{" "}{movie.vote_average}
      </p>
    </div>
  );
};

export default VideoCard;
