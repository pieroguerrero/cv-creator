const Helpers = (() => {
  const MODE = {
    EDIT: "edit",
    CREATE: "create",
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
   * objData:Object}
   * }[]} arrFields
   */
  const initializeDataObject = (arrFields) => {
    const objPopUpValues = {};

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
      } else if (objField.objFieldType.strType === "url") {
        if (objField.objFieldType.objData.strInitialURL.length > 0) {
          objPopUpValues[objField.strPropertyName] =
            objField.objFieldType.objData.strInitialURL;
        }
      }
    });

    return objPopUpValues;
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
   * objData:Object}}[]} arrFields,
   * @param {object} objPopUpValues2,
   * @returns
   */
  const allRequiredExist = (arrFields, objPopUpValues2) => {
    return arrFields.reduce((result, objField) => {
      if (
        Object.prototype.hasOwnProperty.call(
          objField.objFieldType.objData,
          "booIsRequired"
        ) &&
        objField.objFieldType.objData.booIsRequired
      ) {
        return Object.prototype.hasOwnProperty.call(
          objPopUpValues2,
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
   * objData:Object}}[]} arrFields,
   * @param {object} objPopUpValues
   * @returns
   */
  const getValidationMessage = (arrFields, objPopUpValues) => {
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

  return { MODE, initializeDataObject, allRequiredExist, getValidationMessage };
})();

export { Helpers };
