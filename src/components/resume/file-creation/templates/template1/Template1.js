import React from "react";
import fontRobotoBold from "../fonts/Roboto/Roboto-Bold.ttf";
import fontRobotoRegular from "../fonts/Roboto/Roboto-Regular.ttf";
import fontRobotoItalic from "../fonts/Roboto/Roboto-Italic.ttf";
import fontRobotoBoldItalic from "../fonts/Roboto/Roboto-BoldItalic.ttf";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import { PersonalInfo } from "./PersonalInfo";
import { Experience } from "./Experience";
import { Education } from "./Education";
import { AboutMe } from "./AboutMe";

// Create Document Component
/**
 *
 * @param {{
 * objResumen: {
 * getPersonalInfo(): {
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
 * getExperienceList():Object[],
 * getEducationList():Object[],
 * }}} param0
 * @returns
 */
const Template1 = ({ objResumen }) => {
  Font.register({
    family: "Roboto",
    fonts: [
      {
        src: fontRobotoRegular,
        fontWeight: "400",
      },
      {
        src: fontRobotoBold,
        fontWeight: "700",
      },
      {
        src: fontRobotoItalic,
        fontStyle: "italic",
      },
      {
        src: fontRobotoBoldItalic,
        fontStyle: "italic",
        fontWeight: "700",
      },
    ],
  });

  const documentStyles = StyleSheet.create({
    page: {
      paddingLeft: "0.7in",
      paddingTop: "0.4in",
      paddingRight: "0.7in",
      paddingBottom: "0.4in",
    },
  });

  const styleParameters = {
    defaultColor: "black",
    primaryColor: "#00ab44",
    secondaryColor: "gray",
    fontFamily: "Roboto",
  };

  const textStyles = StyleSheet.create({
    line: {
      borderBottom: "0.07in solid " + styleParameters.primaryColor,
      marginBottom: 8,
    },
    fullName: {
      fontFamily: styleParameters.fontFamily,
      fontSize: 30,
      color: styleParameters.defaultColor,
      paddingTop: 6,
    },
    heading: {
      fontFamily: styleParameters.fontFamily,
      fontSize: 18,
      color: styleParameters.primaryColor,
    },
    sectionTitle: {
      fontFamily: styleParameters.fontFamily,
      color: styleParameters.primaryColor,
      textTransform: "uppercase",
      fontSize: 14,
      fontWeight: "bold",
      paddingTop: 24,
    },
    normal: {
      fontFamily: styleParameters.fontFamily,
      fontSize: 11,
      color: styleParameters.defaultColor,
    },
    personalData: {
      fontFamily: styleParameters.fontFamily,
      fontSize: 11,
      color: styleParameters.secondaryColor,
    },
    personalData_Link: {
      fontFamily: styleParameters.fontFamily,
      fontSize: 11,
      color: styleParameters.secondaryColor,
      textDecoration: "none",
    },
    date: {
      fontFamily: styleParameters.fontFamily,
      fontSize: 10,
      color: styleParameters.secondaryColor,
      textTransform: "uppercase",
      paddingTop: 4,
      paddingBottom: 3,
    },
    companyName: {
      fontFamily: styleParameters.fontFamily,
      color: styleParameters.defaultColor,
      textTransform: "capitalize",
      fontSize: 12,
      fontWeight: "bold",
    },
    jobLocation: {
      fontFamily: styleParameters.fontFamily,
      color: styleParameters.defaultColor,
      textTransform: "capitalize",
      fontSize: 11,
    },
    jobPosition: {
      fontFamily: styleParameters.fontFamily,
      color: styleParameters.secondaryColor,
      textTransform: "capitalize",
      fontSize: 12,
      fontStyle: "italic",
      fontWeight: "bold",
    },
  });

  return (
    <Document author="Piero Guerrero" title={"Resume"}>
      <Page size={"A4"} style={documentStyles.page}>
        {/* <View style={textStyles.line}></View> */}
        <PersonalInfo
          objPersonalInfo={objResumen.getPersonalInfo()}
          styles={textStyles}
        />
        <AboutMe
          styles={textStyles}
          strAboutMe={objResumen.getPersonalInfo().getAbout()}
        />
        {(() => {
          if (objResumen.getExperienceList().length > 0) {
            return (
              <Experience
                arrExperience={objResumen.getExperienceList()}
                styles={textStyles}
              />
            );
          }
        })()}
        {(() => {
          if (objResumen.getEducationList().length > 0) {
            return (
              <Education
                arrEducation={objResumen.getEducationList()}
                styles={textStyles}
              />
            );
          }
        })()}
      </Page>
    </Document>
  );
};

export { Template1 };

//https://docs.google.com/document/d/1Ujx1tIEy9oo6ZIbEcnhiddHbxQ--XCcs1Hcr8_ayDQE/edit#heading=h.sbziogryzzql
