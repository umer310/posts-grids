import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactDOM from "react-dom";

import "./frontend.scss";

const divsToUpdate = document.querySelectorAll(".paying-attention-update-me");

divsToUpdate.forEach(function (div) {
  const data = JSON.parse(div.querySelector("pre").innerHTML);
  ReactDOM.render(<Quiz {...data} />, div);
  div.classList.remove("paying-attention-update-me");
});

function Quiz({
  paddingForMainBox,
  favoriteColor,
  borderMainBox,
  fontSizeM,
  fontColorForMain,
  paddingForContentBox,
  className,
  selectCategory,
  numberOfPosts,
  toggle,
}) {
  console.log(
    paddingForMainBox,
    favoriteColor,
    borderMainBox,
    fontSizeM,
    fontColorForMain,
    paddingForContentBox,
    className,
    selectCategory,
    numberOfPosts,
    toggle
  );

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(null);
  const [image, setImage] = useState({});
  const [autor, setAutor] = useState("");
  const [categories, setCategories] = useState({});

  const mainStyle = {
    paddingTop: paddingForMainBox == undefined ? "10px" : paddingForMainBox.top,
    paddingRight:
      paddingForMainBox == undefined ? "10px" : paddingForMainBox.right,
    paddingBottom:
      paddingForMainBox == undefined ? "10px" : paddingForMainBox.bottom,
    paddingLeft:
      paddingForMainBox == undefined ? "10px" : paddingForMainBox.left,
    backgroundColor: favoriteColor == undefined ? "#DDDDDD" : favoriteColor,
    borderColor: borderMainBox == undefined ? "#72aee6" : borderMainBox.color,
    borderStyle: borderMainBox == undefined ? "solid" : borderMainBox.style,
    borderWidth: borderMainBox == undefined ? "1px" : borderMainBox.width,
    fontSize: fontSizeM == undefined ? "16px" : fontSizeM,
    color: fontColorForMain == undefined ? "#232323" : fontColorForMain,
  };
  const contentStyle = {
    paddingTop:
      paddingForContentBox == undefined ? "10px" : paddingForContentBox.top,
    paddingRight:
      paddingForContentBox == undefined ? "10px" : paddingForContentBox.right,
    paddingBottom:
      paddingForContentBox == undefined ? "10px" : paddingForContentBox.bottom,
    paddingLeft:
      paddingForContentBox == undefined ? "10px" : paddingForContentBox.left,
  };
  // console.log(props);
  let newStories = [];
  let categoriesArray = [];

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          toggle == false
            ? `/wp-json/wp/v2/posts?filter[category_name]=${selectCategory}&per_page=${
                numberOfPosts == null ? 6 : numberOfPosts
              }&order=asc`
            : value == null
            ? `/wp-json/wp/v2/posts?filter[category_name]=${selectCategory}&per_page=${
                numberOfPosts == null ? 6 : numberOfPosts
              }&order=asc`
            : `/wp-json/wp/v2/posts?filter[category_name]=${selectCategory}&per_page=${
                numberOfPosts == null ? 6 : numberOfPosts
              }&order=asc&search=${value == "" ? null : value}`
        );

        setData(response);
        response.map((post, i) => {
          // console.log(post.categories);
          axios
            .get(`/wp-json/wp/v2/media/${post.featured_media}`)
            .then((res) => {
              newStories.push(res.data);
              setImage(newStories);
            })
            .catch((err) => {
              console.log(err);
            });
        });
        response.map((post, i) => {
          axios
            .get(`/wp-json/wp/v2/users/${post.author}  `)
            .then((res) => {
              setAutor(res.data);
            })
            .catch((err) => {
              console.log(err);
            });
        });
        response.map((post, i) => {
          // console.log(i);
          // console.log(post.categories);
          let onePostCategory = [];
          post.categories.map((category, a) => {
            // console.log(category);
            axios
              .get(`/wp-json/wp/v2/categories/${category}  `)
              .then((res) => {
                onePostCategory.push(res.data);
                categoriesArray.push(onePostCategory);
              })
              .catch((err) => {
                console.log(err);
              });
          });
          setCategories(categoriesArray);
        });
      } catch (error) {
        console.error(error);
      }

      setLoading(false);
    };

    fetchData();
  }, [value]);

  const onChangeInputHandlar = async (e) => {
    const val = e.target.value;
    setValue(val);
  };

  // if (loading && image) return <p>Loading...</p>;

  if (image && loading) {
    return (
      <>
        <h3>loading</h3>
      </>
    );
  }
  return (
    <div className={"paying-attention-frontend  " + className}>
      {toggle == false ? (
        ""
      ) : (
        <div className="searchBar">
          <input
            value={value}
            placeholder="Type something to search"
            type="text"
            onChange={onChangeInputHandlar}
          />
        </div>
      )}

      <div className="layout">
        {image &&
          data.map((post, i) => {
            const date = new Date(post.date.split("T")[0]);
            const day = String(date.getDate()).padStart(2, "0");

            return (
              <div className={"cell  " + post.id} style={mainStyle}>
                {image[i] && (
                  <img src={image[i].source_url} alt={image[i].alt_text} />
                )}
                <div className="post-content" style={contentStyle}>
                  <div className="post-mata">
                    {autor && (
                      <a className="post-user" href={autor.url}>
                        {autor.name}
                      </a>
                    )}
                    {categories[i] &&
                      categories[i].map((postscat) => {
                        return (
                          <a className="post-category" href={postscat.link}>
                            {postscat.name}{" "}
                          </a>
                        );
                      })}
                  </div>

                  <h2 className="post-title">{post.title.rendered}</h2>

                  <div className="post-date">
                    {day}-{monthNames[date.getMonth()]}-{date.getFullYear()}
                  </div>
                  <div className="post-expcerpt">
                    {" "}
                    {post.excerpt.rendered
                      .replace(/(<([^>]+)>)/gi, "")
                      .slice(0, 100)
                      .concat("...")}
                  </div>
                  <a className="post-btn" href={post.link}>
                    Read More
                  </a>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
Quiz.defaultProps = {};

export default Quiz;
