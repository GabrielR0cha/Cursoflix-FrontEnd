import SlideComponent from "@/components/common/slideComponent";
import { CourseType } from "@/service/coursesSerivce";
import Link from "next/link";
import { Button, Container } from "reactstrap";
import styles from "./styles.module.scss";

interface props {
  newestCourses: CourseType[];
}

const SlideSection = function ({ newestCourses }: props) {
  return <>
  	<Container fluid className="d-flex flex-column align-items-center py-5">
		<p className={styles.sectionTitle}>AULAS JÁ DISPONÍVEIS</p>
		<SlideComponent course={newestCourses} />
		<Link href="/register">
			<Button outline color="light" className={styles.slideSectionBtn}>Se cadastre para acessar!</Button>
		</Link>
	</Container></>;
};

export default SlideSection;