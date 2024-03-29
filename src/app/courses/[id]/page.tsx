"use client";
import HeaderAuth from "@/components/common/headerAuth";
import PageSpinner from "@/components/common/spinner";
import EpisodeList from "@/components/episodeList";
import courseService, { CourseType } from "@/service/coursesSerivce";
import Head from "next/head";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, Container } from "reactstrap";
import styles from "../../../styles/coursePage.module.scss";

const CoursePage = () => {
  const [course, setCourse] = useState<CourseType>();
  const { id } = useParams();
  
  const [liked, setLiked] = useState(false);
  const [favorited, setFavorited] = useState(false);

  const getCourse = async function () {
    if (typeof id !== "string") return;

    const res = await courseService.getEpisodes(id);

    if (res.status === 200) {
      setCourse(res.data);
      setLiked(res.data.liked);
      setFavorited(res.data.favorited);
    }
  };

  useEffect(() => {
    getCourse();
  }, [id]);

  const handleLikeCourse = async () => {
    if (typeof id !== "string") return;

    if (liked === true) {
      await courseService.removeLike(id);
      setLiked(false);
    } else {
      await courseService.like(id);
      setLiked(true);
    }
  };

  const handleFavCourse = async () => {
    if (typeof id !== "string") return;

    if (favorited === true) {
      await courseService.removeFav(id);
      setFavorited(false);
    } else {
      await courseService.addToFav(id);
      setFavorited(true);
    }
  };

  if (course === undefined) return <PageSpinner />;

  return (
    <>
      <Head>
        <title>CursoFlix - {"nomeDoCurso"}</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <main>
        <div
          style={{
            backgroundImage: `linear-gradient(to bottom, #6666661a, #151515),
	          url(${process.env.NEXT_PUBLIC_BASEURL}/${course?.thumbnailUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "450px",
          }}
        >
          <HeaderAuth />
        </div>
        <Container className={styles.courseInfo}>
          <p className={styles.courseTitle}>{course?.name}</p>
          <p className={styles.courseDescription}>{course?.synopsis}</p>
          <Button outline className={styles.courseBtn} disabled={course?.episodes?.length === 0 ? true : false} >
            ASSISTIR AGORA!
            <img
              src="/buttonPlay.svg"
              alt="buttonImg"
              className={styles.buttonImg}
            />
          </Button>
          <div className={styles.interactions}>
            {liked === false ? (
              <img
                src="/course/iconLike.svg"
                alt="likeImage"
                className={styles.interactionImages}
                onClick={handleLikeCourse}
              />
            ) : (
              <img
                src="/course/iconLiked.svg"
                alt="likedImage"
                className={styles.interactionImages}
                onClick={handleLikeCourse}
              />
            )}
            {favorited === false ? (
              <img
                onClick={handleFavCourse}
                src="/course/iconAddFav.svg"
                alt="addFav"
                className={styles.interactionImages}
              />
            ) : (
              <img
                onClick={handleFavCourse}
                src="/course/iconFavorited.svg"
                alt="favorited"
                className={styles.interactionImages}
              />
            )}
          </div>
        </Container>
        <Container className={styles.episodeInfo}>
          <p className={styles.episodeDivision}>EPISÓDIOS</p>
          <p className={styles.episodeLength}>
            {course?.episodes && course?.episodes.length} episódios
          </p>
          {course?.episodes?.length === 0 ? (
            <p>
              <strong>Não temos episódios ainda, volte outra hora  :(</strong>
            </p>
           ) : course?.episodes &&
           course?.episodes.map((episode) => (
             <EpisodeList key={episode.id} episode={episode} course={course}/>
           ))}
        </Container>
      </main>
    </>
  );
};

export default CoursePage;
