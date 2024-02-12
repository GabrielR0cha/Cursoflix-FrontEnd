"use client";

import styles from "../../../../styles/episodePlayer.module.scss";
import Head from "next/head";
import { useEffect, useState } from "react";
import courseService, { CourseType } from "@/service/coursesSerivce";
import { useParams, useSearchParams } from "next/navigation";
import HeaderGeneric from "@/components/common/headerGenric";
import PageSpinner from "@/components/common/spinner";
import { Button, Container } from "reactstrap";
import ReactPlayer from "react-player";
import { useRouter } from "next/navigation";

const EpisodePlayer = function () {
 
  const router = useRouter();

  const { id }: any = useParams();
  const searchparam = useSearchParams();
  const courseId = searchparam.get("courseid");

  const [course, setCourse] = useState<CourseType>();

  const getCourse = async function () {
    if (typeof courseId !== "string") return;

    const res = await courseService.getEpisodes(courseId);
    if (res.status === 200) {
      setCourse(res.data);
    }
  };

  const handleLastEpisode = () => {
    router.push(`/courses/episode/${id - 1}?courseid=${course?.id}`);
  };

  const handleNextEpisode = () => {
    router.push(`/courses/episode/${id + 1}?courseid=${course?.id}`);
  };

  useEffect(() => {
    getCourse();
  }, [courseId]);



  if (course?.episodes === undefined) return <PageSpinner />;

  return (
    <>
      <Head>
        <title>Cursioflix - {course.episodes[id].order}</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <main>
        <HeaderGeneric
          logoUrl="/home"
          btnContent={`Voltar para o curso`}
          btnUrl={`/courses/${courseId}`}
        />
        <Container className="d-flex flex-column align-items-center gap-3 pt-3">
          <p className={styles.episodeTitle}>{course.episodes[id].name}</p>
          {typeof window == "undefined" ? null : (
            <ReactPlayer
              className={styles.player}
              url={`${
                process.env.NEXT_PUBLIC_BASEURL
              }/episodes/strem?videoUrl=${
                course.episodes[id].videoUrl
              }&token=${sessionStorage.getItem("cursoflix-token")}`}
              controls
            />
          )}
          <div className={styles.episodeButton}>
          <Button className={styles.episodeButton} disabled={id === 0 ? true : false}   onClick={handleNextEpisode}>&#x2B05;</Button>
          <Button className={styles.episodeButton} disabled={id+1 === course.episodes.length ? true : false}>&#x27A1;</Button>
          </div>
        </Container>
        <p className="text-center pb-4">
	{course.episodes[id].synopsis}
</p>
      </main>
    </>
  );
};

export default EpisodePlayer;
