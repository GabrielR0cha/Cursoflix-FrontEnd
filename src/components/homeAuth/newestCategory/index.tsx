import SlideComponent from "@/components/common/slideComponent";
import PageSpinner from "@/components/common/spinner";
import courseService from "@/service/coursesSerivce";
import useSWR from "swr";
import styles from "../../../styles/slideCategory.module.scss"

const NewestCategory =  () => {
const { data, error } = useSWR("/newest", courseService.getNewestCourses);
if (error) return error;
if (!data) return <PageSpinner/>;


return (
	<>
	  <p className={styles.titleCategory}>LANÇAMENTOS</p>
    <SlideComponent course={data.data} />
  </>

);
}


export default NewestCategory