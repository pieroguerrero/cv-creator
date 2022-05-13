import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

/**
 *
 * @param {{
 * strFieldName:string,
 * booIsRequired:boolean,
 * onValueChange:(strNewValue:string)=>void,
 * strInitialValue:string,
 * strInputType:string,
 * strHelpText:string}} param0
 * @returns
 */
const DataField = ({
  strFieldName,
  booIsRequired = false,
  onValueChange,
  strInitialValue = "",
  strInputType = "text",
  strHelpText = "",
}) => {
  DataField.propTypes = {
    strFieldName: PropTypes.string.isRequired,
    booIsRequired: PropTypes.bool.isRequired,
    onValueChange: PropTypes.func.isRequired,
    strInitialValue: PropTypes.string.isRequired,
    strInputType: PropTypes.string.isRequired,
    strHelpText: PropTypes.string.isRequired,
  };

  console.log("DataField: Loaded!!!!!!!!!!!!!!!");
  const objTest = { first: "", second: "" };
  const inputField = useRef(null);
  useEffect(() => {
    inputField.current.required = booIsRequired;
  });

  const onFocusLost = (e) => {
    objTest.first += e.currentTarget.value;
    console.log("myObj.first:", objTest.first, e.currentTarget.value);

    onValueChange(
      e.currentTarget.checkValidity() ? e.currentTarget.value : null
    );
    //onValueChange(e.currentTarget.value);
  };

  const getControlType = () => {
    if (strInputType === "textarea") {
      return (
        <textarea
          ref={inputField}
          className="peer rounded-md border-[1px] border-solid shadow-inner text-[100%] p-1 pl-2 w-full invalid:border-red-500 invalid:placeholder-shown:border-[#e5e7eb]"
          cols={20}
          rows={3}
          placeholder=" "
          autoComplete="off"
          onBlur={onFocusLost}
          defaultValue={strInitialValue}
        ></textarea>
      );
    } else {
      return (
        <input
          ref={inputField}
          className="peer rounded-md border-[1px] border-solid shadow-inner text-[100%] p-1 pl-2 w-full invalid:border-red-500 invalid:placeholder-shown:border-[#e5e7eb]"
          type={strInputType}
          autoComplete="none"
          placeholder=" "
          onBlur={onFocusLost}
          defaultValue={strInitialValue}
        />
      );
    }
  };

  const getHelperText = () => {
    if (strHelpText && strHelpText.length) {
      return (
        <label htmlFor="input-field" className="mt-2 text-sm text-gray-500">
          {strHelpText}
        </label>
      );
    }
  };

  return (
    <div className="flex flex-col gap-1">
      <label
        className="block text-sm font-medium text-gray-700"
        htmlFor="input-field"
      >
        {strFieldName}
      </label>
      <div>
        <div className="flex">
          {getControlType()}
          <span className=" self-start relative peer-invalid:after:absolute peer-invalid:after:whitespace-nowrap peer-invalid:after:text-white   peer-invalid:after:text-[10px] peer-invalid:after:top-[-23px] peer-invalid:after:py-[2px] peer-invalid:after:px-2 peer-invalid:after:rounded-md peer-invalid:after:align-top hidden peer-invalid:inline peer-invalid:after:bg-red-500  peer-invalid:peer-placeholder-shown:after:bg-gray-600 peer-invalid:after:content-['invalid_format'] peer-invalid:peer-placeholder-shown:after:content-['required'] peer-invalid:after:left-[-79px] peer-invalid:peer-placeholder-shown:after:left-[-55px]"></span>
        </div>
        {getHelperText()}
      </div>
    </div>
  );
};

export { DataField };
