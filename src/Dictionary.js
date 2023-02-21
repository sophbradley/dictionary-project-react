import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [searchTerm, setSearchTerm] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for the meaning of ${searchTerm}`);
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
    </div>
  );
}
