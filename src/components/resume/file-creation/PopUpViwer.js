import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import React, { useEffect, useRef } from "react";
import imgFormat1 from "./templates/img/format1.png";
import imgFormat3 from "./templates/img/format3.png";
import imgFormat2 from "./templates/img/format2.png";
import imgFormat4 from "./templates/img/format4.png";

import { Template1 } from "./templates/template1/Template1";

/**
 *
 * @param {{objResume:Object, onClose():void}} param0
 * @returns
 */
const PopUpViwer = ({ objResume, onClose }) => {
  const refDivSelector = useRef(null);

  useEffect(() => {
    if (refDivSelector.current) {
      refDivSelector.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  });

  const objFormatsInfo = {
    format1: {
      strName: "Modern",
      strPreviewImageURL: imgFormat1,
      isActive: true,
    },
    format2: {
      strName: "Classic",
      strPreviewImageURL: imgFormat2,
      isActive: false,
    },
    format3: {
      strName: "Design",
      strPreviewImageURL: imgFormat3,
      isActive: false,
    },
    format4: {
      strName: "Structural",
      strPreviewImageURL: imgFormat4,
      isActive: false,
    },
  };

  const isResumeValid =
    /**
     *
     * @param {Object} objResume
     * @returns
     */
    ((objResume) => {
      return objResume.getExperienceList().length > 1 ? true : false;
    })(objResume);

  const getDownloadButton = (strFormatId, isResumeValid) => {
    if (isResumeValid) {
      if (objFormatsInfo["format" + strFormatId].isActive) {
        return (
          <button className=" bottom-0 left-0 mt-2 w-40 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500  sm:text-sm">
            {downloadPDF(strFormatId, objResume)}
          </button>
        );
      } else {
        return (
          <button
            disabled
            className=" bottom-0 left-0 mt-2 w-40 inline-flex justify-center rounded-md border border-[#999999] shadow-sm px-4 py-2 bg-[#cccccc] text-base font-medium text-[#a5a5a5]     sm:text-sm"
          >
            Coming soon
          </button>
        );
      }
    } else {
      return (
        <button
          disabled
          className=" bottom-0 left-0 mt-2 w-40 inline-flex justify-center rounded-md border border-[#999999] shadow-sm px-4 py-2 bg-[#cccccc] text-base font-medium text-[#a5a5a5]     sm:text-sm"
        >
          Download PDF
        </button>
      );
    }
  };

  const getTemplateImage = (objFormat) => {
    if (objFormat.isActive) {
      return (
        <img
          src={objFormat.strPreviewImageURL}
          alt={objFormat.strName}
          className=" w-40 h-auto shadow-lg transition-transform hover:scale-[1.2] img-scaleup border border-gray-600"
        />
      );
    } else {
      return (
        <img
          src={objFormat.strPreviewImageURL}
          alt={objFormat.strName}
          className=" w-40 h-auto border border-gray-600"
        />
      );
    }
  };

  const getFormatDisplay = (strFormatId) => {
    const objFormat = objFormatsInfo["format" + strFormatId];

    return (
      <div className="flex flex-col gap-2 justify-center">
        <p className="text-gray-500">{objFormat.strName}</p>
        <div className="flex flex-col gap-2">
          {getTemplateImage(objFormat)}
          {getDownloadButton(strFormatId, isResumeValid)}
        </div>
      </div>
    );
  };

  const getHelpText = (isResumeValid) => {
    if (isResumeValid) {
      return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
    } else {
      return "Invalid";
    }
  };

  const getSelector = () => {
    return (
      <div
        ref={refDivSelector}
        className=" inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full h-fit"
      >
        {/* Main */}
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          {/* Header */}
          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:mt-0 sm:mx-4 sm:text-left">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Select the format
              </h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  {getHelpText(isResumeValid)}
                </p>
              </div>
            </div>
          </div>
          {/* Content */}
          <div className="grid grid-cols-1 place-items-center sm:flex sm:flex-row gap-6 mt-7 sm:mx-4 items-center sm:justify-around pb-4 sm:gap-0">
            {getFormatDisplay("1")}
            {getFormatDisplay("2")}
            {getFormatDisplay("3")}
          </div>
        </div>
        {/* Buttons */}
        <div className="bg-gray-50 px-4 py-3 sm:px-6 flex flex-col sm:gap-1 sm:flex-row justify-center sm:justify-between sm:items-center">
          <div>
            <p className={"text-sm text-red-500 sm:ml-4"}></p>
          </div>
          <div className="sm:mr-4 sm:flex sm:flex-row-reverse">
            <button
              onClick={onClose}
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };

  const getJsxDocument = (strFormatId, objResume) => {
    if (strFormatId == "1") {
      return <Template1 objResumen={objResume} />;
    }
  };

  const getViwer = (strFormatId, objResume) => {
    return (
      <div className="flex flex-col align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:h-[600px] sm:max-w-2xl ">
        {/* Main */}
        <div className="flex flex-col bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 flex-1">
          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:mt-0 sm:mx-4 sm:text-left">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                {"Format: " + objFormatsInfo["format" + strFormatId].strName}
              </h3>
              {/* <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
              </div> */}
            </div>
          </div>
          <div className="flex-1 flex flex-col h-full sm:flex-row gap-8 sm:gap-11 mt-5 sm:mx-4 items-center sm:justify-center">
            <PDFViewer width={"100%"} height={"100%"} showToolbar={true}>
              {getJsxDocument(strFormatId, objResume)}
            </PDFViewer>
          </div>
        </div>
        {/* Buttons */}
        <div className="bg-gray-50 px-4 py-3 sm:px-6 flex flex-col gap-4 sm:gap-1 sm:flex-row sm:justify-between sm:items-center">
          <div>
            <p className={"text-sm text-red-500 sm:ml-4"}></p>
          </div>
          <div className="sm:mr-4 sm:flex sm:flex-row-reverse">
            <button
              onClick={onClose}
              type="button"
              className=" w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500  sm:ml-3 sm:w-auto sm:text-sm"
            >
              Close
            </button>
            <button
              // onClick={goBackToSelector}
              className=" mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm sm:mt-0"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    );
  };

  const downloadPDF = (strFormatId, objResume) => {
    const jsxDocument = getJsxDocument(strFormatId, objResume);

    const result = ((jsxDocument) => {
      if (jsxDocument) {
        return (
          <PDFDownloadLink
            document={jsxDocument}
            fileName="ATS_Proof_Resume.pdf"
          >
            {({ blob, url, loading, error }) =>
              loading ? "Loading..." : "Download PDF"
            }
          </PDFDownloadLink>
        );
      } else return "Download PDF";
    })(jsxDocument);

    return result;
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-gray-600 bg-opacity-50 flex justify-center z-[90]">
      {getSelector()}
    </div>
  );
};

export { PopUpViwer };
