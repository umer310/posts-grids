// use-fetch-data.js
import { useEffect, useState } from "react";
import axios from "axios";

const useFetchData = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get("/wp-json/wp/v2/posts");
        setData(response);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return {
    data,
    loading,
  };
};

export default useFetchData;
// useEffect(() => {
//   const fetchImages = async () => {
//     try {
//       const { image: res } = await axios.get(`/wp-json/wp/v2`);

//       setImage(res);
//     } catch (error) {
//       console.error(error);
//     }
//     setimagLoading(false);
//   };
//   fetchImages();
// }, []);
