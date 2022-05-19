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
 * setAbout: function(string):void,},
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
  return (
    <View>
      <Text style={styles.fullName}>Piero A. Guerrero</Text>
      <Text style={styles.heading}>Senior Software Engineer</Text>
      <Text style={styles.personalData}>123 Your Street</Text>
      <Text style={styles.personalData}>Your City, ST 12345</Text>
      <Text style={styles.personalData}>(123) 456-7890</Text>
      <Link
        style={styles.personalData_Link}
        src={"mailto:" + "piero.guerrero@gmail.com"}
      >
        piero.guerrero@gmail.com
      </Link>
      <Link
        style={styles.personalData_Link}
        src={"https://www." + "linkedin.com/in/pieroguerrero"}
      >
        linkedin.com/in/pieroguerrero
      </Link>
      <Link
        style={styles.personalData_Link}
        src={"https://www." + "github.com/pieroguerrero"}
      >
        github.com/pieroguerrero
      </Link>
      <Link
        style={styles.personalData_Link}
        src={"https://www." + "pieroguerrero.com"}
      >
        pieroguerrero.com
      </Link>
    </View>
  );
};
export { PersonalInfo };
