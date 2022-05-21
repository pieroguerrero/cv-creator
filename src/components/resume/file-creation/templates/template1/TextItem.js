import React from "react";
import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { DotIcon } from "./DotIcon";
/**
 *
 * @param {{
 * strTextContent:string,
 * objStyle:object}} param0
 */
const TextItem = ({ strTextContent, objStyle }) => {
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
      <Text style={[objStyle, localStyle.text]}>{strTextContent}</Text>
    </View>
  );
};

export { TextItem };
