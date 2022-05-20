import { PDFViewer } from "@react-pdf/renderer";
import React, { useState } from "react";
import imgFormat1 from "./templates/img/format1.png";

import { Template1 } from "./templates/template1/Template1";

/**
 *
 * @param {{objResume:Object, onClose():void}} param0
 * @returns
 */
const PopUpViwer = ({ objResume, onClose }) => {
  const [stateShowResult, setStateShowResult] = useState(false);
  const [stateStrFormatId, setStateStrFormatId] = useState("");

  const objFormatsInfo = {
    format1: { strName: "Modern", strPreviewImageURL: imgFormat1 },
    format2: { strName: "Design", strPreviewImageURL: imgFormat1 },
    format3: { strName: "Structural", strPreviewImageURL: imgFormat1 },
  };

  const generateFormat = (strFormatId) => {
    setStateShowResult(true);
    setStateStrFormatId(strFormatId);
  };

  const isResumeValid = ((objResume) => {
    return true;
  })(objResume);

  const getDownloadButton = (strFormatId, isResumeValid) => {
    if (isResumeValid) {
      return (
        <button
          onClick={generateFormat.bind(null, strFormatId)}
          className=" bottom-0 left-0 mt-2 w-40 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500  sm:text-sm"
        >
          Download PDF
        </button>
      );
    } else {
      return (
        <button
          disabled
          onClick={generateFormat.bind(null, strFormatId)}
          className=" bottom-0 left-0 mt-2 w-40 inline-flex justify-center rounded-md border border-[#999999] shadow-sm px-4 py-2 bg-[#cccccc] text-base font-medium text-[#a5a5a5]     sm:text-sm"
        >
          Download PDF
        </button>
      );
    }
  };

  const getFormatDisplay = (strFormatId) => {
    const objFormat = objFormatsInfo["format" + strFormatId];

    return (
      <div className="flex flex-col gap-2 justify-center">
        <p className="text-gray-500">{objFormat.strName}</p>
        <div>
          <img
            src={objFormat.strPreviewImageURL}
            alt={objFormat.strName}
            className=" w-40 h-auto"
          />
          {getDownloadButton(strFormatId, isResumeValid)}
        </div>
      </div>
    );
  };

  const getSelector = () => {
    return (
      <div className=" inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
              </div>
            </div>
          </div>
          {/* Content */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-11 mt-5 sm:mx-4 items-center sm:justify-center">
            {getFormatDisplay("1")}
            {getFormatDisplay("2")}
            {getFormatDisplay("3")}
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

  const goBackToSelector = () => {
    setStateShowResult(false);
  };
  const getViwer = (strFormatId, objResume) => {
    return (
      <div className="flex flex-col align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:h-[600px] sm:max-w-2xl sm:w-full">
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
              onClick={goBackToSelector}
              className=" mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm sm:mt-0"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      {(() => {
        return stateShowResult
          ? getViwer(stateStrFormatId, objResume)
          : getSelector();
      })()}
    </div>
  );
};

export { PopUpViwer };
