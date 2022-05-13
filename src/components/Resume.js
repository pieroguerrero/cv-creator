import { PersonalInfo } from "./resume/PersonalInfo";
import { Experience } from "./resume/Experience";
import { Education } from "./resume/Education";
import React, { useState } from "react";
import { MD_Resume } from "../back/MD_Resume";
import { MD_PersonalInfo } from "../back/MD_PersonalInfo";
import uniqid from "uniqid";

/**
 *
 * @param {{
 * arrExperienceValues:{
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
 * arrEducationValues:{
 * getId: function(): string,
 * getDegree: function(): string,
 * getInstitutionName: function(): string,
 * getStartDate: function(): Date,
 * getEndDate: function(): Date,
 * getCurrent: function(): string,
 * getCountryName: function(): string,
 * getCityName: function(): string,
 * setDegree: function(string):void,
 * setInstitutionName: function(string):void,
 * setStartDate: function(Date):void,
 * setEndDate: function(Date):void,
 * setCurrent: function(string):void,
 * setCountryName: function(string):void,
 * setCityName: function(string):void}[],
 * objPersonalInfoValues:{
 * getId: function(): string,
 * getFirstName: function(): string,
 * getLastName: function(): string,
 * getEmail: function(): string,
 * getPhone: function(): string,
 * getAbout: function(): string,
 * setFirstName: function(string):void,
 * setLastName: function(string):void,
 * setEmail: function(string):void,
 * setPhone: function(string):void,
 * setAbout: function(string):void},
 * onGenerateCV:function(object):void}} param0
 * @returns
 */
const Resume = ({
  arrExperienceValues,
  arrEducationValues,
  objPersonalInfoValues,
  onGenerateCV,
}) => {
  //TODO: to create the ResumeObject and send it to the App so it can be printed
  //TODO: include de ABOUT in the Personal infor, change it to MainInfo
  const [resumeState, setResume] = useState({
    personalInfo: null,
    experienceList: [],
    educationList: [],
  });

  const objPersonalInfoPlain = {
    strFirsName: objPersonalInfoValues.getFirstName(),
    strLastName: objPersonalInfoValues.getLastName(),
    strEmail: objPersonalInfoValues.getEmail(),
    strAbout: objPersonalInfoValues.getAbout(),
    strPhone: objPersonalInfoValues.getPhone(),
  };

  const experienceList = [...arrExperienceValues];
  const educationList = [...arrEducationValues];

  const onPersonalInfoChange = (strPropertyName, strValue) => {
    objPersonalInfoPlain[strPropertyName] = strValue;

    console.log(objPersonalInfoPlain.strFirsName);
    console.log(objPersonalInfoPlain.strPhone);
  };

  const generateCV = () => {
    const objResume = MD_Resume.shapeResume(
      MD_PersonalInfo.shapePersonalInfo(
        uniqid(),
        objPersonalInfoPlain.strFirsName,
        objPersonalInfoPlain.strLastName,
        objPersonalInfoPlain.strEmail,
        objPersonalInfoPlain.strPhone,
        objPersonalInfoPlain.strAbout
      ),
      [],
      [],
      false
    );
    onGenerateCV(objResume);
  };

  const getNewExperience = (objExperience) => {};
  const getEditedExperience = (objExperience) => {};
  const getDeletedExperienceId = (strExperienceId) => {};

  return (
    <div className="flex flex-col gap-4">
      <div>
        <PersonalInfo
          onFirstNameChange={onPersonalInfoChange.bind(null, "strFirsName")}
          onLastNameChange={onPersonalInfoChange.bind(null, "strLastName")}
          onPhoneChange={onPersonalInfoChange.bind(null, "strPhone")}
          onAboutChange={onPersonalInfoChange.bind(null, "strAbout")}
          onEmailChange={onPersonalInfoChange.bind(null, "strEmail")}
          strFirstNameValue={objPersonalInfoValues.getFirstName()}
          strLastNameValue={objPersonalInfoValues.getLastName()}
          strEmailValue={objPersonalInfoValues.getEmail()}
          strAboutValue={objPersonalInfoValues.getAbout()}
          strPhoneValue={objPersonalInfoValues.getPhone()}
        />
        <Experience
          experienceList={arrExperienceValues}
          sendNewExperienceToResume={getNewExperience}
          sendEditedExperienceToResume={getEditedExperience}
          sendDeletedExperienceIdToResume={getDeletedExperienceId}
        />
        <Education educationList={arrEducationValues} />
      </div>
      <div className="flex justify-end px-4 py-3 bg-gray-50 text-right sm:px-6">
        <button
          onClick={generateCV}
          type="button"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Generate CV
        </button>
      </div>
    </div>
  );
};

export { Resume };
