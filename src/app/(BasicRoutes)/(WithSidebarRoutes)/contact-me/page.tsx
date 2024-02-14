import ContactMeForm from "@/components/Layers/ContactMeForm";
import DoubleDivider from "@/components/SmallUI/DoubleDivider";
import SubHeading from "@/components/SmallUI/SubHeading";
import ContactLinkCard from "@/components/SmallUI/cards/ContactLinkCard";
import { metaDatas, programmingIcon, socialLinks } from "@/utils/contants";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: metaDatas?.contactMePage.title || "Contact Me",
  description:
    metaDatas?.contactMePage.description ||
    "Contact Me through the provided contact forms or the provided social links. I will try to get back to you as soon as possible. Feel free to contact me for any questions or to work together.",
};
const ContactMePage = () => {
  return (
    <div className="px-5">
      <SubHeading>Contact Me</SubHeading>
      <ContactMeForm />
      <DoubleDivider>
        <span className="italic text-xl">Quick Links</span>
      </DoubleDivider>
      <div className="flex items-center flex-wrap gap-x-3 justify-center">
        {[...socialLinks, ...programmingIcon]?.map((item, index) => (
          <ContactLinkCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ContactMePage;
