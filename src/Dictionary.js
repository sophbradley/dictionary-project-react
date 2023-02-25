import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results.js";
import Photos from "./Photos.js";

export default function Dictionary(props) {
  let [searchTerm, setSearchTerm] = useState(props.defaultSearchTerm);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiKey = `4a59f32a7t4edb6af6eb06o667b388a3`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${searchTerm}&key=${apiKey}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    const pexelsApiKey = `cNJslZvAKb6pjigETIVgfVHoUXJTI75vHboM4b4KT5rRIYyK8DiCzD7V`;
    const headers = { Authorization: `${pexelsApiKey}` };
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${searchTerm}&per_page=9`;
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function load() {
    setLoaded(true);
    search();
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleSearchTermChange(event) {
    setSearchTerm(event.target.value);
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              className="form-control searchForm"
              onChange={handleSearchTermChange}
              defaultValue={props.defaultSearchTerm}
            />
          </form>
          <div className="hint">For example: sunset, yoga, cats, Hawaii...</div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
