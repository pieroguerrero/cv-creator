const MD_Education = (function () {
  const educationActions = {
    getId() {
      return this.strId;
    },
    getDegree() {
      return this.strDegree;
    },
    getDescription() {
      return this.strDescription;
    },
    getInstitutionName() {
      return this.strInstitutionName;
    },
    getStartDate() {
      return this.dtStartDate;
    },
    getEndDate() {
      return this.dtEndDate;
    },
    getCurrent() {
      return this.booCurrent;
    },
    getCountryName() {
      return this.strCountryName;
    },
    getCityName() {
      return this.strCityName;
    },
    getFieldOfStudy() {
      return this.strFieldOfStudy;
    },
    setDegree(value) {
      this.strDegree = value;
    },
    setDescription(value) {
      this.strDescription = value;
    },
    setInstitutionName(value) {
      this.strInstitutionName = value;
    },
    setStartDate(value) {
      this.dtStartDate = value;
    },
    setEndDate(value) {
      this.dtEndDate = value;
    },
    setCurrent(value) {
      this.booCurrent = value;
    },
    setCountryName(value) {
      this.strCountryName = value;
    },
    setCityName(value) {
      this.strCityName = value;
    },
    setFieldOfStudy(value) {
      this.strFieldOfStudy = value;
    },

    setInstitutionURL(value) {
      this.strInstitutionURL = value;
    },
    getInstitutionURL() {
      return this.strInstitutionURL;
    },
  };

  /**
   *
   * @param {string} strId
   * @param {string} strDegree
   * @param {string} strInstitutionName
   * @param {Date} dtStartDate
   * @param {Date} dtEndDate
   * @param {boolean} booCurrent
   * @param {string} strCountryName
   * @param {string} strCityName
   * @param {string} strDescription
   * @param {string} strFieldOfStudy
   * @param {string} strInstitutionURL
   * @returns {{
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
   * }}
   */
  const shapeEducation = function (
    strId,
    strDegree,
    strInstitutionName,
    dtStartDate,
    dtEndDate,
    booCurrent,
    strCountryName,
    strCityName,
    strDescription,
    strFieldOfStudy,
    strInstitutionURL
  ) {
    const objEducation = Object.create(educationActions);
    objEducation.strId = strId;
    objEducation.strDegree = strDegree;
    objEducation.strInstitutionName = strInstitutionName;
    objEducation.dtStartDate = dtStartDate;
    objEducation.dtEndDate = dtEndDate;
    objEducation.booCurrent = booCurrent;
    objEducation.strCountryName = strCountryName;
    objEducation.strCityName = strCityName;
    objEducation.strDescription = strDescription;
    objEducation.strFieldOfStudy = strFieldOfStudy;
    objEducation.strInstitutionURL = strInstitutionURL;

    return {
      getId: objEducation.getId.bind(objEducation),
      getDegree: objEducation.getDegree.bind(objEducation),
      getDescription: objEducation.getDescription.bind(objEducation),
      getInstitutionName: objEducation.getInstitutionName.bind(objEducation),
      getStartDate: objEducation.getStartDate.bind(objEducation),
      getEndDate: objEducation.getEndDate.bind(objEducation),
      getCurrent: objEducation.getCurrent.bind(objEducation),
      getCountryName: objEducation.getCountryName.bind(objEducation),
      getCityName: objEducation.getCityName.bind(objEducation),
      getFieldOfStudy: objEducation.getFieldOfStudy.bind(objEducation),

      setDegree: objEducation.setDegree.bind(objEducation),
      setDescription: objEducation.setDescription.bind(objEducation),
      setInstitutionName: objEducation.setInstitutionName.bind(objEducation),
      setStartDate: objEducation.setStartDate.bind(objEducation),
      setEndDate: objEducation.setEndDate.bind(objEducation),
      setCurrent: objEducation.setCurrent.bind(objEducation),
      setCountryName: objEducation.setCountryName.bind(objEducation),
      setCityName: objEducation.setCityName.bind(objEducation),
      setFieldOfStudy: objEducation.setFieldOfStudy.bind(objEducation),
      getInstitutionURL: objEducation.getInstitutionURL.bind(objEducation),
      setInstitutionURL: objEducation.setInstitutionURL.bind(objEducation),
    };
  };

  return { shapeEducation };
})();

export { MD_Education };
