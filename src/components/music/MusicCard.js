import moment from "moment";
import "moment/locale/ko";
import { ProcessViewCount, ProcessUploadDate } from "../../utils";
import styles from "./MusicCard.module.css";

function MusicCard({ data, index }) {
  if (index == 0) {
    // console.log(index);
    return (
      <div className={styles.mainContainer}>
        <a href={`https://www.youtube.com/watch?v=${data.id}`}>
          <div className={styles.mainCard}>
            <img
              className={styles.mainThumbnail}
              src={data.snippet.thumbnails.maxres.url}
              alt={`${data.snippet.title}의 썸네일`}
            />
            <div className={styles.mainInfo}>
              <div className={styles.mainTitle}>{data.snippet.title}</div>
              <div className={styles.mainMeta}>
                <a
                  href={`https://www.youtube.com/channel/${data.snippet.channelId}`}
                  className={styles.mainUploader}
                >
                  {data.snippet.channelTitle}
                </a>
                <div className={styles.mainView}>
                  {ProcessViewCount(data.statistics.viewCount)}
                </div>
                <div className={styles.mainDate}>
                  {ProcessUploadDate(moment(data.snippet.publishedAt))}
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
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
      </div>
    );
  }
}
export default MusicCard;
