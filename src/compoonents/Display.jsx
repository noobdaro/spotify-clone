import React from "react";
import DisplayHome from "./DisplayHome";
import { Route, Routes } from "react-router-dom";
import AlbumsDetailPage from "./AlbumsDetailPage";

function Display() {
  return <div className="w-[100%] bg-[#121212] px-6 m-2 pt-4 text-white overflow-auto rounded">
    <Routes>
        <Route path="/" element={<DisplayHome/>}></Route>
        <Route path="/album/:id" element={<AlbumsDetailPage/>} />
    </Routes>
  </div>
}
export default Display;