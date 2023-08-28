import React, { useState } from "react";
import Header from "../../widgets/Header/Header";
import Sidebar from "../../widgets/Sidebar/Sidebar";
import "./style.sass";
import MainContent from "../../widgets/MainContent/MainContent";

export default function Main() {

  return (
    <>
      <Header />
      <main className="main">
        <div className="container">
          <div className="main-inner">
            <Sidebar/>
            <MainContent />
          </div>
        </div>
      </main>
    </>
  );
}
