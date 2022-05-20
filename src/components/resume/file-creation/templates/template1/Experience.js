import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { format } from "date-fns";
import uniqid from "uniqid";
import { TextItem } from "./TextItem";

/**
 *
 * @param {{arrExperience: {
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
 * } [],
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
 * jobPosition:object
 * }}} param0
 * @returns
 */
const Experience = ({ arrExperience, styles }) => {
  /**
   *
   * @param {Date} dtStartDate
   * @param {Date} dtEndDate
   * @param {Boolean} booCurrentJob
   */
  const getDatesText = (dtStartDate, dtEndDate, booCurrentJob) => {
    return (
      format(dtStartDate, "MMM yyy") +
      " - " +
      (booCurrentJob ? "Present" : format(dtEndDate, "MMM yyy"))
    );
  };

  /**
   *
   * @param {string} strText
   */
  const getTextList = (strText) => {
    const arrText = strText.trim().split("+");
    const jsxResult = (
      <>
        {arrText
          .filter((strBullet) => strBullet.length > 0)
          .map((strBullet) => (
            <TextItem
              key={uniqid()}
              strTextContent={strBullet}
              styles={styles}
            />
          ))}
      </>
    );

    return jsxResult;
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
   * } []} arrExperience
   */
  const getExperienceItems = (arrExperience) => {
    return arrExperience.map((objExperience) => (
      <View key={objExperience.getId()} style={{ marginTop: 10 }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.companyName}>
            {objExperience.getCompanyName() + ", "}
          </Text>
          <Text style={styles.jobLocation}>
            {objExperience.getCountryName() + " "}
          </Text>
          <Text style={styles.jobPosition}>
            {"- " + objExperience.getPosition()}
          </Text>
        </View>
        <Text style={styles.date}>
          {getDatesText(
            objExperience.getStartDate(),
            objExperience.getEndDate(),
            objExperience.getCurrentJob()
          )}
        </Text>
        <View style={{ paddingLeft: "0.1in" }}>
          {getTextList(objExperience.getDescription())}
        </View>
      </View>
    ));
  };

  return (
    <>
      {(() => {
        if (arrExperience.length > 0) {
          return (
            <>
              <Text style={styles.sectionTitle}>Experience</Text>
              {getExperienceItems(arrExperience)}
            </>
          );
        }
      })()}
    </>
  );
};
export { Experience };
