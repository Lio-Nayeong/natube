import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Home.module.css";
import Layout from "../components/shared/Layout";
import HomeFilter from "../components/home/HomeFilter";
import HomeCard from "../components/home/HomeCard";

const target = [
  "공사중",
  "Autos & Vehicles",
  "Music",
  "Sports",
  "Gaming",
  "Comedy",
  "Education",
];
// 2: "Autos & Vehicles",
// 1: "Film & Animation",
// 10: "Music",
// 15: "Pets & Animals",
// 17: "Sports",
// 18: "Short Movies",
// 19: "Travel & Events",
// 20: "Gaming",
// 21: "Videoblogging",
// 22: "People & Blogs",
// 23: "Comedy",
// 24: "Entertainment",
// 25: "News & Politics",
// 26: "Howto & Style",
// 27: "Education",
// 28: "Science & Technology",
// 29: "Nonprofits & Activism",
// 30: "Movies",
// 31: "Anime/Animation",
// 32: "Action/Adventure",
// 33: "Classics",
// 34: "Comedy",
// 35: "Documentary",
// 36: "Drama",
// 37: "Family",
// 38: "Foreign",
// 39: "Horror",
// 40: "Sci",
// 41: "Thriller",
// 42: "Shorts",
// 43: "Shows",
// 44: "Trailers",

function Home() {
  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
  const [isLoading, setIsLoading] = useState(true);
  const [loadedHome, setLoadedHome] = useState([]);
  const [filter, setFilter] = useState("전체");

  const getData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        "https://www.googleapis.com/youtube/v3/videos",
        {
          params: {
            //url 뒤에 붙는 값
            part: "snippet,statistics",
            chart: "mostPopular",
            regionCode: "KR",
            maxResults: 36,
            key: apiKey,
          },
        }
      );
      setLoadedHome(response.data.items);
      // console.log(loadedHome);
    } catch (e) {
      // 오류 발생
      console.error("error : ", e);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return (
      <Layout activeMenu="home">
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className="card">
              <div className={styles.thumbnail}></div>
              <div className={styles.info}>
                <div className={styles.channel}></div>
                <div className={styles.title}></div>
                <div className={styles.content}></div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  function mapFunc(data, index) {
    return (
      <HomeFilter
        filter={filter}
        text={data}
        onClickFilter={function () {
          setFilter(data);
        }}
        key={`home-filter-${index}`}
      />
    );
  }

  function filterFunc(data) {
    if (filter === "전체" || data.categoryId === filter) return true;
    return false;
  }

  return (
    <Layout activeMenu="home">
      <div className={styles.header}>{target.map(mapFunc)}</div>
      <div className={styles.container}>
        <div className={styles.grid}>
          {loadedHome.map(function (data, index) {
            return (
              <HomeCard
                key={`home-card-${index}`}
                data={data}
                apiKey={apiKey}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export default Home;
