import { ExperienceItem } from "./ExperienceItem";
import React, { useState } from "react";
import { Popup } from "./Popup";
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
 * getCurrentJob: function(): string,
 * getCountryName: function(): string,
 * getCityName: function(): string,
 * getDescription: function(): string,
 * setPosition: function(string):void,
 * setCompanyName: function(string):void,
 * setStartDate: function(Date):void,
 * setEndDate: function(Date):void,
 * setCurrentJob: function(string):void,
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
        />
      </div>
    );
  };

  const [arrExperienceItems, setArrExperienceItems] = useState(
    experienceList.map((expItem) => getExperienceJSXItem(expItem))
  );

  const arrPopupInputFields = [
    {
      strPropertyName: "strPosition",
      strFieldTitle: "Position",
      strPlaceHolder: "",
      booIsRequired: true,
      strInputType: "text",
      strHelpText: "",
      readOnly: false,
      intColSpan: 2,
    },
    {
      strPropertyName: "strCompanyName",
      strFieldTitle: "Company Name",
      strPlaceHolder: "",
      booIsRequired: true,
      strInputType: "text",
      strHelpText: "",
      readOnly: false,
      intColSpan: 2,
    },
    {
      strPropertyName: "strCountryName",
      strFieldTitle: "Location",
      strPlaceHolder: "City, Conuntry",
      booIsRequired: true,
      strInputType: "text",
      strHelpText: "",
      readOnly: false,
      intColSpan: 2,
    },
    {
      strPropertyName: "booCurrentJob",
      strFieldTitle: "Current Job",
      strPlaceHolder: "",
      booIsRequired: true,
      strInputType: "text",
      strHelpText: "",
      readOnly: false,
      intColSpan: 2,
    },
    {
      strPropertyName: "dtStartDate",
      strFieldTitle: "Start date",
      strPlaceHolder: "",
      booIsRequired: true,
      strInputType: "date",
      strHelpText: "",
      readOnly: false,
      intColSpan: 1,
    },
    {
      strPropertyName: "dtEndDate",
      strFieldTitle: "End date",
      strPlaceHolder: "",
      booIsRequired: false,
      strInputType: "date",
      strHelpText: "",
      readOnly: false,
      intColSpan: 1,
    },
    {
      strPropertyName: "strDescription",
      strFieldTitle: "Description",
      strPlaceHolder:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      booIsRequired: true,
      strInputType: "textarea",
      strHelpText: "",
      readOnly: false,
      intColSpan: 2,
    },
  ];

  //TODO:Sort the array
  const sortExperienceArray = (arrExpItems) => {
    return arrExpItems;
  };

  const addNewExperienceToState = (objExperience) => {
    const arrTempExperienceItems = [...arrExperienceItems];
    arrTempExperienceItems.push(getExperienceJSXItem(objExperience));

    setArrExperienceItems(sortExperienceArray(arrTempExperienceItems));
  };

  /**
   *
   * @param {{
   * getId: function(): string,
   * getPosition: function(): string,
   * getCompanyName: function(): string,
   * getStartDate: function(): Date,
   * getEndDate: function(): Date,
   * getCurrentJob: function(): string,
   * getCountryName: function(): string,
   * getCityName: function(): string,
   * getDescription: function(): string,
   * setPosition: function(string):void,
   * setCompanyName: function(string):void,
   * setStartDate: function(Date):void,
   * setEndDate: function(Date):void,
   * setCurrentJob: function(string):void,
   * setCountryName: function(string):void,
   * setCityName: function(string):void,
   * setDescription: function(string):void}} objExperience
   */
  const editExperienceOnState = (objExperience) => {
    const arrTempExperienceItems = [...arrExperienceItems];

    const intIndex = arrTempExperienceItems.findIndex(
      (itemJSX) => itemJSX.key === objExperience.getId()
    );

    if (intIndex >= 0) {
      arrTempExperienceItems[intIndex] = getExperienceJSXItem(objExperience);
      setArrExperienceItems(sortExperienceArray(arrTempExperienceItems));
    }
  };

  /**
   *
   * @param {{
   * strPosition:string,
   * strCompanyName:string,
   * strCountryName:string,
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
      objExperienceItem.strDescription
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
   * booCurrentJob:string,
   * dtStartDate:string,
   * strDescription:string }} objPopUpExperience
   */
  const onCreateExperience = (objPopUpExperience) => {
    console.log("Esperience.onCreateExperience", objPopUpExperience);

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
      objPopUpExperience.strDescription
    );

    addNewExperienceToState(objExperience);

    sendNewExperienceToResume(objExperience);
  };

  /**
   *
   * @param {string} strExperienceId
   */
  const onDeleteExperience = (strExperienceId) => {
    const arrTempExperienceItems = [...arrExperienceItems];

    setArrExperienceItems(
      arrTempExperienceItems.filter((ele) => ele.key === strExperienceId)
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
              arrFields={arrPopupInputFields}
              onDataSave={onCreateExperience}
            />
          </div>
          <div className="flex flex-col gap-5 px-4 py-5 bg-white sm:p-6">
            {arrExperienceItems}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Experience };
