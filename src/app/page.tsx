"use client"

import CardsSection from "@/components/homeNotAuth/cardsSection";
import HeaderNoAuth from "@/components/homeNotAuth/headerNotAuth";
import PresentationSection from "@/components/presentationSection";
import Head from "next/head";
import styles from "../../styles/page.module.scss"
 const HomeNotAuth = function () {
  return (
    <>
      <Head>
        <title>Cursoflix</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
				<meta property="og:title" content="Cursoflix" key="title" />
				<meta name="description" content="Tenha acesso aos melhores conteúdos sobre programação de uma forma simples e fácil."/>
      </Head>
      <main>
      <div className={styles.sectionBackground}>
      <HeaderNoAuth/>
        <PresentationSection/>
      </div>
      <CardsSection/>
      </main>
    </>
  );
};

export default HomeNotAuth
