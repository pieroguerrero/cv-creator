import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

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
 * setAbout: function(string):void,}}} param0
 * @returns
 */
const PersonalInfo = ({ objPersonalInfo }) => {
  const styles = StyleSheet.create({
    name: {
      textTransform: "uppercase",
      fontSize: 20,
      fontWeight: "bold",
    },
    heading: {
      // color: "green",
      fontSize: 18,
    },
    info: {
      // color: "gray",
    },
  });

  return (
    <View>
      <Text style={styles.name}>Piero A. Guerrero</Text>
      <Text style={styles.heading}>123 Your Street, Your City, ST 12345</Text>
      <Text style={styles.info}>123 Your Street, Your City, ST 12345</Text>
      <Text style={styles.info}>(123) 456-7890</Text>
      <Text style={styles.info}>no_reply@example.com</Text>
    </View>
  );
};
export { PersonalInfo };
