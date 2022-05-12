import { ExperienceItem } from "./ExperienceItem";
import React from "react";
import PropTypes from "prop-types";
import { Popup } from "./Popup";

/**
 *
 * @param {{experienceList:{
 * getId: function(): string,
 * getPosition: function(): string,
 * getCompanyName: function(): string,
 * getStartDate: function(): string,
 * getEndDate: function(): string,
 * getCurrentJob: function(): string,
 * getCountryName: function(): string,
 * getCityName: function(): string,
 * getDescription: function(): string,
 * setPosition: function(string):void,
 * setCompanyName: function(string):void,
 * setStartDate: function(string):void,
 * setEndDate: function(string):void,
 * setCurrentJob: function(string):void,
 * setCountryName: function(string):void,
 * setCityName: function(string):void,
 * setDescription: function(string):void}[]}} param0
 * @returns
 */
const Experience = ({ experienceList }) => {
  Experience.propTypes = {
    experienceList: PropTypes.array,
  };

  const arrExperienceItems = experienceList.map((expItem) => (
    <ExperienceItem key={expItem.getId()} experienceInfo={expItem} />
  ));

  const arrPopupInputFields = [
    {
      strFieldName: "strPosition",
      strFieldTitle: "Position",
      strPlaceHolder: "",
      booIsRequired: true,
      strInputType: "text",
      strHelpText: "",
      intPosition: 1,
      intColSpan: 2,
    },
    {
      strFieldName: "strCompanyName",
      strFieldTitle: "Company Name",
      strPlaceHolder: "",
      booIsRequired: true,
      strInputType: "text",
      strHelpText: "",
      intPosition: 2,
      intColSpan: 2,
    },
    {
      strFieldName: "strCountryName",
      strFieldTitle: "Location",
      strPlaceHolder: "City, Conuntry",
      booIsRequired: true,
      strInputType: "text",
      strHelpText: "",
      intPosition: 3,
      intColSpan: 2,
    },
    {
      strFieldName: "booCurrentJob",
      strFieldTitle: "Current Job",
      strPlaceHolder: "",
      booIsRequired: true,
      strInputType: "text",
      strHelpText: "",
      intPosition: 4,
      intColSpan: 2,
    },
    {
      strFieldName: "dtStartDate",
      strFieldTitle: "Start date",
      strPlaceHolder: "",
      booIsRequired: true,
      strInputType: "text",
      strHelpText: "",
      intPosition: 5,
      intColSpan: 1,
    },
    {
      strFieldName: "dtEndDate",
      strFieldTitle: "End date",
      strPlaceHolder: "",
      booIsRequired: false,
      strInputType: "text",
      strHelpText: "",
      intPosition: 6,
      intColSpan: 1,
    },
    {
      strFieldName: "strDescription",
      strFieldTitle: "Description",
      strPlaceHolder:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      booIsRequired: true,
      strInputType: "textarea",
      strHelpText: "",
      intPosition: 7,
      intColSpan: 2,
    },
  ];

  const saveNewExperience = () => {
    //Pass the experience to Resume
    //recalculate de arrExperienceItems variable with push()
  };

  /*TODO: 1: Coppiar el prop a una variable local, 2: cuando se agrege un un nuevo ExperienceItem, 
  //2.1: Enviar ese item al Resumen, 2.2: recalcular la lista de ExpItems para que rederice*/

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
