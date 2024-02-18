
import React from "react";

const Footer = () => {
  return (
    <div className="my-3 ">
      {/* footer */}
      <div className="flex flex-wrap justify-between items-center max-w-6xl mx-auto text-xs">
        <div>&copy; Copyright {new Date().getFullYear()} </div>{" "}
        <div>
          Developed by{" "}
          <a
            href="http://github.com/Shariar-Hasan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand"
          >
            Shariar Hasan
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
