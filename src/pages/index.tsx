"use client"
import "../../styles/globals.scss";

import CardsSection from "@/components/homeNotAuth/cardsSection";
import HeaderNoAuth from "@/components/homeNotAuth/headerNotAuth";
import SlideSection from "@/components/homeNotAuth/slideSection";
import PresentationSection from "@/components/presentationSection";
import courseService, { CourseType } from "@/service/coursesSerivce";
import { GetStaticProps } from "next";
import Head from "next/head";
import { ReactNode } from "react";
import styles from "../../styles/page.module.scss"
import Footer from "@/components/common/footer";

interface IndexPageProps {
  children?: ReactNode;
  course: CourseType[];
}



 const HomeNotAuth = ({course}:IndexPageProps) => {
 

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
      <SlideSection newestCourses={course}/>
      <Footer/>

      </main>
    </>
  );
};

export const getStaticProps:GetStaticProps = async () => {
  const res = await courseService.getNewestCourses();
  return {
    props: {
      course: res.data,
    },
    revalidate: 3600 * 24
  };
};



export default HomeNotAuth
