"use client"

import FavoritesCourses from "@/components/homeAuth/favoriteCategory";
import FeaturedCategory from "@/components/homeAuth/featuredCategory";
import FeaturedSection from "@/components/homeAuth/featuresSection";
import ListCategories from "@/components/homeAuth/listCategories";
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
      <FeaturedCategory />
      <ListCategories />
      </Container>

      </main>
    </>
  );
};

export default HomeAuth;