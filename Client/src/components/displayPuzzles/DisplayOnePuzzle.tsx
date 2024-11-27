import { useState } from "react";
import { IPuzzels } from "../../Interface/Interfaces";
import { Link } from "react-router-dom";

interface Props {
  puzzles: IPuzzels[];
}

const DisplayOnePuzzle = ({ puzzles }: Props) => {
  const [imageIndex, setImageIndex] = useState(0);

  function nextIndex() {
    setImageIndex((index) => {
      if(index === puzzles.length - 1){
        return 0;
      }
      return index + 1;
    });
  }

  function backIndex() {
    setImageIndex((index) => {
      if(index === 0){
        return puzzles.length - 1;
      }
      return index - 1;
    });
  }

  return(
    <>
        <div key={imageIndex} className="card">
        <div>
        <img src={puzzles[imageIndex].img} alt={puzzles[imageIndex].title} className="image-card" />
        <h3>{puzzles[imageIndex].title}</h3>
        <p>Content: {puzzles[imageIndex].content}</p>
        <p>Author: {puzzles[imageIndex].author}</p>
        <button>
          <Link to={`/Puzzle/${puzzles[imageIndex]._id}`}>Open The Puzzle</Link>
        </button>
        <button onClick={nextIndex}>Next</button>
        <button onClick={backIndex}>Back</button>
      </div>
    </div>
    </>
  )
   
};

export default DisplayOnePuzzle;
