import React from "react";
import Synonyms from "./Synonyms";
import Examples from "./Examples";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <Synonyms synonyms={props.meaning.synonyms} />
      <h3>{props.meaning.partOfSpeech}</h3>

      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <strong>Definition:</strong> {definition.definition}
            <br />
            <Examples examples={definition.example} />
            <br />
          </div>
        );
      })}
    </div>
  );
}
