import { SocialIconType } from "@/types/constantsTypes";
import React from "react";

const ContactLinkCard = ({ item }: { item: SocialIconType }) => {
  const { media, textClass, icon, url } = item;
  return (
    <div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-5 text-2xl border border- brand justify-between px-4 py-2 cornered my-3 delayed hover:border-brand hover:text-brand"
      >
        <span className={`${textClass}`}>{icon}</span>
        {media}
      </a>
    </div>
  );
};

export default ContactLinkCard;
