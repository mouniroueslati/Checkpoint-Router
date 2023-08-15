import React from "react";
import { useNavigate } from "react-router-dom";

const Homepage = (props) => {
  const navigate = useNavigate();
  const { movies } = props;
  return (
    <div>
      {movies.map((el, index) => (
        <div key={index}>
          <p>title : {el.title}</p>
          <p>description : {el.description}</p>
          <p>Rating : {el.rating}</p>
          <button onClick={() => navigate(`/movie/${el.id}`)}>See more</button>
        </div>
      ))}
    </div>
  );
};

export default Homepage;