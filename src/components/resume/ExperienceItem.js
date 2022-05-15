import React from "react";
import { Popup } from "./Popup";

/**
 *
 * @param {{experienceInfo: {
 *   getId: () => string;
 *  getPosition: () => string;
 *   getCompanyName: () => string;
 *   getStartDate: () => Date;
 *   getEndDate: () => Date;
 *   getCurrentJob: () => boolean;
 *   getCountryName: () => string;
 *   getCityName: () => string;
 *   getDescription: () => string;
 *   setPosition: (arg0: string) => void;
 *   setCompanyName: (arg0: string) => void;
 *   setStartDate: (arg0: Date) => void;
 *   setEndDate: (arg0: Date) => void;
 *   setCurrentJob: (arg0: boolean) => void;
 *   setCountryName: (arg0: string) => void;
 *   setCityName: (arg0: string) => void;
 *   setDescription: (arg0: string) => void;
 *  },
 * sendEditedExperience:(objExperienceData: {
 * strPosition:string,
 * strCompanyName:string,
 * strCountryName:string,
 * booCurrentJob:string,
 * dtStartDate:string,
 * strDescription:string })=>void,
 * sendDeletedExperienceId:(strId:string)=>void,
 * arrPopupInputFields:object}} param0
 * @returns
 */
const ExperienceItem = ({
  experienceInfo,
  sendEditedExperience,
  sendDeletedExperienceId,
  arrPopupInputFields,
}) => {
  /**
   *
   * @param {Date} dtStartDate
   * @param {Date} dtEndDate
   * @param {Boolean} booCurrentJob
   */
  const getDatesText = (dtStartDate, dtEndDate, booCurrentJob) => {
    return (
      dtStartDate.toDateString() +
      " - " +
      (booCurrentJob ? "Present" : dtEndDate.toDateString())
    );
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
   *   getId: () => string;
   *  getPosition: () => string;
   *   getCompanyName: () => string;
   *   getStartDate: () => Date;
   *   getEndDate: () => Date;
   *   getCurrentJob: () => boolean;
   *   getCountryName: () => string;
   *   getCityName: () => string;
   *   getDescription: () => string;
   *   setPosition: (arg0: string) => void;
   *   setCompanyName: (arg0: string) => void;
   *   setStartDate: (arg0: Date) => void;
   *   setEndDate: (arg0: Date) => void;
   *   setCurrentJob: (arg0: boolean) => void;
   *   setCountryName: (arg0: string) => void;
   *   setCityName: (arg0: string) => void;
   *   setDescription: (arg0: string) => void;
   *  }} experienceInfo
   */
  const getFieldsWithValues = (arrPopupInputFields, experienceInfo) => {
    const newArray = [];

    const objFieldPosition = getField(arrPopupInputFields, "strPosition");
    objFieldPosition.objFieldType.objData.strInitialValue =
      experienceInfo.getPosition();
    newArray.push(objFieldPosition);

    const objFieldCompanyName = getField(arrPopupInputFields, "strCompanyName");
    objFieldCompanyName.objFieldType.objData.strInitialValue =
      experienceInfo.getCompanyName();
    newArray.push(objFieldCompanyName);

    const objFieldCountryName = getField(arrPopupInputFields, "strCountryName");
    objFieldCountryName.objFieldType.objData.strInitialValue =
      experienceInfo.getCountryName();
    newArray.push(objFieldCountryName);

    const objFieldCurrentJob = getField(arrPopupInputFields, "booCurrentJob");
    objFieldCurrentJob.objFieldType.objData.booChecked =
      experienceInfo.getCurrentJob();
    newArray.push(objFieldCurrentJob);

    const objFieldStartDate = getField(arrPopupInputFields, "dtStartDate");
    objFieldStartDate.objFieldType.objData.strInitialDate =
      experienceInfo.getStartDate().getFullYear() +
      "-" +
      experienceInfo.getStartDate().getMonth().toString().padStart(2, "0") +
      "-" +
      experienceInfo.getStartDate().getDate().toString().padStart(2, "0");
    newArray.push(objFieldStartDate);

    const objFieldEndDate = getField(arrPopupInputFields, "dtEndDate");
    if (experienceInfo.getEndDate() !== null) {
      objFieldEndDate.objFieldType.objData.strInitialDate =
        experienceInfo.getEndDate().getFullYear() +
        "-" +
        experienceInfo.getEndDate().getMonth().toString().padStart(2, "0") +
        "-" +
        experienceInfo.getEndDate().getDate().toString().padStart(2, "0");
    }

    newArray.push(objFieldEndDate);

    const objFieldDescription = getField(arrPopupInputFields, "strDescription");
    objFieldDescription.objFieldType.objData.strInitialValue =
      experienceInfo.getDescription();
    newArray.push(objFieldDescription);

    return newArray;
  };

  const editeExperience = (objExperience) => {
    console.log(objExperience);
  };

  return (
    <div className="flex justify-between px-4 py-5 bg-white sm:p-6 shadow-xl sm:rounded-md">
      <div className=" flex flex-col">
        <p className="text-base leading-6 font-medium text-gray-900">
          {experienceInfo.getPosition()}
        </p>
        <p className=" text-base leading-6 text-gray-900">
          {experienceInfo.getCompanyName()}
        </p>
        <p className=" text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {getDatesText(
            experienceInfo.getStartDate(),
            experienceInfo.getEndDate(),
            experienceInfo.getCurrentJob()
          )}
        </p>
        <p className=" mt-1 text-sm text-gray-500">
          {experienceInfo.getCountryName()}
        </p>
        <p className=" mt-3 text-base text-gray-500">
          {experienceInfo.getDescription()}
        </p>
      </div>
      <div>
        <Popup
          strMode="edit"
          strOpeningButtonTitle="Edit"
          strPopupTitle="Edit Experience"
          arrFields={getFieldsWithValues(arrPopupInputFields, experienceInfo)}
          onDataSave={editeExperience}
          strSaveButtonTitle={"Accept"}
        />
      </div>
    </div>
  );
};

export { ExperienceItem };
