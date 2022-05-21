import React, { useEffect, useRef } from "react";
import uniqid from "uniqid";

/**
 *
 * @param {{
 * strFieldName:string,
 * booIsRequired:boolean,
 * onValueChange:(strNewValue:string)=>void,
 * strInitialValue:string,
 * strHelpText:string,
 * strPlaceHolder:string,
 * strPattern: RegExp ,
 * strPrefix:string}} param0
 * @returns
 */
const UrlField = ({
  strFieldName,
  booIsRequired = false,
  onValueChange,
  strPattern,
  strInitialValue = "",
  strHelpText = "",
  strPlaceHolder = " ",
  strPrefix,
}) => {
  const inputField = useRef(null);
  useEffect(() => {
    inputField.current.required = booIsRequired;
  });
  const strFieldId = uniqid("input-text-");

  /**
   *
   * @param {string} strHelpText
   * @param {string} strFieldId
   * @returns
   */
  const getHelperText = (strHelpText, strFieldId) => {
    if (strHelpText && strHelpText.length) {
      return (
        <label htmlFor={strFieldId} className="mt-2 text-sm text-gray-500">
          {strHelpText}
        </label>
      );
    }
  };

  const onFocusLost = (e) => {
    //objTest.first += e.currentTarget.value;
    //console.log("myObj.first:", objTest.first, e.currentTarget.value);

    // if (e.currentTarget.checkValidity()) {
    //   console.log(
    //     "URLFIELD.checkValidity()===true",
    //     strPattern,
    //     e.currentTarget.value
    //   );
    //   if (e.currentTarget.value.search(strPattern) >= 0) {
    //     //strPattern.test(e.currentTarget.value)
    //     console.log(
    //       "URLFIELD.strPattern.test===true",
    //       strPattern,
    //       e.currentTarget.value
    //     );
    //     onValueChange(e.currentTarget.value);
    //     e.currentTarget.setCustomValidity("");
    //   } else {
    //     onValueChange(null);
    //     e.currentTarget.setCustomValidity("wrong url");
    //   }
    // } else {
    //   onValueChange(null);
    //   e.currentTarget.setCustomValidity("");
    // }

    if (e.currentTarget.value.length > 0) {
      if (e.currentTarget.value.search(strPattern) >= 0) {
        onValueChange(e.currentTarget.value);
        e.currentTarget.setCustomValidity("");
      } else {
        onValueChange(null);
        e.currentTarget.setCustomValidity("Wrong url format");
      }
    } else {
      if (e.currentTarget.checkValidity()) {
        onValueChange(e.currentTarget.value);
      } else onValueChange(null);
    }
  };

  return (
    <div className="flex flex-col gap-1">
      <label
        className="block text-sm font-medium text-gray-700"
        htmlFor={strFieldId}
      >
        {strFieldName}
      </label>
      <div>
        <div className="flex">
          <span className="flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
            {strPrefix}
          </span>
          <input
            id={strFieldId}
            ref={inputField}
            className="peer rounded-r-md border-[1px] border-solid shadow-inner text-[100%] p-1 pl-2 w-full invalid:border-red-500 invalid:placeholder-shown:border-[#e5e7eb]"
            type="text"
            autoComplete="none"
            placeholder={strPlaceHolder.length > 0 ? strPlaceHolder : " "}
            onBlur={onFocusLost}
            defaultValue={strInitialValue}
          />
          <span className=" self-start relative peer-invalid:after:absolute peer-invalid:after:whitespace-nowrap peer-invalid:after:text-white   peer-invalid:after:text-[10px] peer-invalid:after:top-[-23px] peer-invalid:after:py-[2px] peer-invalid:after:px-2 peer-invalid:after:rounded-md peer-invalid:after:align-top hidden peer-invalid:inline peer-invalid:after:bg-red-500  peer-invalid:peer-placeholder-shown:after:bg-gray-600 peer-invalid:after:content-['invalid_format'] peer-invalid:peer-placeholder-shown:after:content-['required'] peer-invalid:after:left-[-79px] peer-invalid:peer-placeholder-shown:after:left-[-55px]"></span>
        </div>
        {getHelperText(strHelpText, strFieldId)}
      </div>
    </div>
  );
};

export { UrlField };
