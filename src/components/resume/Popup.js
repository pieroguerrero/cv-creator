import React, { useRef } from "react";
import { DataField } from "./DataField";

/**
 *
 * @param {{strMode:string,
 * strOpeningButtonTitle:string,
 * strPopupTitle:string,
 * arrFields:{strPropertyName: string,
 * strFieldTitle: string,
 * strPlaceHolder: string,
 * booIsRequired: boolean,
 * strInputType: string,
 * strHelpText: string,
 * readOnly: boolean,
 * intColSpan: number,}[],
 * onDataSave:(objData: object)=>void}} param0
 * @returns
 */
const Popup = ({
  strMode,
  strOpeningButtonTitle,
  strPopupTitle,
  arrFields,
  onDataSave,
}) => {
  const frmForm = useRef(null);

  const onButtonClick = (strPopUpMode) => {
    frmForm.current.classList.remove("hidden");
  };

  const objPopUpValues = {};

  const onBlurField = function (strPropertyName, strValue) {
    objPopUpValues[strPropertyName] = strValue;

    console.log("PopUp.onBlurField:", objPopUpValues);
  };

  /**
   *
   * @param {{strPropertyName: string,
   * strFieldTitle: string,
   * strPlaceHolder: string,
   * booIsRequired: boolean,
   * strInputType: string,
   * strHelpText: string,
   * readOnly: boolean,
   * intColSpan: number,}[]} arrElements
   * @returns
   */
  const getHtmlElements = (arrElements) => {
    const arrHtmlElements = arrElements.map((objField, index) => (
      <div key={index}>
        <DataField
          strFieldName={objField.strFieldTitle}
          strHelpText={objField.strHelpText}
          strInitialValue={""}
          strInputType={objField.strInputType}
          booIsRequired={objField.booIsRequired}
          onValueChange={onBlurField.bind(null, objField.strPropertyName)}
        />
      </div>
    ));

    return <>{arrHtmlElements}</>;
  };

  /**
   *
   * @param {{strPropertyName: string,
   * strFieldTitle: string,
   * strPlaceHolder: string,
   * booIsRequired: boolean,
   * strInputType: string,
   * strHelpText: string,
   * readOnly: boolean,
   * intColSpan: number,}[]} arrFields
   * @returns
   */
  const allRequiredExist = (arrFields) => {
    return arrFields.reduce((result, objField) => {
      if (objField.booIsRequired) {
        return Object.prototype.hasOwnProperty.call(
          objPopUpValues,
          objField.strPropertyName
        );
      } else {
        return true;
      }
    }, false);
  };

  const onSave = (e) => {
    //console.log(e.currentTarget);
    if (frmForm.current.checkValidity()) {
      if (allRequiredExist(arrFields)) {
        onDataSave(objPopUpValues);
        frmForm.current.classList.add("hidden");
      }
    }

    e.preventDefault();
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
      <form
        autoComplete="none"
        ref={frmForm}
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
            <div className="flex flex-col gap-2">
              {getHtmlElements(arrFields)}
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              onClick={onSave}
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => frmForm.current.classList.add("hidden")}
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export { Popup };
