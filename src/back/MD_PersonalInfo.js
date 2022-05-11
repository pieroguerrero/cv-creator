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
  };

  /**
   *
   * @param {string} strId
   * @param {string} strFirstName
   * @param {string} strLastName
   * @param {string} strEmail
   * @param {string} strPhone
   * @param {string} strAbout
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
   * setAbout: function(string):void,}}
   */
  const shapePersonalInfo = function (
    strId,
    strFirstName,
    strLastName,
    strEmail,
    strPhone,
    strAbout
  ) {
    const objPersonalInfo = Object.create(personalInfoActions);
    objPersonalInfo.strId = strId;
    objPersonalInfo.strFirstName = strFirstName;
    objPersonalInfo.strLastName = strLastName;
    objPersonalInfo.strEmail = strEmail;
    objPersonalInfo.strPhone = strPhone;
    objPersonalInfo.strAbout = strAbout;

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
    };
  };

  return { shapePersonalInfo };
})();

export { MD_PersonalInfo };
