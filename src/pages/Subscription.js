import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../components/shared/Layout";
import ContentsLayout from "../components/shared/ContentsLayout";
import SubscriptionCard from "../components/subscription/SubscriptionCard";

function Subscription() {
  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
  const [isLoading, setIsLoading] = useState(true);
  const [loadedSub, setLoadedSub] = useState([]);

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
            maxResults: 20,
            key: apiKey,
          },
        }
      );
      setLoadedSub(response.data.items);
      // console.log(loadedSub);
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
      <Layout activeMenu="subscription">
        <section>
          <p>Loading...</p>
        </section>
      </Layout>
    );
  }

  return (
    <Layout activeMenu="subscription">
      <ContentsLayout>
        {loadedSub.map(function (data, index) {
          return (
            <SubscriptionCard data={data} key={`subscription-card-${index}`} />
          );
        })}
      </ContentsLayout>
    </Layout>
  );
}

export default Subscription;
