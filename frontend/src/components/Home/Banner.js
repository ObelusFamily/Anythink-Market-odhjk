import React, { useState } from "react";
import agent from "../../agent";
import logo from "../../imgs/logo.png";

const Banner = (props) => {
  const [filterSearch, setFilterSearch] = useState("");
  const [hasTyped3Chars, setHasTyped3Chars] = useState(false);

  const handleFilterSearchChange = (e) => {
    const value = e.target.value;
    setFilterSearch(value);
    if (hasTyped3Chars || (value && value.length >= 3)) {
      setHasTyped3Chars(true);
      props.onItemTitleChange(
        value,
        (page) => agent.Items.byTitle(value, page),
        agent.Items.byTitle(value)
      );
    }
  };

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span id="get-part">A place to get</span>
          <input
            type="text"
            placeholder="What is it that you truly desire?"
            value={filterSearch}
            onChange={handleFilterSearchChange}
            name="title"
            style={{ margin: "0 20px" }}
            id="search-box"
          />
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
