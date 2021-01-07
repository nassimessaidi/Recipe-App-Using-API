import React from "react";
import "./styles.css";

const SearchFiled = () => {
  return (
    <form className="form">
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          placeholder="Type Here To Search"
        />
        <button type="submit" className="btn btn-info btn-md">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchFiled;
