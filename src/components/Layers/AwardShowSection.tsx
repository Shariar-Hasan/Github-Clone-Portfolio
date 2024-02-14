import React from "react";
import NoItemAvailable from "../SmallUI/NoItemAvailable";
import { AwardType } from "@/types/propsTypes";
import AwardCard from "../SmallUI/cards/AwardCard";

const AwardShowSection = async ({ awards }: { awards: AwardType[] }) => {
  return (
    <>
      {awards?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {awards?.map((award: AwardType, i: number) => {
            return <AwardCard key={award._id} index={i} award={award} />;
          })}
        </div>
      ) : (
        <NoItemAvailable text="No Award Available" />
      )}
    </>
  );
};

export default AwardShowSection;
