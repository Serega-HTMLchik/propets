import React from "react";
import logo from '../../assets/LogoColor.svg'
import styles from './LoginPageCard.module.css'
import SingInButton from "./SingInComponent/SingInButton";
import SingUpButton from "./SingUpComponent/SingUpButton";
import SingUpForm from "./SingUpComponent/SingUpForm";

export default function LoginPageCard(props) {
    return <div className={styles.card}>
        <div className={styles.logo}>
            <img src={logo}/>
        </div>
        <div className={styles.buttons}>
            <SingInButton />
            <SingUpButton />
        </div>
        <SingUpForm onMainPage={props.onMainPage} onSubmitForm={props.onSubmitForm}/>
    </div>
}