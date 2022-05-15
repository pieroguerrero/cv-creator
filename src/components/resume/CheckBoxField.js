import React, { useEffect, useRef } from "react";
import uniqid from "uniqid";

/**
 *
 * @param {{
 * strFieldName:string,
 * sendCheckChange:(strNewValue:string)=>void,
 * booChecked:boolean,
 * strHelpText:string
 * }} param0
 */
const CheckBoxField = ({
  strFieldName,
  sendCheckChange,
  booChecked = false,
  strHelpText = "",
}) => {
  const inputField = useRef(null);
  const strFieldId = uniqid("checkbox-");
  // useEffect(() => {
  //   inputField.current.checked = booChecked;
  // });

  const getHelperText = () => {
    if (strHelpText && strHelpText.length) {
      return <p className="mt-2 text-sm text-gray-500">{strHelpText}</p>;
    }
  };

  const onValueChange = (e) => {
    sendCheckChange(e.currentTarget.checked);
  };

  return (
    <div className="flex items-start">
      <div className="flex items-center h-5">
        <input
          ref={inputField}
          id={strFieldId}
          name={strFieldId}
          type="checkbox"
          onClick={onValueChange}
          defaultChecked={booChecked ?? false}
          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
        />
      </div>
      <div className="ml-3 text-sm">
        <label htmlFor={strFieldId} className="font-medium text-gray-700">
          {strFieldName}
        </label>
        <p className="text-gray-500">{getHelperText()}</p>
      </div>
    </div>
  );
};

export { CheckBoxField };
