import React, { useEffect, useRef } from "react";
import { CheckBoxField } from "./CheckBoxField";
import { DataField } from "./DataField";
import { DateTimeField } from "./DateTimeField";

//Options: 'create' or 'edit'

/*
Definitions

objFieldType: {
  strType: "text",
  objData: {
    strPlaceHolder: "",
    booIsRequired: true,
    strInitialValue: "",
  },
}

objFieldType: {
  strType: "checkbox",
  objData: { booChecked: false },
}

objFieldType: {
  strType: "date",
  objData: {
    booIsRequired: true,
    dtInitialValue: null,
    dtMinDate: null,
    dtMaxDate: null,
  },
}

objFieldType: {
  strType: "textarea",
  objData: {
    strPlaceHolder: "",
    booIsRequired: true,
    intCols: null,
    intRows: 3,
  },
}
*/

/**
 *
 * @param {{
 * strMode:string,
 * strOpeningButtonTitle:string,
 * strPopupTitle:string,
 * arrFields:{
 * strPropertyName: string,
 * strFieldTitle: string,
 * strHelpText: string,
 * readOnly: boolean,
 * intColSpan: number,
 * strValidationMessage: string,
 * objFieldType:{
 * strType:string,
 * objData:Object}}[],
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
  useEffect(() => {
    frmForm.current.reset();
  });

  const MODE = {
    EDIT: "edit",
    CREATE: "create",
  };

  const onButtonClick = (strPopUpMode) => {
    frmForm.current.classList.remove("hidden");
  };

  const objPopUpValues = {};

  const onBlurField = function (strPropertyName, strValue) {
    objPopUpValues[strPropertyName] = strValue;

    console.log("PopUp.onBlurField:", objPopUpValues);
  };

  const onDateChange = function (strPropertyName, dtValue) {
    objPopUpValues[strPropertyName] = dtValue;

    console.log("PopUp.onDateChange:", objPopUpValues);
  };

  /**
   *
   * @param {string} strPropertyName
   * @param {boolean} booValue
   */
  const onCheckChange = function (strPropertyName, booValue) {
    objPopUpValues[strPropertyName] = booValue;

    console.log("PopUp.onCheckChange:", objPopUpValues);
  };

  /**
   *
   * @param {{
   * strPropertyName: string,
   * strFieldTitle: string,
   * strHelpText: string,
   * readOnly: boolean,
   * intColSpan: number,
   * strValidationMessage: string,
   * objFieldType:{
   * strType:string,
   * objData:Object}}[]} arrElements
   * @returns
   */
  const getHtmlElements = (arrElements) => {
    const arrHtmlElements = arrElements.map((objField, index) => (
      <div key={index}>
        {(() => {
          if (objField.objFieldType.strType === "checkbox") {
            return (
              <CheckBoxField
                strFieldName={objField.strFieldTitle}
                booChecked={objField.objFieldType.objData.booChecked}
                strHelpText={objField.strHelpText}
                sendCheckChange={onCheckChange.bind(
                  null,
                  objField.strPropertyName
                )}
              />
            );
          } else if (objField.objFieldType.strType === "date") {
            return (
              <DateTimeField
                strFieldName={objField.strFieldTitle}
                booIsRequired={objField.objFieldType.objData.booIsRequired}
                strInitialValue={objField.objFieldType.objData.strInitialValue}
                strHelpText={objField.strHelpText}
                strMinDate={objField.objFieldType.objData.dtMinDate}
                strMaxDate={objField.objFieldType.objData.dtMaxDate}
                strFieldType={objField.objFieldType.objData.strFieldType}
                onValueChange={onDateChange.bind(
                  null,
                  objField.strPropertyName
                )}
              />
            );
          } else {
            return (
              <DataField
                strFieldName={objField.strFieldTitle}
                strHelpText={objField.strHelpText}
                strInitialValue={objField.objFieldType.objData.strInitialValue}
                strInputType={objField.objFieldType.strType}
                booIsRequired={objField.objFieldType.objData.booIsRequired}
                onValueChange={onBlurField.bind(null, objField.strPropertyName)}
              />
            );
          }
        })()}
      </div>
    ));

    return <>{arrHtmlElements}</>;
  };

  /**
   *
   * @param {{
   * strPropertyName: string,
   * strFieldTitle: string,
   * strHelpText: string,
   * readOnly: boolean,
   * intColSpan: number,
   * strValidationMessage: string,
   * objFieldType:{
   * strType:string,
   * objData:Object}}[]} arrFields
   * @returns
   */
  const allRequiredExist = (arrFields) => {
    return arrFields.reduce((result, objField) => {
      if (
        Object.prototype.hasOwnProperty.call(
          objField.objFieldType.objData,
          "booIsRequired"
        ) &&
        objField.objFieldType.objData.booIsRequired
      ) {
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

  const getOpenerButton = (strMode) => {
    if (strMode === MODE.CREATE) {
      return (
        <button
          onClick={onButtonClick.bind(null, MODE.CREATE)}
          type="button"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {strOpeningButtonTitle}
        </button>
      );
    } else {
      return (
        <button onClick={onButtonClick.bind(null, MODE.EDIT)} type="button">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
            <path d="M4.625 19.4H6.475L15.95 9.975L15 9.025L14.05 8.075L4.625 17.55ZM1.975 22.05V16.425L15.95 2.5Q16.725 1.725 17.812 1.725Q18.9 1.725 19.675 2.5L21.525 4.375Q22.3 5.15 22.3 6.225Q22.3 7.3 21.525 8.075L7.6 22.05ZM19.7 6.225 17.8 4.325ZM15.95 9.975 15 9.025 14.05 8.075 15.95 9.975Z" />
          </svg>
        </button>
      );
    }
  };

  return (
    <>
      {getOpenerButton(strMode)}
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
