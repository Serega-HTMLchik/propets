import React from "react";
import MainPageHeader from "./Header/MainPageHeader";
import styles from './MainPage.module.css'
import MainPageWelcome from "./Welcome/MainPageWelcome";

export default function MainPage(props) {
    return <div>
        <MainPageHeader onSingIn={props.onSingIn}/>
        <MainPageWelcome onSingIn={props.onSingIn}/>
    </div>
}
