import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Movie } from "../pages/Movie";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:movieID" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
}
