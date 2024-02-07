import categoriesService, { CategoryType } from "@/service/categorysService";
import useSWR from "swr";
import ListCategoriesSlide from "../listCategoriesSlide";

const ListCategories = function () {
const { data, error } = useSWR("/listCategories", categoriesService.getCategories);

if (error) return error;
if (!data) return ;

  return (
    <>
	  {data.data.categories?.map((category: CategoryType) => (
      <ListCategoriesSlide key={category.id} categoryName={category.name} categoryId={category.id}/>
    ))}
	</>
  );
};

export default ListCategories;