import { Interweave } from "interweave";
import React from "react";

const JsxViewer = ({ children }: { children: string }) => {
  return (
    <Interweave
      className="prose dark:prose-invert  max-w-full"
      content={children}
      //   matchers={[new UrlMatcher("url"), new HashtagMatcher("hashtag")]}
      tagName="div"
    />
  );
};

export default JsxViewer;
