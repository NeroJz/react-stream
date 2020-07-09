import React, { useState } from "react";

const Search = () => {
  const [term, setTerm] = useState("");

  const onTextChange = (value) => {
    setTerm(value);
  };

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => onTextChange(e.target.value)}
            className="input"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
