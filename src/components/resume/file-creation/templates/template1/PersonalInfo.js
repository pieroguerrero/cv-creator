import React from "react";
import { Text, View, StyleSheet, Link } from "@react-pdf/renderer";

/**
 *
 * @param {{objPersonalInfo:{
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
 * styles:{
 * fullName:object,
 * heading:object,
 * sectionTitle:object,
 * normal:object,
 * personalData:object,
 * personalData_Link:object,
 * date:object,
 * companyName:object,
 * jobLocation:object,
 * jobPosition:object}}} param0
 * @returns
 */
const PersonalInfo = ({ objPersonalInfo, styles }) => {
  /**
   *
   * @param {string} strFirstName
   * @param {string} strMiddelName
   * @param {string} strLastName
   * @returns
   */
  const getFullName = (strFirstName, strMiddelName, strLastName) => {
    return (
      strFirstName +
      (strMiddelName.length > 0 ? " " + strMiddelName : "") +
      " " +
      strLastName
    );
  };

  /**
   *
   * @param {string} strURL
   * @returns
   */
  const getLink = (strURL) => {
    console.log("PersonalInfoPDF.getLink", strURL);
    if (strURL.length > 0) {
      return (
        <Link style={styles.personalData_Link} src={"https://www." + strURL}>
          {strURL}
        </Link>
      );
    }
  };

  const getLinksBlock = (strLink1, strLink2, strLink3) => {
    return (
      <>
        {getLink(strLink1)}
        {getLink(strLink2)}
        {getLink(strLink3)}
      </>
    );
  };

  return (
    <View>
      <Text style={styles.fullName}>
        {getFullName(
          objPersonalInfo.getFirstName(),
          objPersonalInfo.getMiddelName(),
          objPersonalInfo.getLastName()
        )}
      </Text>
      <Text style={styles.heading}>{objPersonalInfo.getHeading()}</Text>
      <Text style={styles.personalData}>
        {objPersonalInfo.getPlaceOfResidence()}
      </Text>
      <Text style={styles.personalData}>{objPersonalInfo.getPhone()}</Text>
      <Link
        style={styles.personalData_Link}
        src={"mailto:" + objPersonalInfo.getEmail()}
      >
        {objPersonalInfo.getEmail()}
      </Link>
      {getLinksBlock(
        objPersonalInfo.getLinkedURL(),
        objPersonalInfo.getOtherProfileURL(),
        objPersonalInfo.getPersonalWebPage()
      )}
    </View>
  );
};
export { PersonalInfo };
