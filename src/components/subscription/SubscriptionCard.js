import HorizontalCard from "../shared/HorizontalCard";
import styles from "./SubscriptionCard.module.css";
import { RiEmotionUnhappyLine } from "react-icons/ri";

function SubscriptionCard({ data }) {
  return (
    <div className={styles.card}>
      <a
        className={styles.uploader}
        href={`https://www.youtube.com/channel/${data.snippet.channelId}`}
      >
        {/* <img
          className={styles["channel-image"]}
          src={data.channelThumbnail}
          alt={`${data.channelTitle} 프로필 사진`}
        /> */}
        <RiEmotionUnhappyLine className={styles["channel-image"]} />
        <div className={styles.name}>{data.snippet.channelTitle}</div>
      </a>
      <div className={styles.body}>
        <HorizontalCard data={data} />
      </div>
    </div>
  );
}

export default SubscriptionCard;
