import { PersonalInfo } from "./resume/PersonalInfo";
import { Experience } from "./resume/Experience";
import { Education } from "./resume/Education";
import { useState } from "react";

/**
 *
 * @param {{
 * onFirstNameChange:(newValue: string)=>void,
 * onLastNameChange:(newValue: string)=>void,
 * onEmailChange:(newValue: string)=>void,
 * onAboutChange:(newValue: string)=>void,
 * onPhoneChange:(newValue: string)=>void,
 * onSaveEducation:(newValue: object)=>void,
 * onSaveExperience:(newValue: object)=>void}} param0
 * @returns
 */
const Resume = ({
  onFirstNameChange,
  onLastNameChange,
  onEmailChange,
  onPhoneChange,
  onAboutChange,
  onSaveEducation,
  onSaveExperience,
}) => {
  //TODO: to create the ResumeObject and send it to the App so it can be printed
  //TODO: include de ABOUT in the Personal infor, change it to MainInfo
  const [resumeState, setResume] = useState({
    personalInfo: null,
    experienceList: [],
    educationList: [],
  });

  /**
   *
   * @param {{
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
   * setAbout: function(string):void,}} objPersonalInfo
   */
  const getNewPersonalInfo = (objPersonalInfo) => {
    setResume((prevState) => ({ ...prevState, personalInfo: objPersonalInfo }));
    //TODO:pass the new ObjResume to the App.js so its the state is updated
  };

  const onPersonalInfoChange = (fnOnChangeValue, strValue) => {
    fnOnChangeValue(strValue);
  };

  return (
    <div className="flex flex-col gap-4">
      <PersonalInfo
        onFirstNameChange={onPersonalInfoChange.bind(null, onFirstNameChange)}
        onLastNameChange={onPersonalInfoChange.bind(null, onLastNameChange)}
        onPhoneChange={onPersonalInfoChange.bind(null, onPhoneChange)}
        onAboutChange={onPersonalInfoChange.bind(null, onAboutChange)}
        onEmailChange={onPersonalInfoChange.bind(null, onEmailChange)}
      />
      <Experience />
      <Education />
    </div>
  );
};

export { Resume };
