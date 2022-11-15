import moment from "moment";
import "moment/locale/ko";
import { ProcessViewCount, ProcessUploadDate } from "../../utils";
import styles from "./HorizontalCard.module.css";

function HorizontalCard({ data }) {
  return (
    <a href={`https://www.youtube.com/watch?v=${data.id}`}>
      <div className={styles.card}>
        <img
          className={styles.thumbnail}
          src={data.snippet.thumbnails.medium.url}
          alt={`${data.snippet.title}의 썸네일`}
        />
        <div className={styles.info}>
          <div className={styles.title}>{data.snippet.title}</div>
          <div className={styles.meta}>
            <a
              href={`https://www.youtube.com/channel/${data.snippet.channelId}`}
              className={styles.uploader}
            >
              {data.snippet.channelTitle}
            </a>
            <div className={styles.view}>
              {ProcessViewCount(data.statistics.viewCount)}
            </div>
            <div className={styles.date}>
              {ProcessUploadDate(moment(data.snippet.publishedAt))}
            </div>
          </div>
          <div className={styles.desc}>{data.snippet.description}</div>
        </div>
      </div>
    </a>
  );
}
export default HorizontalCard;
