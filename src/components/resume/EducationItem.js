import React from "react";
import { Popup } from "./Popup";
import { format } from "date-fns";

/**
 *
 * @param {{
 * educationInfo:{
 * getId: function(): string,
 * getDegree: function(): string,
 * getDescription: function(): string,
 * getInstitutionName: function(): string,
 * getStartDate: function(): string,
 * getEndDate: function(): string,
 * getCurrent: function(): boolean,
 * getCountryName: function(): string,
 * getCityName: function(): string,
 * getFieldOfStudy: function(): string,
 * setDegree: function(string):void,
 * setDescription: function(string):void,
 * setInstitutionName: function(string):void,
 * setStartDate: function(string):void,
 * setEndDate: function(string):void,
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
 * getStartDate: function(): string,
 * getEndDate: function(): string,
 * getCurrent: function(): boolean,
 * getCountryName: function(): string,
 * getCityName: function(): string,
 * getFieldOfStudy: function(): string,
 * setDegree: function(string):void,
 * setDescription: function(string):void,
 * setInstitutionName: function(string):void,
 * setStartDate: function(string):void,
 * setEndDate: function(string):void,
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
        //   onClick={() => {
        //     if (confirm("Are you sure you want to remove this Experience?")) {
        //       deleteExperience(experienceInfo.getId());
        //     }
        //   }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
            <path
              fill="#cc0000"
              d="M6.75 15.75H13.25Q13.25 15.75 13.25 15.75Q13.25 15.75 13.25 15.75V7.708H6.75V15.75Q6.75 15.75 6.75 15.75Q6.75 15.75 6.75 15.75ZM4.125 5.083V3.333H7.062L7.896 2.5H12.104L12.938 3.333H15.875V5.083ZM6.75 17.5Q6.021 17.5 5.51 16.99Q5 16.479 5 15.75V5.958H15V15.75Q15 16.479 14.49 16.99Q13.979 17.5 13.25 17.5ZM6.75 15.75H13.25Q13.25 15.75 13.25 15.75Q13.25 15.75 13.25 15.75H6.75Q6.75 15.75 6.75 15.75Q6.75 15.75 6.75 15.75Z"
            />
          </svg>
        </button>
        {/* <Popup
          strMode="edit"
          strOpeningButtonTitle="Edit"
          strPopupTitle="Edit Education"
          arrFields={getFieldsWithValues(arrPopupInputFields, experienceInfo)}
          onDataSave={editeExperience}
          strSaveButtonTitle={"Accept"}
        /> */}
      </div>
    </div>
  );
};

export { EducationItem };
