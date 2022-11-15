import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import "moment/locale/ko";
import styles from "./HomeCard.module.css";
import { RiEmotionUnhappyLine } from "react-icons/ri";
import { ProcessViewCount, ProcessUploadDate } from "../../utils";

function HomeCard({ data }) {
  // const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
  // const getData = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://www.googleapis.com/youtube/v3/channels",
  //       {
  //         params: {
  //           //url 뒤에 붙는 값
  //           part: "snippet",
  //           id: data.snippet.channelId,
  //           fields: "items(snippet(thumbnails))",
  //           key: apiKey,
  //         },
  //       }
  //     );
  //     console.log(response.data.items);
  //   } catch (e) {
  //     // 오류 발생
  //     console.error("error : ", e);
  //   }
  // };

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
          <RiEmotionUnhappyLine className={styles.channelImg} />
          {/* <img
            className={styles.channelImg}
            src={`https://www.youtube.com/channel/${data.snippet.channelId}`}
            alt={`${data.snippet.channelTitle} 프로필 사진`}
          /> */}
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
