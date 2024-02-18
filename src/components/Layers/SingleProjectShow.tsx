import { getSingleProject } from "@/actions/GET";
import React from "react";

const SingleProjectShow = async ({ slug }: { slug: string }) => {
  const { data, success } = await getSingleProject(slug);
  const {} = data;
  return (
    <>
      {success ? (
        <div className=""></div>
      ) : (
        <div className="border-red-600 border border-dashed text-red-600">
          Blog Not Found / Maybe wrong url
        </div>
      )}
    </>
  );
};

export default SingleProjectShow;
