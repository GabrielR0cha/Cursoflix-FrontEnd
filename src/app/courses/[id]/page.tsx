"use client"
import HeaderAuth from "@/components/common/headerAuth";
import courseService, { CourseType } from "@/service/coursesSerivce";
import Head from "next/head";
import { useParams } from 'next/navigation'
import { useEffect, useState } from "react";

const CoursePage =  () => {
  const [course, setCourse] = useState<CourseType>();
  const {id} = useParams()

  const getCourse = async function () {
    if (typeof id !== "string") return;
  
    const res = await courseService.getEpisodes(id);
  
    if (res.status === 200) {
      setCourse(res.data);
    }
  };

  useEffect(() => {
    getCourse();
  }, [id]);
  
  return (
    <>
      <Head>
        <title>CursoFlix - {"nomeDoCurso"}</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <main>
				<HeaderAuth />
        <p>{course?.name}</p>
			</main>
    </>
  );
};

export default CoursePage;