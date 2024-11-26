import { useContext, useState } from "react";
import { IComment, IPuzzels, IUser } from "../Interface/Interfaces";
import { PuzzelContext } from "../Provider/PuzzelsProvider";
import useFatch from "../Hooks/useFetch";
import { Link, NavLink } from "react-router-dom";
const env = import.meta.env;
const version = env.VITE_PORT;
const url = `http://localhost:${version}/post`;

const AddPuzzleComp = () => {
  const { puzzels, setPuzzels } = useContext(PuzzelContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [comments, setCommebts] = useState<IComment[]>([]);
  const { postFetch, data } = useFatch<IPuzzels[]>(url);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newPuzzele = { title, content };
    postFetch(newPuzzele);
    setPuzzels(data!);
  };

  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">title</label>
            <input
              id="title"
              type="text"
              value={title}
              placeholder="title"
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="content">content</label>
            <input
              id="content"
              type="text"
              value={content}
              placeholder="content"
              onChange={(event) => {
                setContent(event.target.value);
              }}
            />
          </div>

          <button type="submit">Add a new puzzele</button>

          <NavLink to={"/"} className="link-go-back">
            go to puzzels
          </NavLink>
        </form>
      </div>
    </>
  );
};

export default AddPuzzleComp;
