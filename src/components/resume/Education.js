import React from "react";
import PropTypes from "prop-types";

/**
 *
 * @param {{educationList:{
 * getId: function(): string,
 * getDegree: function(): string,
 * getInstitutionName: function(): string,
 * getStartDate: function(): string,
 * getEndDate: function(): string,
 * getCurrent: function(): string,
 * getCountryName: function(): string,
 * getCityName: function(): string,
 * setDegree: function(string):void,
 * setInstitutionName: function(string):void,
 * setStartDate: function(string):void,
 * setEndDate: function(string):void,
 * setCurrent: function(string):void,
 * setCountryName: function(string):void,
 * setCityName: function(string):void}[]}} param0
 * @returns
 */
const Education = ({ educationList }) => {
  Education.propTypes = {
    educationList: PropTypes.array,
  };
  return <div></div>;
};

export { Education };
