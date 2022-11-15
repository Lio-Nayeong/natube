import React, { useState } from "react";
import styles from "./Layout.module.css";
import Header from "./Header";
import Menu from "./Menu";

function Layout({ children, activeMenu }) {
  // children : Layout 컴포넌트를 일반 태그처럼 사용
  const [menu, setMenu] = useState(true);
  const toggleMenu = () => {
    setMenu(!menu); // on,off 개념 boolean
    // console.log(menu);
  };
  return (
    <div className={styles.container}>
      <Header toggleMenu={toggleMenu} />
      <div className={styles.layout}>
        {menu && <Menu activeMenu={activeMenu} />}
        <div className={menu ? styles.contents : styles.offMenu}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
