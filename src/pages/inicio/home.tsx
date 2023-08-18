"use client";

import styles from "../../styles/page.module.css";
import MenuMobile from "../../components/menuMobile/MenuMobile";
import TrilhaeInfo from "../../components/TrilhaeInfo";
import MenuTopo from "../../components/MenuTopo";
import Header from "../../components/Header";

export default function Home() {
  return (
    <div className={styles.container}>
        <Header />
       <MenuTopo />
      <TrilhaeInfo/>
      <MenuMobile/>  
    </div>
  );
}