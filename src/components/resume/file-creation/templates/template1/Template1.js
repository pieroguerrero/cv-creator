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
  return (
    <Document author="Piero Guerrero" title={"Resume"}>
      <Page>
        <PersonalInfo objPersonalInfo={objResumen.getPersonalInfo()} />
        <AboutMe />
        <Experience />
        <Education />
      </Page>
    </Document>
  );
};

export { Template1 };

//https://docs.google.com/document/d/1Ujx1tIEy9oo6ZIbEcnhiddHbxQ--XCcs1Hcr8_ayDQE/edit#heading=h.sbziogryzzql
