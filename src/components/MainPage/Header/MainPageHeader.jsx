import React from "react";
import styles from "./MainPageHeader.module.css";
import logo from '../../../assets/Logo.svg'
import MainPageSingInButton from "./MainPageSingInButton";

export default function MainPageHeader(props) {
  return (
    <div className={styles.header}>
      <div className={styles.nav}>
        <div className={styles.logo}>
            <img src={logo}/>
        </div>
        <div className={styles.btn}>
            <MainPageSingInButton onSingIn={props.onSingIn}/>
        </div>
      </div>
    </div>
  );
}
