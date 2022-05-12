import React, { useRef } from "react";

/**
 *
 * @param {{strMode:string,
 * strOpeningButtonTitle:string,
 * strPopupTitle:string,
 * arrFields:{strFieldName: string,
 * strFieldTitle: string,
 * strPlaceHolder: string,
 * booIsRequired: boolean,
 * strInputType: string,
 * strHelpText: string,
 * intPosition: number,
 * intColSpan: number,}[]}} param0
 * @returns
 */
const Popup = ({
  strMode,
  strOpeningButtonTitle,
  strPopupTitle,
  arrFields,
}) => {
  const divPopUp = useRef(null);

  const onButtonClick = (strPopUpMode) => {
    divPopUp.current.classList.remove("hidden");
  };

  return (
    <>
      <button
        onClick={onButtonClick.bind(null, strMode)}
        type="button"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        {strOpeningButtonTitle}
      </button>
      <div
        ref={divPopUp}
        className="absolute top-0 left-0 w-full h-full bg-gray-600 bg-opacity-50 flex justify-center items-center z-50 hidden"
      >
        <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  {strPopupTitle}
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </p>
                </div>
              </div>
            </div>
            <div>{"Content"}</div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm">
              Save
            </button>
            <button
              onClick={() => divPopUp.current.classList.add("hidden")}
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export { Popup };
