

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css"
import { CourseType } from "../../../service/coursesSerivce";
import SlideCard from "../slideCard";

interface props {
  course:CourseType[];
}

const SlideComponent = function ({ course }: props) {
  let slideCount = course.length > 4 ? 4 : course.length;



  return (
    <>
      <div  className="d-flex flex-column align-items-center py-4">
        <Splide
          options={{
            type: "loop",
            perPage: slideCount,
            perMove: 1,
            width:slideCount *300,
            pagination: false,
            breakpoints: {
              1200: {
                perPage: slideCount <= 2 ? 1 : 2,
              width: slideCount <= 2 ? 300 : 600,
              arrows: course.length < 2 ? false : true,
              drag: course.length < 2 ? false : true,
            },
            600: {
              perPage: 1,
              width: 300,
              arrows: course.length < 1 ? false : true,
              drag: course.length < 1 ? false : true
            },
            300: {
              width: 250,
            },
            }
          }}
        >
          {course?.map((course) => (
            <SplideSlide key={course.id}>
              <SlideCard course={course} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </>
  );
};

export default SlideComponent;