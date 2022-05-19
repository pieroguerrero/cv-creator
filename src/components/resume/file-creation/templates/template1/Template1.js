import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { PersonalInfo } from "./PersonalInfo";
import { Experience } from "./Experience";
import { Education } from "./Education";
import { AboutMe } from "./AboutMe";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

// Create Document Component
/**
 *
 * @param {{
 * objResumen: {
 * getPersonalInfo(): {
 * getId: () => string;
 * getFirstName: () => string;
 * getLastName: () => string;
 * getEmail: () => string;
 * getPhone: () => string;
 * getAbout: () => string;
 * setFirstName: (arg0: string) => void;
 * setLastName: (arg0: string) => void;
 * setEmail: (arg0: string) => void;
 * setPhone: (arg0: string) => void;
 * setAbout: (arg0: string) => void;
 *},
 * }}} param0
 * @returns
 */
const Template1 = ({ objResumen }) => {
  const documentStyles = StyleSheet.create({
    page: {
      paddingLeft: "1in",
      paddingTop: "0.5in",
      paddingRight: "2.25in",
      paddingBottom: "0.5in",
    },
  });

  const styleParameters = {
    defaultColor: "black",
    primaryColor: "green",
    secondaryColor: "gray",
  };

  const textStyles = StyleSheet.create({
    fullName: {
      fontSize: 30,
      color: styleParameters.defaultColor,
      paddingTop: 6,
    },
    heading: {
      fontSize: 18,
      color: styleParameters.primaryColor,
    },
    sectionTitle: {
      color: styleParameters.primaryColor,
      textTransform: "uppercase",
      fontSize: 14,
      fontWeight: "bold",
      paddingTop: 24,
      paddingBottom: 10,
    },
    normal: {
      fontSize: 11,
      color: styleParameters.defaultColor,
    },
    personalData: {
      fontSize: 11,
      color: styleParameters.secondaryColor,
    },
    personalData_Link: {
      fontSize: 11,
      color: styleParameters.secondaryColor,
      textDecoration: "none",
    },
    date: {
      fontSize: 10,
      color: styleParameters.secondaryColor,
      textTransform: "uppercase",
    },
    companyName: {
      color: styleParameters.defaultColor,
      textTransform: "capitalize",
      fontSize: 12,
      fontWeight: "bold",
    },
    jobLocation: {
      color: styleParameters.defaultColor,
      textTransform: "capitalize",
      fontSize: 12,
      fontWeight: "bold",
    },
    jobPosition: {
      color: styleParameters.secondaryColor,
      textTransform: "capitalize",
      fontSize: 12,
      fontStyle: "italic",
    },
  });

  return (
    <Document author="Piero Guerrero" title={"Resume"}>
      <Page style={documentStyles.page}>
        <PersonalInfo
          objPersonalInfo={objResumen.getPersonalInfo()}
          styles={textStyles}
        />
        <AboutMe
          styles={textStyles}
          strAboutMe="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id neque aliquam vestibulum morbi blandit cursus risus at ultrices. Dolor sit amet consectetur adipiscing elit ut. Ultrices neque ornare aenean euismod. Facilisi etiam dignissim diam quis enim."
        />
        <Experience />
        <Education />
      </Page>
    </Document>
  );
};

export { Template1 };

//https://docs.google.com/document/d/1Ujx1tIEy9oo6ZIbEcnhiddHbxQ--XCcs1Hcr8_ayDQE/edit#heading=h.sbziogryzzql
