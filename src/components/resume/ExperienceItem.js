import { DataField } from "./DataField";
import React from "react";

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
 * sendDeletedExperienceId:(strId:string)=>void}} param0
 * @returns
 */
const ExperienceItem = ({
  experienceInfo,
  sendEditedExperience,
  sendDeletedExperienceId,
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
  return (
    <div className="flex justify-between px-4 py-5 bg-white sm:p-6 shadow-xl transform transition-all sm:rounded-md">
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
        <button>Edit</button>
      </div>
    </div>
  );
};

export { ExperienceItem };
