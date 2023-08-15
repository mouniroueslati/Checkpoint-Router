import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Movie = (props) => {
  const { id } = useParams();
  const { movies } = props;
  let [p, setp] = useState(movies);
  useEffect(() => {
    const newlist = movies.filter((el) => el.id == id);
    setp(newlist);
  }, [id]);

  return (
    <div>
      {p.map((el, index) => (
        <div key={index}>
          <p>title : {el.title}</p>
          <p>description : {el.description}</p>
          <p>Rating : {el.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default Movie;