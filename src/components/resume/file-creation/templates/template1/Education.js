import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { format } from "date-fns";
import uniqid from "uniqid";
import { TextItem } from "./TextItem";
import { Helper } from "./helpers/Helper";

/**
 *
 * @param {{
 * arrEducation:{
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
 * }[],
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
 * }
 * }} param0
 * @returns
 */
const Education = ({ arrEducation, styles }) => {
  const getDatesText = (dtStartDate, dtEndDate, booCurrentJob) => {
    return (
      format(dtStartDate, "MM/yyyy") +
      " - " +
      (booCurrentJob ? "Present" : format(dtEndDate, "MM/yyyy"))
    );
  };

  /**
   *
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
   * setInstitutionURL: function(string):void
   * getInstitutionURL: function(): string,
   * }[]} arrEducation
   */
  const getEducacionItems = (arrEducation) => {
    return arrEducation.map((objEducation) => (
      <View key={objEducation.getId()} style={{ marginTop: 10 }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.companyName}>
            {objEducation.getInstitutionName() + ", "}
          </Text>
          <Text style={styles.jobLocation}>
            {objEducation.getCountryName() + " "}
          </Text>
          <Text style={styles.jobPosition}>
            {"- " + objEducation.getDegree() + " in "}
          </Text>
          <Text style={styles.jobPosition}>
            {objEducation.getFieldOfStudy()}
          </Text>
        </View>
        <Text style={styles.date}>
          {getDatesText(
            objEducation.getStartDate(),
            objEducation.getEndDate(),
            objEducation.getCurrent()
          )}
        </Text>
        <View style={{ paddingLeft: "0.1in" }}>
          {Helper.getTextList(objEducation.getDescription(), styles.normal)}
        </View>
      </View>
    ));
  };

  return (
    <>
      {(() => {
        if (arrEducation.length > 0) {
          return (
            <>
              <Text style={styles.sectionTitle}>Education</Text>
              {getEducacionItems(arrEducation)}
            </>
          );
        }
      })()}
    </>
  );
};
export { Education };
