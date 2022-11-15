import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import styles from "./Trending.module.css";
import Layout from "../components/shared/Layout";
import ContentsLayout from "../components/shared/ContentsLayout";
import HorizontalCard from "../components/shared/HorizontalCard";
import trending_avatar from "../images/trending_avatar.png";

function Trending() {
  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
  const [isLoading, setIsLoading] = useState(true);
  const [loadedTrend, setLoadedTrend] = useState([]);

  const getData = async () => {
    // 상수로 만들어야 불변함
    try {
      // try, catch로 예외 처리하기
      setIsLoading(true);
      const response = await axios.get(
        "https://www.googleapis.com/youtube/v3/videos",
        {
          params: {
            //url 뒤에 붙는 값
            part: "snippet,statistics",
            chart: "mostPopular",
            maxResults: 20,
            key: apiKey,
          },
        }
      );
      setLoadedTrend(response.data.items);
      // console.log(loadedTrend);
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
      <Layout activeMenu="trending">
        <section>
          <p>Loading...</p>
        </section>
      </Layout>
    );
  }

  return (
    <Layout activeMenu="trending">
      <ContentsLayout>
        <div className={styles.container}>
          <img
            src={trending_avatar}
            alt="인기"
            className={styles.trendingImage}
          />
          <div className={styles.title}>인기</div>
        </div>
        {loadedTrend.map(function (data, index) {
          return <HorizontalCard key={`trending-card-${index}`} data={data} />;
        })}
      </ContentsLayout>
    </Layout>
  );
}
export default Trending;
