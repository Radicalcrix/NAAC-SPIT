import React, { useState } from "react";
import ExpandableComponent from "../components/ExpandableComponent";

function CriteriaPage() {
  const customContents = [
    {
      mainContent: "3.1.1",
      linkNames: [
        { name: "Document 1", pdf: "http://localhost:5173/Criteria 1/1.1.1.pdf" },
        { name: "Document 2", pdf: "http://localhost:5173/Criteria 1/1.1.2.pdf" },
        { name: "Document 2", pdf: "http://localhost:5173/Criteria 1/1.1.2.pdf" },
        { name: "Document 2", pdf: "http://localhost:5173/Criteria 1/1.1.2.pdf" },
        { name: "Document 2", pdf: "http://localhost:5173/Criteria 1/1.1.2.pdf" },
        { name: "Document 2", pdf: "http://localhost:5173/Criteria 1/1.1.2.pdf" },
      ]
    },
    {
      mainContent: "3.1.2",
      linkNames: [
        { name: "Document 3", pdf: "#" },
        { name: "Document 4", pdf: "#" },
        { name: "Document 5", pdf: "#" }
      ]
    },
    {
      mainContent: "3.1.2",
      linkNames: [
        { name: "Document 3", pdf: "#" },
         { name: "Document 4", pdf: "#" },
        { name: "Document 5", pdf: "#" }
      ]
    },
    {
      mainContent: "3.1.2",
      linkNames: [
        { name: "Document 3", pdf: "#" },
        { name: "Document 4", pdf: "#" },
        { name: "Document 5", pdf: "#" }
      ]
    },
    {
      mainContent: "3.1.2",
      linkNames: [
        { name: "Document 3", pdf: "#" },
        { name: "Document 4", pdf: "#" },
        { name: "Document 5", pdf: "#" }
      ]
    },
    {
      mainContent: "3.1.2",
      linkNames: [
        { name: "Document 3", pdf: "#" },
        { name: "Document 4", pdf: "#" },
        { name: "Document 5", pdf: "#" }
      ]
    },
    {
      mainContent: "3.1.2",
      linkNames: [
        { name: "Document 3", pdf: "#" },
        { name: "Document 4", pdf: "#" },
        { name: "Document 5", pdf: "#" }
      ]
    },
    {
      mainContent: "3.1.2",
      linkNames: [
        { name: "Document 3", pdf: "#" },
        { name: "Document 4", pdf: "#" },
        { name: "Document 5", pdf: "#" }
      ]
    },
    {
      mainContent: "3.1.2",
      linkNames: [
        { name: "Document 3", pdf: "#" },
        { name: "Document 4", pdf: "#" },
        { name: "Document 5", pdf: "#" }
      ]
    },
    {
      mainContent: "3.1.2",
      linkNames: [
        { name: "Document 3", pdf: "#" },
        { name: "Document 4", pdf: "#" },
        { name: "Document 5", pdf: "#" }
      ]
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const openExpandable = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <>
      <div className="hello h-[37rem] w-[55rem] mt-[2rem] transform -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 bg-white border border-solid border-blue-900 rounded-lg p-3 overflow-y-auto">
        <h1 className="text-[3rem] text-blue-900 font-extrabold">CRITERIA 3</h1>
        <div className="w-full h-[2px] bg-gradient-to-l from-white via-gray-500 to-black"></div>
        <div className="m-7">
          <div className="flex flex-wrap">
            {customContents.map((content, index) => (
              <div key={index} className="mt-3 mr-3">
                <ExpandableComponent
                  mainContent={content.mainContent}
                  links={content.linkNames}
                  isOpen={index === openIndex}
                  openBar={() => openExpandable(index)}
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





