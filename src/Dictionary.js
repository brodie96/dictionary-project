import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "563492ad6f917000010000012394bcb959e442c6bb4d36ecb8d6decc";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }
  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={search}>
          <input type="search" onChange={handleKeywordChange} />
        </form>
        <div className="Hint">
          <em> Suggested Words: Dog, Sunrise, Pineapple, House...</em>
        </div>
      </section>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
