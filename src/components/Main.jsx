import { useState } from "react";

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

  return (
    <main className="container mt-4">
      <div className="d-flex mb-3">
        <form onSubmit={handleFormSubmit}>
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
          </li>
        ))}
      </ul>
    </main>
  );
}
