import React, { useState } from "react";
import ReactDOM from "react-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import MainPage from "./components/MainPage/MainPage";

export default function App() {
  const [page, setPage] = useState("/main");

  const singInHandler = () => {
    setPage("/singIn");
  };

  const mainPageHeandler = () => {
    setPage("/main");
  };

  const submitFormHeandler = () => {
    setPage("/home");
  };

  return (
    <>
      {page == "/main" && <MainPage onSingIn={singInHandler} />}
      {page == "/singIn" && <MainPage onSingIn={singInHandler} />}
      {page == "/singIn" &&
        ReactDOM.createPortal(
          <LoginPage
            onMainPage={mainPageHeandler}
            onSubmitForm={submitFormHeandler}
          />,
          document.getElementById("login")
        )}
      {page=='/home' && <></>}
    </>
  );
}
