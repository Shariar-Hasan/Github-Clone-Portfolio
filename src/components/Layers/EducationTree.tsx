import { educationalInfo } from "@/utils/userInfoContants";
import React from "react";

const EducationTree = () => {
  return (
    <div className="w-full px-4">
      <div className="relative md:w-[1px] min-h-[50vh] md:mx-auto md:bg-block-hard">
        {educationalInfo?.map(
          (
            {
              courseTitle,
              shortCourseTitle,
              graduationYear,
              institution,
              startingYear,
              location,
              result,
              description
            },
            index
          ) => (
            <div
              key={courseTitle + index}
              className={`flex md:flex-row flex-col md:items-center md:gap-2 group  relative top-0 md:left-1/2 md:right-1/2 md:odd:translate-x-[-100%] odd:translate-x-0 md:w-max w-full z-[1] group/info`}
            >
              <div className="pointer p-2 bg-block-hard aspect-square w-[70px] flex items-center justify-center rounded-full md:group-odd:order-2 group-odd:order-none md:group-even:-translate-x-1/2 md:translate-x-1/2 translate-x-0 mx-auto md:mx-0  group-hover/info:text-brand font-bold delayed text-sm text-center">
                {shortCourseTitle}
              </div>
              <div className="details md:max-w-sm p-5 bg-block rounded-md my-3">
                <div>
                  <div>
                    <h3 className="text-base font-medium md:text-lg group-hover/info:text-brand">
                      {courseTitle}
                    </h3>
                    <h4 className="text-xs text-dimmed">{institution}</h4>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-sm">{location}</div>
                    <p className="text-sm font-semibold">
                      {startingYear} - {graduationYear}
                    </p>
                  </div>
                </div>

                <div className="text-xs text-dimmed">
                  {description}
                </div>
                {/* <p className="result">{result}</p> */}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default EducationTree;
