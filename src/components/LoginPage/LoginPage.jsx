import React from "react";
import LoginPageCard from "./LoginPageCard";
import styles from './LoginPage.module.css'

export default function LoginPage(props){
    return <div className={styles.loginPage}>
        <LoginPageCard onMainPage={props.onMainPage} onSubmitForm={props.onSubmitForm}/>
    </div>
}