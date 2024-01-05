import React, { useState } from "react";
import ScrollDown from "../components/ScrollDown";

function CriteriaPage() {
   const customContents = [
     "1.1.1",
     "1.1.2",
     "1.1.3",
     "1.2.1",
     "1.2.2",
     "1.3.1",
     "1.3.2",
     "1.3.3",
     "1.3.4",
     "1.4.1",
   ];
  const [openIndex, setOpenIndex] = useState(null);

  const openScrollDown = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <>
    
    <div className="h-[37rem] w-[55rem] transform -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 bg-white border border-solid border-red-400 rounded-lg p-3">
      <h1 className="text-[3rem] text-black font-extrabold">CRITERIA 1</h1>
      <div className="w-full h-[2px] bg-gradient-to-l from-white via-gray-500 to-black"></div>
      <div className="m-7">
        <div className="flex flex-wrap">
          {customContents.slice(0, 6).map((content, index) => (
            <div key={index} className="mt-3 mr-3">
              <ScrollDown
                customContent={content}
                isOpen={index === openIndex}
                openBar={() => openScrollDown(index)}
              />
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
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

export default CriteriaPage;
