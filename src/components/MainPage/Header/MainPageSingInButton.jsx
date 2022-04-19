import React from "react";
import styles from './MainPageHeaderSingInButton.module.css'

export default function MainPageSingInButton(props){
    return <button className={styles.btn} onClick={props.onSingIn}>
        Sing in
    </button>
}