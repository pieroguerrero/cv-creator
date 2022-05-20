const MD_PersonalInfo = (function () {
  const personalInfoActions = {
    getId() {
      return this.strId;
    },
    getFirstName() {
      return this.strFirstName;
    },
    getLastName() {
      return this.strLastName;
    },
    getEmail() {
      return this.strEmail;
    },
    getPhone() {
      return this.strPhone;
    },
    getAbout() {
      return this.strAbout;
    },
    setFirstName(value) {
      this.strFirstName = value;
    },
    setLastName(value) {
      this.strLastName = value;
    },
    setEmail(value) {
      this.strEmail = value;
    },
    setPhone(value) {
      this.strPhone = value;
    },
    setAbout(value) {
      this.strAbout = value;
    },

    getMiddelName() {
      return this.strMiddelName;
    },
    setMiddelName(value) {
      this.strMiddelName = value;
    },
    getPersonalWebPage() {
      return this.strPersonalWebPage;
    },
    setPersonalWebPage(value) {
      this.strPersonalWebPage = value;
    },
    getOtherProfileURL() {
      return this.strOtherProfileURL;
    },
    setOtherProfileURL(value) {
      this.strOtherProfileURL = value;
    },
    getLinkedURL() {
      return this.strLinkedURL;
    },
    setLinkedURL(value) {
      this.strLinkedURL = value;
    },
    getHeading() {
      return this.strHeading;
    },
    setHeading(value) {
      this.strHeading = value;
    },
    getPlaceOfResidence() {
      return this.strPlaceOfResidence;
    },
    setPlaceOfResidence(value) {
      this.strPlaceOfResidence = value;
    },
  };

  /**
   *
   * @param {string} strId
   * @param {string} strFirstName
   * @param {string} strLastName
   * @param {string} strEmail
   * @param {string} strPhone
   * @param {string} strAbout
   * @param {string} strMiddelName
   * @param {string} strOtherProfileURL
   * @param {string} strPersonalWebPage
   * @param {string} strLinkedURL
   * @param {string} strHeading
   * @param {string} strPlaceOfResidence
   * @returns {{
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
   * }}
   */
  const shapePersonalInfo = function (
    strId,
    strFirstName,
    strLastName,
    strEmail,
    strPhone,
    strAbout,

    strMiddelName,
    strOtherProfileURL,
    strPersonalWebPage,
    strLinkedURL,
    strHeading,
    strPlaceOfResidence
  ) {
    const objPersonalInfo = Object.create(personalInfoActions);
    objPersonalInfo.strId = strId;
    objPersonalInfo.strFirstName = strFirstName;
    objPersonalInfo.strLastName = strLastName;
    objPersonalInfo.strEmail = strEmail;
    objPersonalInfo.strPhone = strPhone;
    objPersonalInfo.strAbout = strAbout;

    objPersonalInfo.strMiddelName = strMiddelName;
    objPersonalInfo.strOtherProfileURL = strOtherProfileURL;
    objPersonalInfo.strPersonalWebPage = strPersonalWebPage;
    objPersonalInfo.strLinkedURL = strLinkedURL;
    objPersonalInfo.strHeading = strHeading;
    objPersonalInfo.strPlaceOfResidence = strPlaceOfResidence;

    return {
      getId: objPersonalInfo.getId.bind(objPersonalInfo),
      getFirstName: objPersonalInfo.getFirstName.bind(objPersonalInfo),
      getLastName: objPersonalInfo.getLastName.bind(objPersonalInfo),
      getEmail: objPersonalInfo.getEmail.bind(objPersonalInfo),
      getPhone: objPersonalInfo.getPhone.bind(objPersonalInfo),
      getAbout: objPersonalInfo.getAbout.bind(objPersonalInfo),
      setFirstName: objPersonalInfo.setFirstName.bind(objPersonalInfo),
      setLastName: objPersonalInfo.setLastName.bind(objPersonalInfo),
      setEmail: objPersonalInfo.setEmail.bind(objPersonalInfo),
      setPhone: objPersonalInfo.setPhone.bind(objPersonalInfo),
      setAbout: objPersonalInfo.setAbout.bind(objPersonalInfo),
      getMiddelName: objPersonalInfo.getMiddelName.bind(objPersonalInfo),
      setMiddelName: objPersonalInfo.setMiddelName.bind(objPersonalInfo),
      getPersonalWebPage:
        objPersonalInfo.getPersonalWebPage.bind(objPersonalInfo),
      setPersonalWebPage:
        objPersonalInfo.setPersonalWebPage.bind(objPersonalInfo),
      getOtherProfileURL:
        objPersonalInfo.getOtherProfileURL.bind(objPersonalInfo),
      setOtherProfileURL:
        objPersonalInfo.setOtherProfileURL.bind(objPersonalInfo),
      getLinkedURL: objPersonalInfo.getLinkedURL.bind(objPersonalInfo),
      setLinkedURL: objPersonalInfo.setLinkedURL.bind(objPersonalInfo),
      getHeading: objPersonalInfo.getHeading.bind(objPersonalInfo),
      setHeading: objPersonalInfo.setHeading.bind(objPersonalInfo),
      getPlaceOfResidence:
        objPersonalInfo.getPlaceOfResidence.bind(objPersonalInfo),
      setPlaceOfResidence:
        objPersonalInfo.setPlaceOfResidence.bind(objPersonalInfo),
    };
  };

  return { shapePersonalInfo };
})();

export { MD_PersonalInfo };
