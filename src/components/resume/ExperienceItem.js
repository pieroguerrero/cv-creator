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
 * sendDeletedExperienceId:(strId:string)=>void}} param0
 * @returns
 */
const ExperienceItem = ({
  experienceInfo,
  sendEditedExperience,
  sendDeletedExperienceId,
}) => {
  const arrPopupInputFields = [
    {
      strPropertyName: "strPosition",
      strFieldTitle: "Position",
      strHelpText: "",
      readOnly: false,
      intColSpan: 2,
      strValidationMessage: "",
      objFieldType: {
        strType: "text",
        objData: {
          strPlaceHolder: "",
          booIsRequired: true,
          strInitialValue: "",
        },
      },
    },
    {
      strPropertyName: "strCompanyName",
      strFieldTitle: "Company Name",
      strHelpText: "",
      readOnly: false,
      intColSpan: 2,
      strValidationMessage: "",
      objFieldType: {
        strType: "text",
        objData: {
          strPlaceHolder: "",
          booIsRequired: true,
          strInitialValue: "",
        },
      },
    },
    {
      strPropertyName: "strCountryName",
      strFieldTitle: "Location",
      strHelpText: "",
      readOnly: false,
      intColSpan: 2,
      strValidationMessage: "",
      objFieldType: {
        strType: "text",
        objData: {
          strPlaceHolder: "City, Country",
          booIsRequired: true,
          strInitialValue: "",
        },
      },
    },
    {
      strPropertyName: "booCurrentJob",
      strFieldTitle: "Current Job",
      strHelpText: "",
      readOnly: false,
      intColSpan: 2,
      strValidationMessage: "",
      objFieldType: {
        strType: "checkbox",
        objData: { booChecked: false },
      },
    },
    {
      strPropertyName: "dtStartDate",
      strFieldTitle: "Start date",
      strHelpText: "",
      readOnly: false,
      intColSpan: 1,
      strValidationMessage: "",
      objFieldType: {
        strType: "date",
        objData: {
          booIsRequired: true,
          dtInitialValue: null,
          dtMinDate: null,
          dtMaxDate: null,
          strFieldType: "date",
        },
      },
    },
    {
      strPropertyName: "dtEndDate",
      strFieldTitle: "End date",
      strHelpText: "",
      readOnly: false,
      intColSpan: 1,
      strValidationMessage: "",
      objFieldType: {
        strType: "date",
        objData: {
          booIsRequired: false,
          dtInitialValue: null,
          dtMinDate: null,
          dtMaxDate: null,
          strFieldType: "date",
        },
      },
    },
    {
      strPropertyName: "strDescription",
      strFieldTitle: "Description",
      strHelpText: "",
      readOnly: false,
      intColSpan: 2,
      strValidationMessage: "",
      objFieldType: {
        strType: "textarea",
        objData: {
          strPlaceHolder: "",
          booIsRequired: true,
          intCols: null,
          intRows: 3,
        },
      },
    },
  ];

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
          arrFields={arrPopupInputFields}
          onDataSave={editeExperience}
          strSaveButtonTitle={"Accept"}
        />
      </div>
    </div>
  );
};

export { ExperienceItem };
