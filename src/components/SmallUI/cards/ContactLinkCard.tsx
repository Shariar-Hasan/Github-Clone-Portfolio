
import { ContactIconType } from "@/types/constantsTypes";
import React from "react";

const ContactLinkCard = ({ item }: { item: ContactIconType }) => {
  const { media, icon, url } = item;
  return (
    <div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 text-xs border cornered justify-between px-3 py-2  my-3 delayed hover:border-brand hover:text-brand"
      >
        <span>{icon}</span>
        {media}
      </a>
    </div>
  );
};

export default ContactLinkCard;
