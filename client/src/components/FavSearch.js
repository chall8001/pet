import React from "react";
import "./FavSearch.css";

//define search and setSearch

function FavSearch({ onSearch, searchTerm }) {
  return (
    <div className="searchrow">
      <div className="column col-12 col-m-12 col-xl-12">
        <form>
          <input
            value={searchTerm}
            onChange={onSearch}
            className="form-control mr-sm-2"
            type="text"
            placeholder="search favorite"
          />
        </form>
      </div>
    </div>
  );
}

export default FavSearch;
