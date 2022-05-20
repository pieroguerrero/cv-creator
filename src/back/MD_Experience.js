const MD_Experience = (function () {
  const experienceActions = {
    getId() {
      return this.strId;
    },
    getPosition() {
      return this.strPosition;
    },
    getCompanyName() {
      return this.strCompanyName;
    },
    getStartDate() {
      return this.dtStartDate;
    },
    getEndDate() {
      return this.dtEndDate;
    },
    getCurrentJob() {
      return this.booCurrentJob;
    },
    getCountryName() {
      return this.strCountryName;
    },
    getCityName() {
      return this.strCityName;
    },
    getDescription() {
      return this.strDescription;
    },

    setPosition(value) {
      this.strPosition = value;
    },
    setCompanyName(value) {
      this.strCompanyName = value;
    },
    setStartDate(value) {
      this.dtStartDate = value;
    },
    setEndDate(value) {
      this.dtEndDate = value;
    },
    setCurrentJob(value) {
      this.booCurrentJob = value;
    },
    setCountryName(value) {
      this.strCountryName = value;
    },
    setCityName(value) {
      this.strCityName = value;
    },
    setDescription(value) {
      this.strDescription = value;
    },

    getCompanyURL() {
      return this.strCompanyURL;
    },
    setCompanyURL(value) {
      this.strCompanyURL = value;
    },
    getCompanyDescription() {
      return this.strCompanyDescription;
    },
    setCompanyDescription(value) {
      this.strCompanyDescription = value;
    },
  };

  /**
   *
   * @param {string} strId
   * @param {string} strPosition
   * @param {string} strCompanyName
   * @param {Date} dtStartDate
   * @param {Date} dtEndDate
   * @param {boolean} booCurrentJob
   * @param {string} strCountryName
   * @param {string} strCityName
   * @param {string} strDescription
   * @param {string} strCompanyURL
   * @param {string} strCompanyDescription
   * @returns {{
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
   * }}
   */
  const shapeExperience = function (
    strId,
    strPosition,
    strCompanyName,
    dtStartDate,
    dtEndDate,
    booCurrentJob,
    strCountryName,
    strCityName,
    strDescription,
    strCompanyURL,
    strCompanyDescription
  ) {
    const objExperience = Object.create(experienceActions);
    objExperience.strId = strId;
    objExperience.strPosition = strPosition;
    objExperience.strCompanyName = strCompanyName;
    objExperience.dtStartDate = dtStartDate;
    objExperience.dtEndDate = dtEndDate;
    objExperience.booCurrentJob = booCurrentJob;
    objExperience.strCountryName = strCountryName;
    objExperience.strCityName = strCityName;
    objExperience.strDescription = strDescription;

    objExperience.strCompanyURL = strCompanyURL;
    objExperience.strCompanyDescription = strCompanyDescription;

    return {
      getId: objExperience.getId.bind(objExperience),
      getPosition: objExperience.getPosition.bind(objExperience),
      getCompanyName: objExperience.getCompanyName.bind(objExperience),
      getStartDate: objExperience.getStartDate.bind(objExperience),
      getEndDate: objExperience.getEndDate.bind(objExperience),
      getCurrentJob: objExperience.getCurrentJob.bind(objExperience),
      getCountryName: objExperience.getCountryName.bind(objExperience),
      getCityName: objExperience.getCityName.bind(objExperience),
      getDescription: objExperience.getDescription.bind(objExperience),

      setPosition: objExperience.setPosition.bind(objExperience),
      setCompanyName: objExperience.setCompanyName.bind(objExperience),
      setStartDate: objExperience.setStartDate.bind(objExperience),
      setEndDate: objExperience.setEndDate.bind(objExperience),
      setCurrentJob: objExperience.setCurrentJob.bind(objExperience),
      setCountryName: objExperience.setCountryName.bind(objExperience),
      setCityName: objExperience.setCityName.bind(objExperience),
      setDescription: objExperience.setDescription.bind(objExperience),

      getCompanyURL: objExperience.getCompanyURL.bind(objExperience),
      setCompanyURL: objExperience.setCompanyURL.bind(objExperience),
      getCompanyDescription:
        objExperience.getCompanyDescription.bind(objExperience),
      setCompanyDescription:
        objExperience.setCompanyDescription.bind(objExperience),
    };
  };

  return { shapeExperience };
})();

export { MD_Experience };
