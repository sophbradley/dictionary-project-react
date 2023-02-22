import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results.js";

export default function Dictionary() {
  let [searchTerm, setSearchTerm] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = `4a59f32a7t4edb6af6eb06o667b388a3`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${searchTerm}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSearchTerm(event) {
    event.preventDefault();
    setSearchTerm(event.target.value);
  }

  return (
    <div className="Dictionary">
      <div className="row">
        <div className="col-6">What word do you want to look up?</div>
        <div className="col-6">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              className="form-control searchForm"
              onChange={handleSearchTerm}
            />
          </form>
        </div>
      </div>
      <Results results={results} />
    </div>
  );
}
