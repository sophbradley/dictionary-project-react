import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <p>
        <strong>Synonyms:</strong>
        <ul>
          {" "}
          {props.synonyms.map(function (synonyms, index) {
            return (
              <li>
                <div key={index}>{synonyms}</div>
              </li>
            );
          })}
        </ul>
      </p>
    );
  } else {
    return null;
  }
}
