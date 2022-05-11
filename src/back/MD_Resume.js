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
   * setDescription: function(string):void,
   * }[]} arrExperience
   * @param {{
   * getId: function(): string,
   * getDegree: function(): string,
   * getInstitutionName: function(): string,
   * getStartDate: function(): string,
   * getEndDate: function(): string,
   * getCurrent: function(): string,
   * getCountryName: function(): string,
   * getCityName: function(): string,
   * setDegree: function(string):void,
   * setInstitutionName: function(string):void,
   * setStartDate: function(string):void,
   * setEndDate: function(string):void,
   * setCurrent: function(string):void,
   * setCountryName: function(string):void,
   * setCityName: function(string):void
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
    };
  };

  return { shapeResume };
})();

export { MD_Resume };
