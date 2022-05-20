import React from "react";
import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { DotIcon } from "./DotIcon";
/**
 *
 * @param {{
 * strTextContent:string,
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
 */
const TextItem = ({ strTextContent, styles }) => {
  const localStyle = StyleSheet.create({
    text: {
      flex: 1,
      lineHeight: 1.2,
      textAlign: "justify",
      textJustify: "inter-word",
    },
  });

  return (
    <View style={{ flexDirection: "row", marginBottom: 2 }}>
      <DotIcon strDotColor="black" strMarginRight="0.15in" />
      <Text style={[styles.normal, localStyle.text]}>{strTextContent}</Text>
    </View>
  );
};

export { TextItem };
