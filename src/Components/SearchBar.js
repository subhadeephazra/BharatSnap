import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

const SearchBar = ({ searchresultOut }) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    handleSearch();
  }, []);

  function handleSearch(e) {
    if (e) {
      e.preventDefault();
    }

    axios
      .get("https://api.unsplash.com/search/photos", {
        headers: {
          Authorization: `Client-ID ${process.env.REACT_APP_IMAGEBAZAAR_KEY}`,
        },
        params: {
          query: search || "random",
        },
      })
      .then((response) => {
        searchresultOut(response.data.results);
        setSearch("");
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // Handle errors as needed, e.g., set an error state
      });
  }

  return (
    <div className="searchbox">
      <form onSubmit={handleSearch}>
        <input
          type="search"
          name=""
          id=""
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: '300px' }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SearchBar;
