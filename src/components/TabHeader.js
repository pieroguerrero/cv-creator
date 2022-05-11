import React from "react";
import PropTypes from "prop-types";
/**
 *
 * @param {{onTabChange: (strTabId:string)=>void}} props
 * @returns
 */

const TabHeader = ({ onTabChange }) => {
  TabHeader.propTypes = {
    onTabChange: PropTypes.func.isRequired,
  };
  const onSelectRadio = (e) => {
    console.log("e.target.id: ", e.target.id);
    const strId = e.target.id.split("-")[1];
    onTabChange(strId);
  };

  return (
    <div className="flex justify-center items-center mb-1">
      <div className="tabs flex relative bg-white p-3 rounded-full">
        <input
          type="radio"
          id="radio-1"
          name="tabs"
          onChange={onSelectRadio}
          className="z-10"
        />
        <label className="tab z-10" htmlFor="radio-1">
          Edit
        </label>
        <input
          type="radio"
          id="radio-2"
          name="tabs"
          className="z-10"
          onChange={onSelectRadio}
        />
        <label className="tab z-10" htmlFor="radio-2">
          Result
        </label>
        <span className="glider"></span>
      </div>
    </div>
  );
};

export { TabHeader };
