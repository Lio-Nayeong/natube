import React from "react";
import { Link } from "react-router-dom";
import natube_logo from "../../images/natube_logo.png";
import styles from "./Header.module.css";
import { FcMenu } from "react-icons/fc";
import { IoSearchOutline } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import { HiOutlineDotsVertical } from "react-icons/hi";

function Header({ toggleMenu }) {
  return (
    <div className={styles.header}>
      <div className={styles.tab}>
        <FcMenu className={styles.icon} onClick={() => toggleMenu()} />
        <Link to="/">
          <img src={natube_logo} alt="로고" className={styles.logo} />
        </Link>
      </div>
      <div className={styles["center-tab"]}>
        <input className={styles.input} placeholder="검색" />
        <IoSearchOutline className={styles["search-icon"]} />
      </div>
      <div className={styles.tab}>
        <IoSearchOutline className={styles["search-icon-mini"]} />
        <HiOutlineDotsVertical
          className={styles.icon}
          color="rgba(128, 128, 128, 0.8)"
        />
        <BsPersonCircle className={styles.icon} color="#065fd4" />
        <div className={styles.login}>로그인</div>
      </div>
    </div>
  );
}

export default Header;
