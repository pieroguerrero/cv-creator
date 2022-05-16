import React, { useEffect, useRef } from "react";
import { CheckBoxField } from "./CheckBoxField";
import { DataField } from "./DataField";
import { DateTimeField } from "./DateTimeField";

//Options: 'create' or 'edit'

//className={"pointer-events-none text-[#AAA] bg-[#F5F5F5]"}

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
 * onDataSave:(objData: object)=>void,
 * strSaveButtonTitle:string,
 * }} param0
 * @returns
 */
const Popup = ({
  strMode,
  strOpeningButtonTitle,
  strPopupTitle,
  arrFields,
  onDataSave,
  strSaveButtonTitle,
}) => {
  const frmForm = useRef(null);
  const pErrorMessage = useRef(null);
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
  if (strMode === MODE.EDIT) {
    arrFields.forEach((objField) => {
      if (
        objField.objFieldType.strType === "text" ||
        objField.objFieldType.strType === "textarea"
      ) {
        if (objField.objFieldType.objData.strInitialValue.length > 0) {
          objPopUpValues[objField.strPropertyName] =
            objField.objFieldType.objData.strInitialValue;
        }
      } else if (objField.objFieldType.strType === "checkbox") {
        if (objField.objFieldType.objData.booChecked !== null) {
          objPopUpValues[objField.strPropertyName] =
            objField.objFieldType.objData.booChecked;
        }
      } else if (objField.objFieldType.strType === "date") {
        if (objField.objFieldType.objData.strInitialDate.length > 0) {
          objPopUpValues[objField.strPropertyName] =
            objField.objFieldType.objData.strInitialDate;
        }
      }
    });
  }

  const onBlurField = function (strPropertyName, strValue) {
    objPopUpValues[strPropertyName] = strValue;
  };

  /**
   *
   * @param {string} strPropertyName
   * @param {Date} dtValue
   */
  const onDateChange = function (strPropertyName, dtValue) {
    objPopUpValues[strPropertyName] = dtValue;
  };

  /**
   *
   * @param {string} strPropertyName
   * @param {boolean} booValue
   */
  const onCheckChange = function (strPropertyName, booValue) {
    objPopUpValues[strPropertyName] = booValue;
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
                strHelpText={objField.strHelpText} //{objField.objFieldType.objData.booChecked.toString()}
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
                strInitialValue={objField.objFieldType.objData.strInitialDate}
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
  const getValidationMessage = (arrFields) => {
    const arrMasterCBFields = arrFields.filter(
      (objField) =>
        objField.objFieldType.strType === "checkbox" &&
        Object.prototype.hasOwnProperty.call(
          objField.objFieldType.objData,
          "strMasterOf"
        ) &&
        objField.objFieldType.objData.strMasterOf.length > 0
    );

    for (let i = 0; i < arrMasterCBFields.length; i++) {
      const booCheck = Object.prototype.hasOwnProperty.call(
        objPopUpValues,
        arrMasterCBFields[i].strPropertyName
      )
        ? objPopUpValues[arrMasterCBFields[i].strPropertyName]
        : null;

      const dtEndDate = Object.prototype.hasOwnProperty.call(
        objPopUpValues,
        arrMasterCBFields[i].objFieldType.objData.strMasterOf
      )
        ? objPopUpValues[arrMasterCBFields[i].objFieldType.objData.strMasterOf]
        : null;

      if (booCheck === null) {
        if (isNaN(Date.parse(dtEndDate))) {
          return arrMasterCBFields[i].objFieldType.objData.strValidationMessage;
        }
      } else {
        if (!booCheck && isNaN(Date.parse(dtEndDate))) {
          return arrMasterCBFields[i].objFieldType.objData.strValidationMessage;
        }
      }
    }

    return "";
  };

  const onSave = (e) => {
    if (frmForm.current.checkValidity()) {
      if (allRequiredExist(arrFields)) {
        const strChainedValidationMsg = getValidationMessage(arrFields);

        if (strChainedValidationMsg.length === 0) {
          onDataSave(objPopUpValues);
          pErrorMessage.current.textContent = "";
          frmForm.current.classList.add("hidden");
        } else {
          pErrorMessage.current.textContent = strChainedValidationMsg;
        }
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
          <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
            <path d="M4.25 15.75H5.479L13.5 7.729L12.896 7.104L12.271 6.5L4.25 14.521ZM2.5 17.5V13.771L13.479 2.792Q14 2.271 14.719 2.271Q15.438 2.271 15.958 2.792L17.208 4.042Q17.708 4.542 17.708 5.281Q17.708 6.021 17.208 6.521L6.229 17.5ZM15.958 5.271 14.729 4.042ZM13.5 7.729 12.896 7.104 12.271 6.5V6.479L13.5 7.729Z" />
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
              <div className="mt-3 text-center sm:mt-0 sm:mx-4 sm:text-left">
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
            <div className="flex flex-col gap-2 mt-5 sm:mx-4">
              {getHtmlElements(arrFields)}
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 flex flex-col gap-4 sm:gap-1 sm:flex-row sm:justify-between sm:items-center">
            <div>
              <p
                ref={pErrorMessage}
                className={"text-sm text-red-500 sm:ml-4"}
              ></p>
            </div>
            <div className="sm:mr-4 sm:flex sm:flex-row-reverse">
              <button
                onClick={onSave}
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                {strSaveButtonTitle}
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
        </div>
      </form>
    </>
  );
};

export { Popup };
