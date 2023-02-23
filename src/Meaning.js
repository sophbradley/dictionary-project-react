import React from "react";
import "./Meaning.css";
import Example from "./Example";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      <p>
        <strong>Definition:</strong> {props.meaning.definition}
      </p>
      <Example example={props.meaning.example} />
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
