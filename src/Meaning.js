import React from "react";
import Synonyms from "./Synonyms";
import Examples from "./Examples";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <Synonyms synonyms={props.meaning.synonyms} />
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div className="Definition" key={index}>
            <span className="Title">Definition:</span>
            <span className="Description"> {definition.definition}</span>
            <br />
            <Examples examples={definition.example} />
            <br />
          </div>
        );
      })}
    </div>
  );
}
