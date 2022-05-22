import { ExperienceItem } from "./ExperienceItem";
import React, { useState } from "react";
import { Popup } from "./FormPopUp/Popup";
import { MD_Experience } from "../../back/MD_Experience";
import uniqid from "uniqid";

/**
 *
 * @param {{experienceList:{
 * getId: function(): string,
 * getPosition: function(): string,
 * getCompanyName: function(): string,
 * getStartDate: function(): Date,
 * getEndDate: function(): Date,
 * getCurrentJob: function(): boolean,
 * getCountryName: function(): string,
 * getCityName: function(): string,
 * getDescription: function(): string,
 * setPosition: function(string):void,
 * setCompanyName: function(string):void,
 * setStartDate: function(Date):void,
 * setEndDate: function(Date):void,
 * setCurrentJob: function(boolean):void,
 * setCountryName: function(string):void,
 * setCityName: function(string):void,
 * setDescription: function(string):void}[],
 * sendNewExperienceToResume: function(Object):void,
 * sendEditedExperienceToResume: function(Object):void,
 * sendDeletedExperienceIdToResume: function(string):void
 * }} param0
 * @returns
 */
const Experience = ({
  experienceList,
  sendNewExperienceToResume,
  sendEditedExperienceToResume,
  sendDeletedExperienceIdToResume,
}) => {
  const [stateArrExperienceObjs, setStateArrExperienceObjs] =
    useState(experienceList);

  const getExperienceJSXItem = (expItem) => {
    return (
      <div key={expItem.getId()}>
        <ExperienceItem
          experienceInfo={expItem}
          sendEditedExperience={onEditExperience.bind(null, expItem.getId())}
          sendDeletedExperienceId={onDeleteExperience.bind(
            null,
            expItem.getId()
          )}
          arrPopupInputFields={arrPopupInputFields}
        />
      </div>
    );
  };

  const getExperienceList = (arrExperienceObjs) => {
    return sortExperienceArray(arrExperienceObjs).map((expItem) =>
      getExperienceJSXItem(expItem)
    );
  };

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
      strPropertyName: "strCompanyURL",
      strFieldTitle: "Company Page",
      strHelpText: "",
      readOnly: false,
      intColSpan: 2,
      strValidationMessage: "",
      objFieldType: {
        strType: "url",
        objData: {
          strPlaceHolder: "www.company.com",
          booIsRequired: false,
          strInitialURL: "",
          regexPattern: /(.*?)/gm,
          strPrefix: "https://",
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
        objData: {
          booChecked: false,
          strMasterOf: "dtEndDate",
          strValidationMessage:
            "Please, indicate if this is a current Job or its End date.",
        },
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
          strInitialDate: "",
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
          strInitialDate: "",
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
          strInitialValue: "",
        },
      },
    },
  ];

  //TODO:Sort the array
  /**
   *
   * @param {{
   * getId: function(): string,
   * getPosition: function(): string,
   * getCompanyName: function(): string,
   * getStartDate: function(): Date,
   * getEndDate: function(): Date,
   * getCurrentJob: function(): boolean,
   * getCountryName: function(): string,
   * getCityName: function(): string,
   * getDescription: function(): string,
   * setPosition: function(string):void,
   * setCompanyName: function(string):void,
   * setStartDate: function(Date):void,
   * setEndDate: function(Date):void,
   * setCurrentJob: function(boolean):void,
   * setCountryName: function(string):void,
   * setCityName: function(string):void,
   * setDescription: function(string):void,
   * getCompanyURL: function(): string,
   * setCompanyURL: function(string):void,
   * getCompanyDescription: function(): string,
   * setCompanyDescription: function(string):void,
   * }[]} arrExpItems
   * @returns
   */
  const sortExperienceArray = (arrExpItems) => {
    const arrExpItemsTemp = [...arrExpItems];

    return arrExpItemsTemp.sort((a, b) => {
      if (a.getCurrentJob()) {
        if (b.getCurrentJob()) {
          return a.getStartDate() <= b.getStartDate() ? -1 : 1;
        } else {
          return -1;
        }
      } else {
        if (b.getCurrentJob()) {
          return 1;
        } else {
          return a.getEndDate() >= b.getEndDate() ? -1 : 1;
        }
      }
    });
  };

  const addNewExperienceToState = (objExperience) => {
    const arrTempExperienceObjs = [...stateArrExperienceObjs];
    arrTempExperienceObjs.push(objExperience);
    setStateArrExperienceObjs(arrTempExperienceObjs);
  };

  /**
   *
   * @param {{
   * getId: function(): string,
   * getPosition: function(): string,
   * getCompanyName: function(): string,
   * getStartDate: function(): Date,
   * getEndDate: function(): Date,
   * getCurrentJob: function(): boolean,
   * getCountryName: function(): string,
   * getCityName: function(): string,
   * getDescription: function(): string,
   * setPosition: function(string):void,
   * setCompanyName: function(string):void,
   * setStartDate: function(Date):void,
   * setEndDate: function(Date):void,
   * setCurrentJob: function(boolean):void,
   * setCountryName: function(string):void,
   * setCityName: function(string):void,
   * setDescription: function(string):void}} objExperience
   */
  const editExperienceOnState = (objExperience) => {
    const arrTempExperienceObjs = [...stateArrExperienceObjs];

    const intIndex = arrTempExperienceObjs.findIndex(
      (objTempExperience) => objTempExperience.getId() === objExperience.getId()
    );

    if (intIndex >= 0) {
      arrTempExperienceObjs[intIndex] = objExperience;
      setStateArrExperienceObjs(arrTempExperienceObjs);
    }
  };

  /**
   *
   * @param {{
   * strPosition:string,
   * strCompanyName:string,
   * strCountryName:string,
   * strCompanyURL:string,
   * booCurrentJob:string,
   * dtStartDate:string,
   * strDescription:string }} objExperienceItem
   */
  const onEditExperience = (strExperienceId, objExperienceItem) => {
    const dtEndDate = Object.prototype.hasOwnProperty.call(
      objExperienceItem,
      "dtEndDate"
    )
      ? new Date(objExperienceItem.dtEndDate)
      : null;

    const objExperience = MD_Experience.shapeExperience(
      strExperienceId,
      objExperienceItem.strPosition,
      objExperienceItem.strCompanyName,
      new Date(objExperienceItem.dtStartDate),
      dtEndDate,
      objExperienceItem.booCurrentJob ? true : false, //TODO: to change when a new Checkbox field is created
      objExperienceItem.strCountryName,
      "",
      objExperienceItem.strDescription,
      objExperienceItem.strCompanyURL,
      ""
    );

    editExperienceOnState(objExperience);

    sendEditedExperienceToResume(objExperience);
  };

  /**
   *
   * @param {{
   * strPosition:string,
   * strCompanyName:string,
   * strCountryName:string,
   * strCompanyURL:string,
   * booCurrentJob:string,
   * dtStartDate:string,
   * strDescription:string }} objPopUpExperience
   */
  const onCreateExperience = (objPopUpExperience) => {
    const dtEndDate = Object.prototype.hasOwnProperty.call(
      objPopUpExperience,
      "dtEndDate"
    )
      ? new Date(objPopUpExperience.dtEndDate)
      : null;

    const objExperience = MD_Experience.shapeExperience(
      uniqid(),
      objPopUpExperience.strPosition,
      objPopUpExperience.strCompanyName,
      new Date(objPopUpExperience.dtStartDate),
      dtEndDate,
      objPopUpExperience.booCurrentJob ? true : false, //TODO: to change when a new Checkbox field is created
      objPopUpExperience.strCountryName,
      "",
      objPopUpExperience.strDescription,
      objPopUpExperience.strCompanyURL,
      ""
    );

    addNewExperienceToState(objExperience);

    sendNewExperienceToResume(objExperience);
  };

  /**
   *
   * @param {string} strExperienceId
   */
  const onDeleteExperience = (strExperienceId) => {
    //const arrTempExperienceObjs = [...stateArrExperienceObjs];

    setStateArrExperienceObjs((prevState) =>
      prevState.filter((ele) => ele.getId() !== strExperienceId)
    );
    sendDeletedExperienceIdToResume(strExperienceId);
  };

  return (
    <div className="bg-gray-100">
      <div className="flex flex-col gap-6 md:gap-0 md:grid md:grid-cols-[30%_70%]  max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 sm:pr-8 sm:px-0">
          <h2 className="text-lg font-medium leading-6 text-gray-900">
            Experience
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="flex justify-end px-4 py-3 bg-gray-50 text-right sm:px-6">
            <Popup
              strMode={"create"}
              strOpeningButtonTitle={"Add Experience"}
              strPopupTitle={"New Experience"}
              onDataSave={onCreateExperience}
              arrFields={arrPopupInputFields}
              strSaveButtonTitle={"Add"}
            />
          </div>
          <div className="flex flex-col gap-6 px-4 py-5 bg-gray-100 sm:p-6">
            {getExperienceList(stateArrExperienceObjs)}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Experience };
