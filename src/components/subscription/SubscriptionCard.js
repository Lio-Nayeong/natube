import React, { useState, useEffect } from "react";
import axios from "axios";
import HorizontalCard from "../shared/HorizontalCard";
import styles from "./SubscriptionCard.module.css";

function SubscriptionCard({ data, apiKey }) {
  const [thumbnailUrl, setThumbnailUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/youtube/v3/channels",
          {
            params: {
              part: "snippet",
              id: data.snippet.channelId,
              fields: "items(snippet(thumbnails))",
              key: apiKey,
            },
          }
        );
        setThumbnailUrl(response.data.items[0].snippet.thumbnails.default.url);
      } catch (error) {
        console.error("error: ", error);
      }
    };

    fetchData();
  }, [data.snippet.channelId, apiKey]);

  return (
    <div className={styles.card}>
      <a
        className={styles.uploader}
        href={`https://www.youtube.com/channel/${data.snippet.channelId}`}
      >
        <img
          className={styles["channel-image"]}
          src={thumbnailUrl}
          alt={`${data.channelTitle} 프로필 사진`}
        />
        <div className={styles.name}>{data.snippet.channelTitle}</div>
      </a>
      <div className={styles.body}>
        <HorizontalCard data={data} />
      </div>
    </div>
  );
}

export default SubscriptionCard;
