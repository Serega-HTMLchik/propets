import React from "react";
import styles from "./SingUpForm.module.css";

export default function SingUpForm(props) {
  return (
    <div className={styles.cont}>
      <div className={styles.form}>
        <form>
          <div className={styles.contForm}>
            <div className={styles.label}>
              <label htmlFor="name">Name: </label>
              <label htmlFor="mail">Email: </label>
              <label htmlFor="password">Password: </label>
              <label htmlFor="repass">Password: </label>
            </div>
            <div>
              <input id="name" placeholder='Adrian Spirs'/>
              <input id="mail" placeholder='srirs@gmail.com'/>
              <input id="password" placeholder="********"/>
              <input id="repass" placeholder="********"/>
            </div>
          </div>
        </form>
      </div>
      <div className={styles.info}></div>
      <div className={styles.btnCont}>
        <div className={styles.infotext}>
          By clicking “Submit”, you agree to us processing your information in
          accordance with these terms.
        </div>
        <button className={styles.cancelBtn} onClick={props.onMainPage}>Cancel</button>
        <button className={styles.submitBtn} onClick={props.onSubmitForm}>Submit</button>
      </div>
    </div>
  );
}
