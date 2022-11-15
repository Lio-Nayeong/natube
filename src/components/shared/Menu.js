import React from "react";
import styles from "./Menu.module.css";
import { Link } from "react-router-dom";
import {
  MdHomeFilled,
  MdOutlineMovie,
  MdOutlineSubscriptions,
  MdOutlineLocalMovies,
} from "react-icons/md";
import { HiOutlineFire } from "react-icons/hi";
import {
  RiMusicLine,
  RiThumbUpLine,
  RiCheckboxMultipleLine,
} from "react-icons/ri";
import { AiOutlineBulb } from "react-icons/ai";
import { IoGameControllerOutline } from "react-icons/io5";
import { BsTrophy } from "react-icons/bs";
import { GiBackwardTime } from "react-icons/gi";

function Menu({ activeMenu }) {
  // console.log(activeMenu);
  return (
    <div className={styles.menu}>
      <div className={[styles.line, styles.onMini].join(" ")}>
        <Link
          to="/"
          className={activeMenu === "home" ? styles.focused : styles.link}
        >
          <MdHomeFilled
            // style={{ backgroundColor: "red" }}
            className={styles.icon}
          />
          <div className={styles.text}>홈</div>
        </Link>
        <div className={[styles.unavailable, styles.link].join(" ")}>
          <MdOutlineMovie className={styles.icon} />
          <div className={styles.text}>Shorts</div>
        </div>
        <Link
          to="/subscription"
          className={
            activeMenu === "subscription" ? styles.focused : styles.link
          }
        >
          <MdOutlineSubscriptions className={styles.icon} />
          <div className={styles.text}>구독</div>
        </Link>
      </div>

      <div className={[styles.line, styles.onMini].join(" ")}>
        <div className={[styles.unavailable, styles.link].join(" ")}>
          <RiCheckboxMultipleLine className={styles.icon} />
          <div className={styles.text}>보관함</div>
        </div>
        <div className={[styles.unavailable, styles.link].join(" ")}>
          <GiBackwardTime className={styles.icon} />
          <div className={styles.text}>시청 기록</div>
        </div>
        {/* <div className={styles.offMini}>
          <Link
            to="/trending"
            className={activeMenu === "trending" ? styles.focused : styles.link}
          >
            <RiThumbUpLine className={styles.icon} />
            <div className={styles.text}>좋아요 표시한 동영상</div>
          </Link>
        </div> */}
      </div>

      <div className={[styles.line, styles.offMini].join(" ")}>
        <div>탐색</div>
        <Link
          to="/trending"
          className={activeMenu === "trending" ? styles.focused : styles.link}
        >
          <HiOutlineFire className={styles.icon} />
          <div className={styles.text}>인기</div>
        </Link>
        <Link
          to="/music"
          className={activeMenu === "music" ? styles.focused : styles.link}
        >
          <RiMusicLine className={styles.icon} />
          <div className={styles.text}>음악</div>
        </Link>
        <div className={styles.unavailable}>
          <MdOutlineLocalMovies className={styles.icon} />
          <div className={styles.text}>영화</div>
        </div>
        <div className={styles.unavailable}>
          <IoGameControllerOutline className={styles.icon} />
          <div className={styles.text}>게임</div>
        </div>
        <div className={styles.unavailable}>
          <BsTrophy className={styles.icon} />
          <div className={styles.text}>스포츠</div>
        </div>
        <div className={styles.unavailable}>
          <AiOutlineBulb className={styles.icon} />
          <div className={styles.text}>학습</div>
        </div>
      </div>

      <div className={styles.offMini}>
        <div></div>
        <p className={styles.footer}>
          정보 보도자료 저작권
          <br />
          문의하기 크리에이터
          <br />
          광고 개발자
          <br />
          <br />
          약관 개인정보처리방침
          <br />
          정책 및 안전
          <br />
          NaTube 작동의 원리
          <br />
          새로운 기능 테스트하기
        </p>
      </div>
    </div>
  );
}

export default Menu;
