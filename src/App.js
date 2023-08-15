import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/HomePage.jsx";
import Addmovie from "./Pages/Addmovie";
import Movie from "./Pages/Movie";

const App = () => {
  const [movies, setmovies] = useState([
    {
      id: 0,
      title: "first movie",
      description: "this is the first movie",
      url: "https://www.youtube.com/watch?v=MffV_9iZamA&t=7570s&ab_channel=IndianCoders",
      rating: 1,
    },
    {
      id: 1,
      title: "second movie",
      description: "this is the second movie",
      url: "https://www.youtube.com/watch?v=MffV_9iZamA&t=7570s&ab_channel=IndianCoders",
      rating: 2,
    },
    {
      id: 2,
      title: "third movie",
      description: "this is the third movie",
      url: "https://www.youtube.com/watch?v=MffV_9iZamA&t=7570s&ab_channel=IndianCoders",
      rating: 4,
    },
  ]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage movies={movies} />} />
        <Route
          path="/add"
          element={<Addmovie movies={movies} setmovies={setmovies} />}
        />
        <Route
          path="/movie/:id"
          element={<Movie movies={movies} setmovies={setmovies} />}
        />
      </Routes>
    </div>
  );
};

export default App;
