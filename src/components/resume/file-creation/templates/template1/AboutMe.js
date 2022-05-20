import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
/**
 *
 * @param {{
 * strAboutMe:string,
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
const AboutMe = ({ strAboutMe, styles }) => {
  return (
    <View>
      <Text style={[styles.sectionTitle, { marginBottom: 10 }]}>Summary</Text>
      <Text
        style={[
          styles.normal,
          { textAlign: "justify", textJustify: "inter-word" },
        ]}
      >
        {strAboutMe}
      </Text>
    </View>
  );
};
export { AboutMe };
