import DoubleDivider from "@/components/SmallUI/DoubleDivider";
import SubHeading from "@/components/SmallUI/SubHeading";
import ContactLinkCard from "@/components/SmallUI/cards/ContactLinkCard";
import { socialLinks } from "@/utils/contants";
import React from "react";

const ContactMePage = () => {
  return (
    <div className="px-5">
      <SubHeading>Contact Me</SubHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div>
          <div className="form-group">
            <label htmlFor=""></label>
            <input type="text" className="form-control" name="" id="" aria-describedby="helpId" placeholder=""/>
            <small id="helpId" className="form-text text-muted">Help text</small>
          </div>
        </div>
        
      </div>
      <DoubleDivider>
        <span className="italic text-xl">Or</span>
      </DoubleDivider>
      <div className="flex items-center flex-wrap gap-x-5 justify-center">
        {socialLinks?.map((item, index) => (
          <ContactLinkCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ContactMePage;
