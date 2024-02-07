import useSWR from "swr";
import categoriesService from "@/service/categorysService";
import SlideComponent from "@/components/common/slideComponent";
import styles from "../../../styles/slideCategory.module.scss";

interface props {
  categoryId: number;
  categoryName: string;
}

const ListCategoriesSlide = ({ categoryId, categoryName }: props) => {
  const { data, error } = useSWR(`/categories/${categoryId}`, () =>
    categoriesService.getCourses(categoryId)
  );

  if (error) return error;
  if (!data) return;

  return (
    <>
      <p className={styles.titleCategory}>{categoryName}</p>

      <SlideComponent course={data.data.courses} />
    </>
  );
};

export default ListCategoriesSlide;
