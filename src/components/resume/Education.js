import React, { useState } from "react";
import { MD_Education } from "../../back/MD_Education";
import { EducationItem } from "./EducationItem";
import { Popup } from "./FormPopUp/Popup";
import uniqid from "uniqid";

/**
 *
 * @param {{educationList:{
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
 * setInstitutionURL: function(string):void
 * getInstitutionURL: function(): string,
 * }[],
 * strHelpText: string,
 * strTitle: string,
 * sendDeletedEducationIdToResume: function(string):void,
 * sendEditedEducationToResume: function(Object):void,
 * sendNewEducationToResume: function(Object):void
 * }} param0
 * @returns
 */
const Education = ({
  educationList,
  strHelpText,
  strTitle,
  sendDeletedEducationIdToResume,
  sendEditedEducationToResume,
  sendNewEducationToResume,
}) => {
  const [stateArrEducationObjs, setStateArrEducationObjs] =
    useState(educationList);

  const arrPopupInputFields = [
    {
      strPropertyName: "strInstitutionName",
      strFieldTitle: "Institution Name",
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
      strPropertyName: "strInstitutionURL",
      strFieldTitle: "Institution Page",
      strHelpText: "",
      readOnly: false,
      intColSpan: 2,
      strValidationMessage: "",
      objFieldType: {
        strType: "url",
        objData: {
          strPlaceHolder: "www.myacademy.com",
          booIsRequired: false,
          strInitialURL: "",
          regexPattern: /(.*?)/gm,
          strPrefix: "https://",
        },
      },
    },
    {
      strPropertyName: "strDegree",
      strFieldTitle: "Degree",
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
      strPropertyName: "strFieldOfStudy",
      strFieldTitle: "Field of Study",
      strHelpText: "",
      readOnly: false,
      intColSpan: 2,
      strValidationMessage: "",
      objFieldType: {
        strType: "text",
        objData: {
          strPlaceHolder: "E.g. Marketing, Sofware Engineering, etc",
          booIsRequired: true,
          strInitialValue: "",
        },
      },
    },
    {
      strPropertyName: "booCurrent",
      strFieldTitle: "Currently studying",
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
            "Please, indicate the end date of the studies or if you are currently studying.",
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
          booIsRequired: false,
          intCols: null,
          intRows: 3,
          strInitialValue: "",
        },
      },
    },
  ];

  /**
   *
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
   * setInstitutionURL: function(string):void
   * getInstitutionURL: function(): string,
   * }[]} arrEduItems
   * @returns
   */
  const sortEducationArray = (arrEduItems) => {
    const arrEdutemsTemp = [...arrEduItems];

    return arrEdutemsTemp.sort((a, b) => {
      if (a.getCurrent()) {
        if (b.getCurrent()) {
          return a.getStartDate() <= b.getStartDate() ? -1 : 1;
        } else {
          return -1;
        }
      } else {
        if (b.getCurrent()) {
          return 1;
        } else {
          return a.getEndDate() >= b.getEndDate() ? -1 : 1;
        }
      }
    });
  };

  /**
   *
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
   * setInstitutionURL: function(string):void
   * getInstitutionURL: function(): string,
   * }} objEducation
   */
  const editEducationOnState = (objEducation) => {
    const arrTempEducationObjs = [...stateArrEducationObjs];

    const intIndex = arrTempEducationObjs.findIndex(
      (objTempEducation) => objTempEducation.getId() === objEducation.getId()
    );

    if (intIndex >= 0) {
      arrTempEducationObjs[intIndex] = objEducation;
      setStateArrEducationObjs(arrTempEducationObjs);
    }
  };

  /**
   *
   * @param {string} strId
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
   * setInstitutionURL: function(string):void
   * getInstitutionURL: function(): string,
   * }} objEducationEdited
   */
  const onEditEducation = (strId, objEducationEdited) => {
    console.log(
      "Education.onEditEducation.getEndDate():",
      objEducationEdited.getEndDate()
    );

    if (objEducationEdited.getId() === strId) {
      editEducationOnState(objEducationEdited);
      sendEditedEducationToResume(objEducationEdited);
    } else alert("Error: Edited Education Id missmatch");
  };

  /**
   *
   * @param {string} strEducationId
   */
  const onDeleteEducation = (strEducationId) => {
    setStateArrEducationObjs((prevState) =>
      prevState.filter((ele) => ele.getId() !== strEducationId)
    );
    sendDeletedEducationIdToResume(strEducationId);
  };

  const getEducationJSXItem = (eduItem) => {
    return (
      <div key={eduItem.getId()}>
        <EducationItem
          educationInfo={eduItem}
          sendEditedEducation={onEditEducation.bind(null, eduItem.getId())}
          sendDeletedEducationId={onDeleteEducation.bind(null, eduItem.getId())}
          arrPopupInputFields={arrPopupInputFields}
        />
      </div>
    );
  };

  const getEducationList = (arrEducationObjs) => {
    return sortEducationArray(arrEducationObjs).map((eduItem) =>
      getEducationJSXItem(eduItem)
    );
  };

  const addNewEducationToState = (objEducation) => {
    const arrTempEducationObjs = [...stateArrEducationObjs];
    arrTempEducationObjs.push(objEducation);
    setStateArrEducationObjs(arrTempEducationObjs);
  };

  /**
   * @param {Object} objEducationPlain
   * @param {string} objEducationPlain.strInstitutionName
   * @param {string} [objEducationPlain.strDescription]
   * @param {Date} [objEducationPlain.dtEndDate]
   * @param {Date} objEducationPlain.dtStartDate
   * @param {boolean} [objEducationPlain.booCurrent]
   * @param {string} objEducationPlain.strFieldOfStudy
   * @param {string} objEducationPlain.strDegree
   * @param {string} [objEducationPlain.strInstitutionURL]
   * @param {string} objEducationPlain.strCountryName
   */
  const onCreateEducation = (objEducationPlain) => {
    const objEducation = MD_Education.shapeEducation(
      uniqid(),
      objEducationPlain.strDegree,
      objEducationPlain.strInstitutionName,
      objEducationPlain.dtStartDate,
      objEducationPlain.dtEndDate ?? null,
      objEducationPlain.booCurrent ?? null,
      objEducationPlain.strCountryName,
      "",
      objEducationPlain.strDescription ?? "",
      objEducationPlain.strFieldOfStudy,
      objEducationPlain.strInstitutionURL
    );

    addNewEducationToState(objEducation);

    sendNewEducationToResume(objEducation);
  };

  return (
    <div className="bg-gray-100">
      <div className="flex flex-col gap-6 md:gap-0 md:grid md:grid-cols-[30%_70%]  max-w-7xl mx-auto py-6 pb-11 sm:px-6 lg:px-8">
        <div className="px-4 sm:pr-8 sm:px-0">
          <h2 className="text-lg font-medium leading-6 text-gray-900">
            {strTitle}
          </h2>
          <p className="mt-1 text-sm text-gray-600">{strHelpText}</p>
        </div>
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="flex justify-end px-4 py-3 bg-gray-50 text-right sm:px-6">
            <Popup
              strMode={"create"}
              strOpeningButtonTitle={"Add Education"}
              strPopupTitle={"New Education"}
              onDataSave={onCreateEducation}
              arrFields={arrPopupInputFields}
              strSaveButtonTitle={"Add"}
            />
          </div>
          <div className="flex flex-col gap-6 px-4 py-5 bg-gray-100 sm:p-6">
            {getEducationList(stateArrEducationObjs)}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Education };
