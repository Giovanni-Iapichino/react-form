import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Main() {
  const [articleList, setArticleList] = useState([
    "Articolo di Cronaca",
    "Articolo d'Opinione",
    "Articolo Culturale o Speciaistico",
    "Articolo di Informazione",
    "Articolo di critica",
  ]);
  const [newArticle, setNewArticle] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newArticleList = [...articleList, newArticle];
    setArticleList(newArticleList);
    setNewArticle("");
  };

  const handleDelete = (indexToRemove) => {
    const updatedList = articleList.filter(
      (_, index) => index !== indexToRemove
    );
    setArticleList(updatedList);
  };

  return (
    <main className="container mt-4 d-flex justify-content-center align-items-center flex-column gap-2">
      <div className="mb-3">
        <form className="d-flex flex-column" onSubmit={handleFormSubmit}>
          <input
            type="text"
            value={newArticle}
            className="form-control grow-1"
            onChange={(e) => {
              setNewArticle(e.target.value);
            }}
          />
          <button className="btn btn-primary mt-2" type="submit">
            Add
          </button>
        </form>
      </div>

      <ul className="list-group">
        {articleList.map((title, index) => (
          <li key={index} className="list-group-item">
            {title}
            <FontAwesomeIcon
              className="ms-2"
              icon={faTrash}
              style={{ cursor: "pointer", color: "grey" }}
              onClick={() => handleDelete(index)}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
