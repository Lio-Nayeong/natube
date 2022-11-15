import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../components/shared/Layout";
import MusicCard from "../components/music/MusicCard";
import ContentsLayout from "../components/shared/ContentsLayout";

function Music() {
  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMusic, setLoadedMusic] = useState([]);

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
            videoCategoryId: 10,
            maxResults: 20,
            key: apiKey,
          },
        }
      );
      setLoadedMusic(response.data.items);
      //   console.log(loadedMusic);
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
      <Layout activeMenu="music">
        <section>
          <p>Loading...</p>
        </section>
      </Layout>
    );
  }

  return (
    <Layout activeMenu="music">
      <ContentsLayout>
        {loadedMusic.map(function (data, index) {
          return (
            <MusicCard key={`music-card-${index}`} data={data} index={index} />
          );
        })}
      </ContentsLayout>
    </Layout>
  );
}

export default Music;
