import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import "moment/locale/ko";
import styles from "./HomeCard.module.css";
import { ProcessViewCount, ProcessUploadDate } from "../../utils";

function HomeCard({ data, apiKey }) {
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
    <a
      href={`https://www.youtube.com/watch?v=${data.id}`}
      className={styles.card}
    >
      <img
        className={styles.thumbnail}
        src={data.snippet.thumbnails.medium.url}
        alt={`${data.snippet.title}의 썸네일`}
      />
      <div className={styles.info}>
        <a href={`https://www.youtube.com/channel/${data.snippet.channelId}`}>
          <img
            className={styles.channelImg}
            src={thumbnailUrl}
            alt={`${data.snippet.channelTitle} 프로필 사진`}
          />
        </a>

        <div>
          <div className={styles.title}> {data.snippet.title}</div>
          <div className={styles.uploader}>{data.snippet.channelTitle}</div>
          <div className={styles.flex}>
            <div className={styles.view}>
              {ProcessViewCount(data.statistics.viewCount)}
            </div>
            <div className={styles.date}>
              {ProcessUploadDate(moment(data.snippet.publishedAt))}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default HomeCard;
