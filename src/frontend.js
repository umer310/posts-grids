import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import ReactDOM from "react-dom";

import "./frontend.scss";

const divsToUpdate = document.querySelectorAll(".paying-attention-update-me");

divsToUpdate.forEach(function (div) {
  const data = JSON.parse(div.querySelector("pre").innerHTML);
  ReactDOM.render(<Quiz {...data} />, div);
  div.classList.remove("paying-attention-update-me");
});
function Quiz(props) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          `/wp-json/wp/v2/posts?filter[category_name]=${props.selectCategory}&per_page=${props.numberOfPosts}&order=asc `
        );
        setData(response);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);
  onChangeHandler = async (e) => {
    this.search(e.target.value);
    this.setState({ value: e.target.value });
  };
  if (loading) return <p>Loading...</p>;
  return (
    <div className="paying-attention-frontend">
      <input
        value={this.state.value}
        onChange={(e) => this.onChangeHandler(e)}
        placeholder="Type something to search"
      />
      <p>{console.log(data, props)} working</p>

      {data.map((post) => {
        return <h2>{post.title.rendered}</h2>;
      })}
    </div>
  );
}
