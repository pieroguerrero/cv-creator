import React from "react";
import { Popup } from "./Popup";
import { format } from "date-fns";

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
      format(dtStartDate, "MMM yyy") +
      " - " +
      (booCurrentJob ? "Present" : format(dtEndDate, "MMM yyy"))
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
      (experienceInfo.getStartDate().getMonth() + 1)
        .toString()
        .padStart(2, "0") +
      "-" +
      experienceInfo.getStartDate().getDate().toString().padStart(2, "0");
    newArray.push(objFieldStartDate);

    const objFieldEndDate = getField(arrPopupInputFields, "dtEndDate");
    if (experienceInfo.getEndDate() !== null) {
      objFieldEndDate.objFieldType.objData.strInitialDate =
        experienceInfo.getEndDate().getFullYear() +
        "-" +
        (experienceInfo.getEndDate().getMonth() + 1)
          .toString()
          .padStart(2, "0") +
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

  const editExperience = (objExperience) => {
    sendEditedExperience(objExperience);
  };

  const deleteExperience = (strExperienceId) => {
    sendDeletedExperienceId(strExperienceId);
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
      <div className=" flex gap-3 items-start">
        <button
          onClick={() => {
            if (confirm("Are you sure you want to remove this item?")) {
              deleteExperience(experienceInfo.getId());
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
          strPopupTitle="Edit Experience"
          arrFields={getFieldsWithValues(arrPopupInputFields, experienceInfo)}
          onDataSave={editExperience}
          strSaveButtonTitle={"Accept"}
        />
      </div>
    </div>
  );
};

export { ExperienceItem };
