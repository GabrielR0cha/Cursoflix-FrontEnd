"use client";

import "../styles/globals.scss"
import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/page.module.scss";
import CardsSection from "@/components/homeNotAuth/cardsSection";
import HeaderNoAuth from "@/components/homeNotAuth/headerNotAuth";
import SlideSection from "@/components/homeNotAuth/slideSection";
import PresentationSection from "@/components/presentationSection";
import courseService, { CourseType } from "@/service/coursesSerivce";
import Footer from "@/components/common/footer";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeNotAuth = () => {
  const [newestCourses, setNewestCourses] = useState<CourseType[]>([]);

  useEffect(() => {
    const fetchNewestCourses = async () => {
      try {
        const res = await courseService.getNewestCourses();
        setNewestCourses(res.data);
      } catch (error) {
        console.error("Error fetching newest courses:", error);
      }
    };

    fetchNewestCourses();
    AOS.init();

    return () => {
      AOS.refresh();
    };
  }, []);
  

  return (
    
    <>
    
      <Head>
        <title>Cursoflix</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <meta property="og:title" content="Cursoflix" key="title" />
        <meta
          name="description"
          content="Tenha acesso aos melhores conteúdos sobre programação de uma forma simples e fácil."
        />
      </Head>
      <main>
        <div
          className={styles.sectionBackground}
          data-aos="fade-zoom-in"
          data-aos-duration="1600"
        >
          <HeaderNoAuth />
          <PresentationSection />
        </div>
        <div data-aos="fade-right" data-aos-duration="1200">
          <CardsSection />
        </div>
        <div data-aos="fade-up" data-aos-duration="1350">
          <SlideSection newestCourses={newestCourses} />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default HomeNotAuth;
