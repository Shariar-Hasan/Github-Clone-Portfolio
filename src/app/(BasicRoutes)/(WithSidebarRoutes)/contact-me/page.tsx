import ContactMeForm from "@/components/Layers/ContactMeForm";
import ContactOptions from "@/components/Layers/ContactOptions";
import {
  metaDatas,
} from "@/utils/userInfoContants";
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-10">
        <ContactOptions />
        <ContactMeForm />
      </div>
    </div>
  );
};

export default ContactMePage;
