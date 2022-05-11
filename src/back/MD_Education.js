const MD_Education = (function () {
  const educationActions = {
    getId() {
      return this.strId;
    },
    getDegree() {
      return this.strDegree;
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

    setDegree(value) {
      this.strDegree = value;
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
   * @returns {{
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
    strCityName
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

    return {
      getId: objEducation.getId.bind(objEducation),
      getDegree: objEducation.getDegree.bind(objEducation),
      getInstitutionName: objEducation.getInstitutionName.bind(objEducation),
      getStartDate: objEducation.getStartDate.bind(objEducation),
      getEndDate: objEducation.getEndDate.bind(objEducation),
      getCurrent: objEducation.getCurrent.bind(objEducation),
      getCountryName: objEducation.getCountryName.bind(objEducation),
      getCityName: objEducation.getCityName.bind(objEducation),
      setDegree: objEducation.setDegree.bind(objEducation),
      setInstitutionName: objEducation.setInstitutionName.bind(objEducation),
      setStartDate: objEducation.setStartDate.bind(objEducation),
      setEndDate: objEducation.setEndDate.bind(objEducation),
      setCurrent: objEducation.setCurrent.bind(objEducation),
      setCountryName: objEducation.setCountryName.bind(objEducation),
      setCityName: objEducation.setCityName.bind(objEducation),
    };
  };

  return { shapeEducation };
})();

export { MD_Education };
