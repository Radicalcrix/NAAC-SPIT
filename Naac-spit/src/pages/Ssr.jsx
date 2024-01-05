import React, { useState } from "react";
import ScrollDown from "../components/ScrollDown";

const openPDF = (url) => {
  window.open(url, '_blank');
};
const url="http://localhost:5173/SSR/dummy.pdf"

function Ssr() {
  const customContents = [
    "SSR",
  ];

  const contentMap = {
    "SSR": (
      <>
        <ul>
      <li><a className='' onClick={() => openPDF(url)}>SSR</a></li>
      </ul>
      </>
    ),
  };

  const [openIndex, setOpenIndex] = useState(null);

  const openScrollDown = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <>
      <div className="h-[37rem] w-[55rem]  mt-[3rem] transform -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 bg-white border border-solid border-red-900 rounded-lg p-3">
        <h1 className="text-[3rem] text-red-600 font-extrabold">SSR</h1>
        <div className="w-full h-[2px] bg-gradient-to-l from-white via-gray-500 to-black"></div>
        <div className="m-7">
          <div className="flex flex-wrap">
            {customContents.slice(0, 6).map((content, index) => (
              <div key={index} className="mt-3 mr-3">
                <ScrollDown
                  customContent={content}
                  isOpen={index === openIndex}
                  openBar={() => openScrollDown(index)}
                >
                  {contentMap[content]}
                </ScrollDown>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap ">
            {customContents.slice(7).map((content, index) => (
              <div key={index} className="mt-3 mr-3">
                <ScrollDown
                  customContent={content}
                  isOpen={index + 7 === openIndex}
                  openBar={() => openScrollDown(index + 7)}
                >
                  {contentMap[content]}
                </ScrollDown>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Ssr;