import React, { useState } from "react";
import ScrollDown from "../components/ScrollDown";
const openPDF = (url) => {
  window.open(url, '_blank');
};
function CriteriaPage4() {
  const customContents = [
    "4.1.1",
    "4.1.2",
    "4.1.3",
    "4.2.1",
    "4.2.2",
    "4.3.1",
    "4.3.2",
    "4.3.3",
    "4.3.4",
    "4.4.1",
  ];

  const contentMap = {
    "4.1.1": (
      <>
        <p>Content for 1.1.1</p>
        <p>More content...</p>
      </>
    ),
    "4.1.2": (
      <>
        <p>Content for 1.1.2</p>
        <p>More content...</p>
      </>
    ),
    "4.1.3": (
      <>
        <p>Content for 1.1.2</p>
        <p>More content...</p>
      </>
    ),
    "4.2.1": (
      <>
        <p>Content for 1.1.2</p>
        <p>More content...</p>
      </>
    ),
    "4.2.2": (
      <>
        <p>Content for 1.1.2</p>
        <p>More content...</p>
      </>
    ),
    "4.3.1": (
      <>
        <p>Content for 1.1.2</p>
        <p>More content...</p>
      </>
    ),
    "4.3.2": (
      <>
        <p>Content for 1.1.2</p>
        <p>More content...</p>
      </>
    ),
    "4.3.3": (
      <>
        <p>Content for 1.1.2</p>
        <p>More content...</p>
      </>
    ),
    "4.3.4": (
      <>
        <h1>1.3.4</h1>
      </>
    ),
    "4.4.1": (
      <>
        <h1>1.4.1</h1>
      </>
    ),
    "4.4.2": (
      <>
        <h1>1.4.2</h1>
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
        <h1 className="text-[3rem] text-red-600 font-extrabold">CRITERIA 4</h1>
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

export default CriteriaPage4;