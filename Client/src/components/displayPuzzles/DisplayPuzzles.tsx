import { Link } from "react-router-dom";
import { IPuzzels } from "../../Interface/Interfaces";
import React, { useEffect, useState } from "react";
import DisplayOnePuzzle from "./DisplayOnePuzzle";

interface Props {
  puzzles: IPuzzels[];
}


export default function DisplayPuzzles({ puzzles }: Props) {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 700;
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  if (width < breakpoint) {
   return <DisplayOnePuzzle puzzles={puzzles}/>
  }
  return (
    <div className="card-list">
      {puzzles.map((puzzle, index) => (
        <div key={index} className="card">
          <div>
            <img src={puzzle.img} alt={puzzle.title} className="image-card" />
            <h3>{puzzle.title}</h3>
            <p>Content: {puzzle.content}</p>
            <p>Author: {puzzle.author}</p>
            <button>
              <Link to={`/Puzzle/${puzzle._id}`}>Open The Puzzle</Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
