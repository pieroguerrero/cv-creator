import React from "react";
import { Popup } from "./Popup";
import { format } from "date-fns";
import { MD_Education } from "../../back/MD_Education";

/**
 *
 * @param {{
 * educationInfo:{
 * getId: function(): string,
 * getDegree: function(): string,
 * getDescription: function(): string,
 * getInstitutionName: function(): string,
 * getStartDate: function(): Date,
 * getEndDate: function(): Date,
 * getCurrent: function(): boolean,
 * getCountryName: function(): string,
 * getCityName: function(): string,
 * getFieldOfStudy: function(): string,
 * setDegree: function(string):void,
 * setDescription: function(string):void,
 * setInstitutionName: function(string):void,
 * setStartDate: function(Date):void,
 * setEndDate: function(Date):void,
 * setCurrent: function(boolean):void,
 * setCountryName: function(string):void,
 * setCityName: function(string):void,
 * setFieldOfStudy: function(string):void
 * },
 * sendEditedEducation:(objEditedEdutacion:{
 * getId: function(): string,
 * getDegree: function(): string,
 * getDescription: function(): string,
 * getInstitutionName: function(): string,
 * getStartDate: function(): Date,
 * getEndDate: function(): Date,
 * getCurrent: function(): boolean,
 * getCountryName: function(): string,
 * getCityName: function(): string,
 * getFieldOfStudy: function(): string,
 * setDegree: function(string):void,
 * setDescription: function(string):void,
 * setInstitutionName: function(string):void,
 * setStartDate: function(Date):void,
 * setEndDate: function(Date):void,
 * setCurrent: function(boolean):void,
 * setCountryName: function(string):void,
 * setCityName: function(string):void,
 * setFieldOfStudy: function(string):void
 * })=>void,
 * sendDeletedEducationId:(strId:string)=>void,
 * arrPopupInputFields:object
 * }} param0
 * @returns
 */
const EducationItem = ({
  educationInfo,
  sendEditedEducation,
  sendDeletedEducationId,
  arrPopupInputFields,
}) => {
  console.log("EducationItem.MAIN.getEndDate():", educationInfo.getEndDate());
  const getDatesText = (dtStartDate, dtEndDate, booCurrentJob) => {
    return (
      format(dtStartDate, "MMM yyy") +
      " - " +
      (booCurrentJob ? "Present" : format(dtEndDate, "MMM yyy"))
    );
  };

  /**
   *
   * @param {string} strDegree
   * @param {string} strFieldOfStudy
   * @returns
   */
  const getDegreeField = (strDegree, strFieldOfStudy) => {
    return strDegree + " • " + strFieldOfStudy;
  };

  const deleteEducation = (strEducationId) => {
    sendDeletedEducationId(strEducationId);
  };

  /**
   *
   * @param {string} strEducationId
   * @param {Object} objEducationPlain
   * @param {string} objEducationPlain.strInstitutionName
   * @param {string} objEducationPlain.strDegree
   * @param {string} objEducationPlain.strFieldOfStudy
   * @param {boolean} [objEducationPlain.booCurrent]
   * @param {Date} objEducationPlain.dtStartDate
   * @param {Date} [objEducationPlain.dtEndDate]
   * @param {string} [objEducationPlain.strDescription]
   */
  const editEducation = (strEducationId, objEducationPlain) => {
    console.log(
      "EducationItem.editEducation.dtEndDate:",
      objEducationPlain.dtEndDate
    );
    const dtEndDate = Object.prototype.hasOwnProperty.call(
      objEducationPlain,
      "dtEndDate"
    )
      ? new Date(objEducationPlain.dtEndDate)
      : null;

    const strDescription = Object.prototype.hasOwnProperty.call(
      objEducationPlain,
      "strDescription"
    )
      ? objEducationPlain.strDescription
      : "";

    const booCurrent = Object.prototype.hasOwnProperty.call(
      objEducationPlain,
      "booCurrent"
    )
      ? objEducationPlain.booCurrent
      : null;

    const objEducation = MD_Education.shapeEducation(
      strEducationId,
      objEducationPlain.strDegree,
      objEducationPlain.strInstitutionName,
      new Date(objEducationPlain.dtStartDate),
      dtEndDate,
      booCurrent,
      "",
      "",
      strDescription,
      objEducationPlain.strFieldOfStudy,
      ""
    );

    sendEditedEducation(objEducation);
  };

  const getField = (arrPopupInputFields, strPropName) => {
    const intIndex = arrPopupInputFields.findIndex(
      (objField) => objField.strPropertyName === strPropName
    );

    return arrPopupInputFields[intIndex];
  };

  /**
   *
   * @param {[]} arrPopupInputFields
   * @param {{
   * getId: function(): string,
   * getDegree: function(): string,
   * getDescription: function(): string,
   * getInstitutionName: function(): string,
   * getStartDate: function(): Date,
   * getEndDate: function(): Date,
   * getCurrent: function(): boolean,
   * getCountryName: function(): string,
   * getCityName: function(): string,
   * getFieldOfStudy: function(): string,
   * setDegree: function(string):void,
   * setDescription: function(string):void,
   * setInstitutionName: function(string):void,
   * setStartDate: function(Date):void,
   * setEndDate: function(Date):void,
   * setCurrent: function(boolean):void,
   * setCountryName: function(string):void,
   * setCityName: function(string):void,
   * setFieldOfStudy: function(string):void
   * }} educationInfo
   * @returns
   */
  const getFieldsWithValues = (arrPopupInputFields, educationInfo) => {
    const newArray = [];

    const objFieldInstName = getField(
      arrPopupInputFields,
      "strInstitutionName"
    );
    objFieldInstName.objFieldType.objData.strInitialValue =
      educationInfo.getInstitutionName();
    newArray.push(objFieldInstName);

    const objFieldDegree = getField(arrPopupInputFields, "strDegree");
    objFieldDegree.objFieldType.objData.strInitialValue =
      educationInfo.getDegree();
    newArray.push(objFieldDegree);

    const objFieldFieldOfStudy = getField(
      arrPopupInputFields,
      "strFieldOfStudy"
    );
    objFieldFieldOfStudy.objFieldType.objData.strInitialValue =
      educationInfo.getFieldOfStudy();
    newArray.push(objFieldFieldOfStudy);

    const objFieldCurrent = getField(arrPopupInputFields, "booCurrent");
    objFieldCurrent.objFieldType.objData.booChecked =
      educationInfo.getCurrent();
    newArray.push(objFieldCurrent);

    const objFieldStartDate = getField(arrPopupInputFields, "dtStartDate");
    objFieldStartDate.objFieldType.objData.strInitialDate =
      educationInfo.getStartDate().getFullYear() +
      "-" +
      (educationInfo.getStartDate().getMonth() + 1)
        .toString()
        .padStart(2, "0") +
      "-" +
      educationInfo.getStartDate().getDate().toString().padStart(2, "0");
    newArray.push(objFieldStartDate);

    const objFieldEndDate = getField(arrPopupInputFields, "dtEndDate");
    if (educationInfo.getEndDate() !== null) {
      objFieldEndDate.objFieldType.objData.strInitialDate =
        educationInfo.getEndDate().getFullYear() +
        "-" +
        (educationInfo.getEndDate().getMonth() + 1)
          .toString()
          .padStart(2, "0") +
        "-" +
        educationInfo.getEndDate().getDate().toString().padStart(2, "0");
    } else objFieldEndDate.objFieldType.objData.strInitialDate = "";
    newArray.push(objFieldEndDate);

    const objFieldDescription = getField(arrPopupInputFields, "strDescription");
    if (
      educationInfo.getDescription() &&
      educationInfo.getDescription().length > 0
    ) {
      objFieldDescription.objFieldType.objData.strInitialValue =
        educationInfo.getDescription();
    } else objFieldDescription.objFieldType.objData.strInitialValue = "";
    newArray.push(objFieldDescription);

    return newArray;
  };

  return (
    <div className="flex justify-between px-4 py-5 bg-white sm:p-6 shadow-xl sm:rounded-md">
      <div className=" flex flex-col">
        <p className="text-base leading-6 font-medium text-gray-900">
          {educationInfo.getInstitutionName()}
        </p>
        <p className=" text-base leading-6 text-gray-900">
          {getDegreeField(
            educationInfo.getDegree(),
            educationInfo.getFieldOfStudy()
          )}
        </p>
        <p className=" text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {getDatesText(
            educationInfo.getStartDate(),
            educationInfo.getEndDate(),
            educationInfo.getCurrent()
          )}
        </p>
        <p className=" mt-3 text-base text-gray-500">
          {educationInfo.getDescription()}
        </p>
      </div>
      <div className=" flex gap-3 items-start">
        <button
          onClick={() => {
            if (confirm("Are you sure you want to remove this item?")) {
              deleteEducation(educationInfo.getId());
            }
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
            <path
              fill="#cc0000"
              d="M6.75 15.75H13.25Q13.25 15.75 13.25 15.75Q13.25 15.75 13.25 15.75V7.708H6.75V15.75Q6.75 15.75 6.75 15.75Q6.75 15.75 6.75 15.75ZM4.125 5.083V3.333H7.062L7.896 2.5H12.104L12.938 3.333H15.875V5.083ZM6.75 17.5Q6.021 17.5 5.51 16.99Q5 16.479 5 15.75V5.958H15V15.75Q15 16.479 14.49 16.99Q13.979 17.5 13.25 17.5ZM6.75 15.75H13.25Q13.25 15.75 13.25 15.75Q13.25 15.75 13.25 15.75H6.75Q6.75 15.75 6.75 15.75Q6.75 15.75 6.75 15.75Z"
            />
          </svg>
        </button>
        <Popup
          strMode="edit"
          strOpeningButtonTitle="Edit"
          strPopupTitle="Edit Education"
          arrFields={getFieldsWithValues(arrPopupInputFields, educationInfo)}
          onDataSave={editEducation.bind(null, educationInfo.getId())}
          strSaveButtonTitle={"Accept"}
        />
      </div>
    </div>
  );
};

export { EducationItem };
