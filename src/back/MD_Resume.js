const MD_Resume = (function () {
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
   * }[]} arrExperience
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
   * }[]} arrEducation
   */
  const shapeResume = function (objPersonalInfo, arrExperience, arrEducation) {
    const objResume = {
      objPersonalInfo: objPersonalInfo,
      arrExperience: arrExperience,
      arrEducation: arrEducation,
    };

    return {
      getPersonalInfo() {
        return objResume.objPersonalInfo;
      },

      getExperienceList() {
        return objResume.arrExperience;
      },
      getEducationList() {
        return objResume.arrEducation;
      },
      addExperience(value) {
        objResume.arrExperience.push(value);
      },
      addEducation(value) {
        objResume.arrEducation.push(value);
      },
      setPersonalInfo(value) {
        objResume.objPersonalInfo = value;
      },

      toString() {
        let text =
          "getId=" +
          objResume.objPersonalInfo.getId() +
          "\n" +
          "getFirstName=" +
          objResume.objPersonalInfo.getFirstName() +
          "\n" +
          "getLastName=" +
          objResume.objPersonalInfo.getLastName() +
          "\n" +
          "getEmail=" +
          objResume.objPersonalInfo.getEmail() +
          "\n" +
          "getPhone=" +
          objResume.objPersonalInfo.getPhone() +
          "\n" +
          "getAbout=" +
          objResume.objPersonalInfo.getAbout();
        text += "\n\n Experience:";

        objResume.arrExperience.forEach((objExp) => {
          text +=
            "\n" +
            "--" +
            "\n" +
            "getId=" +
            objExp.getId() +
            "\n" +
            "getCompanyName=" +
            objExp.getCompanyName() +
            "\n" +
            "getPosition=" +
            objExp.getPosition() +
            "\n" +
            "getCountryName=" +
            objExp.getCountryName() +
            "\n" +
            "getCurrentJob=" +
            objExp.getCurrentJob() +
            "\n" +
            "getStartDate=" +
            objExp.getStartDate() +
            "\n" +
            "getEndDate=" +
            objExp.getEndDate() +
            "\n" +
            "getDescription=" +
            objExp.getDescription();
        });

        text += "\n\n Education:";
        objResume.arrEducation.forEach((objEdu) => {
          text +=
            "\n" +
            "--" +
            "\n" +
            "getId=" +
            objEdu.getId() +
            "\n" +
            "getDegree=" +
            objEdu.getDegree() +
            "\n" +
            "getInstitutionName=" +
            objEdu.getInstitutionName() +
            "\n" +
            "getFieldOfStudy=" +
            objEdu.getFieldOfStudy() +
            "\n" +
            "getCurrentJob=" +
            objEdu.getCurrent() +
            "\n" +
            "getStartDate=" +
            objEdu.getStartDate() +
            "\n" +
            "getEndDate=" +
            objEdu.getEndDate() +
            "\n" +
            "getDescription=" +
            objEdu.getDescription();
        });

        return text;
      },
    };
  };

  return { shapeResume };
})();

export { MD_Resume };
