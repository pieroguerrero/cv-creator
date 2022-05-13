import React from "react";
import PropTypes from "prop-types";

/**
 *
 * @param {{educationList:{
 * getId: function(): string,
 * getDegree: function(): string,
 * getInstitutionName: function(): string,
 * getStartDate: function(): Date,
 * getEndDate: function(): Date,
 * getCurrent: function(): string,
 * getCountryName: function(): string,
 * getCityName: function(): string,
 * setDegree: function(string):void,
 * setInstitutionName: function(string):void,
 * setStartDate: function(Date):void,
 * setEndDate: function(Date):void,
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
