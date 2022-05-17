import React from "react";
import imgFormat1 from "./templates/img/format1.png";

const PopUpSelector = ({ objResume }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
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
            <div className="flex flex-col gap-2 justify-center">
              <p className="text-gray-500">Format 1</p>
              <div>
                <img src={imgFormat1} alt="Format 1" className=" w-40 h-auto" />
                <button className="bottom-0 left-0 mt-2 w-40 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500  sm:text-sm">
                  Select
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-2 justify-center ">
              <p className="text-gray-500">Format 1</p>
              <div>
                <img src={imgFormat1} alt="Format 1" className=" w-40 h-auto" />
                <button className="bottom-0 left-0 mt-2 w-40 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500  sm:text-sm">
                  Select
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-2 justify-center ">
              <p className="text-gray-500">Format 1</p>
              <div>
                <img src={imgFormat1} alt="Format 1" className=" w-40 h-auto" />
                <button className="bottom-0 left-0 mt-2 w-40 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500  sm:text-sm">
                  Select
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Buttons */}
        <div className="bg-gray-50 px-4 py-3 sm:px-6 flex flex-col gap-4 sm:gap-1 sm:flex-row sm:justify-between sm:items-center">
          <div>
            <p className={"text-sm text-red-500 sm:ml-4"}></p>
          </div>
          <div className="sm:mr-4 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { PopUpSelector };
