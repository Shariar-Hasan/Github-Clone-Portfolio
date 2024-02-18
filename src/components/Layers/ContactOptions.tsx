import React from "react";
import SubHeading from "../SmallUI/SubHeading";
import { programmingIcon, socialLinks } from "@/utils/userInfoContants";

const ContactOptions = () => {
  return (
    <div>
      <SubHeading>Lets talk</SubHeading>
      <div className="pr-3 text-dimmed tracking-wider text-sm">
        <p className="">
          If you have any <span className="text-brand">questions</span> or want{" "}
          <span className="text-brand">to work together</span>, feel free to
          contact me.
        </p>
        <p className="mt-3 ">
          I will try to get back to you as soon as possible.
        </p>
      </div>
      {[
        { title: "Socials", items: [...socialLinks] },
        { title: "Programming", items: [...programmingIcon] },
      ].map(({ title, items }, pIndex) => (
        <div key={title + pIndex} className="my-3">
          <h3 className="font-bold my-2 text-lg tracking-wide">{title}</h3>
          <div className="flex gap-x-5 gap-y-2 text-3xl flex-wrap">
            {items?.map(({ media, icon, url }, index) => (
              <a
                title={media}
                key={media + index}
                href={url}
                rel="noreferrer noopenner"
                target="_blank"
                className="delayed hover:text-brand group relative"
              >
                <span className="peer">{icon}</span>
                <span className="absolute top-1/2 left-full translate-y-[-50%] peer-hover:visible peer-hover:opacity-100 opacity-0 invisible text-xl font-semibold delayed bg-block px-2 mx-1 inline-block w-max cornered z-10">
                  {media}
                </span>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactOptions;
