"use client"

import FavoritesCourses from "@/components/homeAuth/favoriteCategory";
import FeaturedSection from "@/components/homeAuth/featuresSection";
import NewestCategory from "@/components/homeAuth/newestCategory";
import Head from "next/head";
import { Container } from "reactstrap";



const HomeAuth =  () => {
  return (
    <>
			<Head>
        <title>CursoFlix - Home</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <main>
      <FeaturedSection />
      <Container>

      <NewestCategory />
      <FavoritesCourses />
      </Container>

      </main>
    </>
  );
};

export default HomeAuth;