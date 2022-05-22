import { PersonalInfo } from "./resume/PersonalInfo";
import { Experience } from "./resume/Experience";
import { Education } from "./resume/Education";
import React from "react";
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
 * }[],
 * arrEducationValues:{
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
 * setAbout: function(string):void,
 * getMiddelName: function(): string,
 * setMiddelName: function(string):void,
 * getPersonalWebPage: function(): string,
 * setPersonalWebPage: function(string):void,
 * getOtherProfileURL: function(): string,
 * setOtherProfileURL: function(string):void,
 * getLinkedURL: function(): string,
 * setLinkedURL: function(string):void,
 * getHeading: function(): string,
 * setHeading: function(string):void,
 * getPlaceOfResidence: function(): string,
 * setPlaceOfResidence: function(string):void,
 * },
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
  // const [resumeState, setResume] = useState({
  //   personalInfo: null,
  //   experienceList: [],
  //   educationList: [],
  // });

  const objPersonalInfoPlain = {
    strFirsName: objPersonalInfoValues.getFirstName(),
    strLastName: objPersonalInfoValues.getLastName(),
    strEmail: objPersonalInfoValues.getEmail(),
    strAbout: objPersonalInfoValues.getAbout(),
    strPhone: objPersonalInfoValues.getPhone(),
    strMiddleName: objPersonalInfoValues.getMiddelName(),
    strOtherProfileURL: objPersonalInfoValues.getOtherProfileURL(),
    strPersonalWebPage: objPersonalInfoValues.getPersonalWebPage(),
    strLinkedURL: objPersonalInfoValues.getLinkedURL(),
    strHeading: objPersonalInfoValues.getHeading(),
    strPlaceOfResidence: objPersonalInfoValues.getPlaceOfResidence(),
  };
  const arrExperience = [...arrExperienceValues];
  const arrEducation = [...arrEducationValues];

  const onPersonalInfoChange = (strPropertyName, strValue) => {
    objPersonalInfoPlain[strPropertyName] = strValue;
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

  const onSelectFormat = () => {
    console.log(objPersonalInfoPlain);
    const objResume = MD_Resume.shapeResume(
      MD_PersonalInfo.shapePersonalInfo(
        uniqid(),
        objPersonalInfoPlain.strFirsName,
        objPersonalInfoPlain.strLastName,
        objPersonalInfoPlain.strEmail,
        objPersonalInfoPlain.strPhone,
        objPersonalInfoPlain.strAbout,
        objPersonalInfoPlain.strMiddleName,
        objPersonalInfoPlain.strOtherProfileURL,
        objPersonalInfoPlain.strPersonalWebPage,
        objPersonalInfoPlain.strLinkedURL,
        objPersonalInfoPlain.strHeading,
        objPersonalInfoPlain.strPlaceOfResidence
      ),
      sortExperienceArray(arrExperience),
      sortEducationArray(arrEducation)
    );

    onGenerateCV(objResume);
  };

  const getNewExperience = (objExperience) => {
    console.log(
      "Resume.getNewExperience.getCurrentJob=",
      objExperience.getCurrentJob()
    );
    arrExperience.push(objExperience);
  };
  const getEditedExperience = (objExperience) => {
    const intIndex = arrExperience.findIndex(
      (objTempExperience) => objTempExperience.getId() === objExperience.getId()
    );

    if (intIndex >= 0) {
      arrExperience[intIndex] = objExperience;
    }
  };
  const getDeletedExperienceId = (strExperienceId) => {
    const intIndex = arrExperience.findIndex(
      (objTempExperience) => objTempExperience.getId() === strExperienceId
    );

    if (intIndex >= 0) {
      arrExperience.splice(intIndex, 1);
    }
  };

  const getDeletedEducationId = (strEducationId) => {
    const intIndex = arrEducation.findIndex(
      (objTempExperience) => objTempExperience.getId() === strEducationId
    );

    if (intIndex >= 0) {
      arrEducation.splice(intIndex, 1);
    }
  };

  const getEditedEducation = (objEducation) => {
    const intIndex = arrEducation.findIndex(
      (objTempEducation) => objTempEducation.getId() === objEducation.getId()
    );

    if (intIndex >= 0) {
      arrExperience[intIndex] = objEducation;
    }
  };

  const getNewEducation = (objEducation) => {
    arrEducation.push(objEducation);
  };

  return (
    <div className="flex flex-col">
      <div>
        <PersonalInfo
          onFirstNameChange={onPersonalInfoChange.bind(null, "strFirsName")}
          onLastNameChange={onPersonalInfoChange.bind(null, "strLastName")}
          onPhoneChange={onPersonalInfoChange.bind(null, "strPhone")}
          onAboutChange={onPersonalInfoChange.bind(null, "strAbout")}
          onEmailChange={onPersonalInfoChange.bind(null, "strEmail")}
          onHeadingChange={onPersonalInfoChange.bind(null, "strHeading")}
          onLinkedURLChange={onPersonalInfoChange.bind(null, "strLinkedURL")}
          onMiddleNameChange={onPersonalInfoChange.bind(null, "strMiddleName")}
          onOtherProfileURLChange={onPersonalInfoChange.bind(
            null,
            "strOtherProfileURL"
          )}
          onPersonalWebPageChange={onPersonalInfoChange.bind(
            null,
            "strPersonalWebPage"
          )}
          onPlaceOfResidenceChange={onPersonalInfoChange.bind(
            null,
            "strPlaceOfResidence"
          )}
          strFirstNameValue={objPersonalInfoValues.getFirstName()}
          strLastNameValue={objPersonalInfoValues.getLastName()}
          strEmailValue={objPersonalInfoValues.getEmail()}
          strAboutValue={objPersonalInfoValues.getAbout()}
          strPhoneValue={objPersonalInfoValues.getPhone()}
          strHeadingValue={objPersonalInfoValues.getHeading()}
          strLinkedURLValue={objPersonalInfoValues.getLinkedURL()}
          strMiddleNameValue={objPersonalInfoValues.getMiddelName()}
          strOtherProfileURLValue={objPersonalInfoValues.getOtherProfileURL()}
          strPersonalWebPageValue={objPersonalInfoValues.getPersonalWebPage()}
          strPlaceOfResidenceValue={objPersonalInfoValues.getPlaceOfResidence()}
        />
        <Experience
          experienceList={arrExperienceValues}
          sendNewExperienceToResume={getNewExperience}
          sendEditedExperienceToResume={getEditedExperience}
          sendDeletedExperienceIdToResume={getDeletedExperienceId}
        />

        <Education
          strTitle={"Education"}
          educationList={arrEducationValues}
          strHelpText={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
          sendDeletedEducationIdToResume={getDeletedEducationId}
          sendEditedEducationToResume={getEditedEducation}
          sendNewEducationToResume={getNewEducation}
        />
      </div>
      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-7 px-4  py-6 sm:pt-8 bg-gray-50 text-right ">
        <button
          type="button"
          className="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm py-4 px-8 bg-white text-sm sm:text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto "
        >
          Save Locally
        </button>

        <button
          onClick={onSelectFormat}
          type="button"
          className="inline-flex justify-center py-4 px-8 border border-transparent shadow-sm font-medium text-sm sm:text-base rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Select Resume Format
        </button>
      </div>
    </div>
  );
};

export { Resume };
