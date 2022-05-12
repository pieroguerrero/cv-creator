import { DataField } from "./DataField";
import React from "react";
import PropTypes from "prop-types";

/**
 *
 * @param {{experienceInfo: {
 *   getId: () => string;
 *  getPosition: () => string;
 *   getCompanyName: () => string;
 *   getStartDate: () => string;
 *   getEndDate: () => string;
 *   getCurrentJob: () => string;
 *   getCountryName: () => string;
 *   getCityName: () => string;
 *   getDescription: () => string;
 *   setPosition: (arg0: string) => void;
 *   setCompanyName: (arg0: string) => void;
 *   setStartDate: (arg0: string) => void;
 *   setEndDate: (arg0: string) => void;
 *   setCurrentJob: (arg0: string) => void;
 *   setCountryName: (arg0: string) => void;
 *   setCityName: (arg0: string) => void;
 *   setDescription: (arg0: string) => void;
 *  }}} param0
 * @returns
 */
const ExperienceItem = ({ experienceInfo }) => {
  ExperienceItem.propTypes = {
    experienceInfo: PropTypes.array,
  };

  return <div></div>;
};

export { ExperienceItem };
