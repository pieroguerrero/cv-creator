import React, { useEffect, useRef } from "react";
import uniqid from "uniqid";

/**
 *
 * @param {Object} param0
 * @param {string} param0.strFieldName - Name of the Label on top of the field
 * @param {boolean} param0.booIsRequired
 * @param {(dtNewDate:Date)=>void} param0.onValueChange
 * @param {string} param0.strInitialValue=null - Format: "YYYY-MM-DD"
 * @param {string} param0.strHelpText=""
 * @param {string} param0.strMinDate=null - Format: "YYYY-MM-DD"
 * @param {string} param0.strMaxDate=null - Format: "YYYY-MM-DD"
 * @param {string} param0.strFieldType - "date". To be implemented: "month", "week", "datetime-local" and "time".
 * @returns
 */
const DateTimeField = ({
  strFieldName,
  booIsRequired = false,
  onValueChange,
  strInitialValue = null,
  strHelpText = "",
  strMinDate = null,
  strMaxDate = null,
  strFieldType,
}) => {
  const inputField = useRef(null);
  const spanMessage = useRef(null);
  useEffect(() => {
    inputField.current.required = booIsRequired;
  });
  const strFieldId = uniqid("input-date-");

  const onFocusLost = (strFieldType, e) => {
    if (strFieldType === "date") {
      if (e.currentTarget.checkValidity()) {
        const arrPlittedValue = e.currentTarget.value.split("-");

        if (arrPlittedValue.length === 3) {
          const dtDateValue = new Date(
            Number(arrPlittedValue[0]),
            Number(arrPlittedValue[1]) - 1,
            Number(arrPlittedValue[2])
          );
          onValueChange(dtDateValue);
        } else onValueChange(null);
      } else {
        if (!spanMessage.current.classList.contains("peer-invalid:inline")) {
          spanMessage.current.classList.add(
            "peer-invalid:inline",
            "peer-invalid:after:content-['invalid_format']",
            "peer-invalid:after:left-[-79px]",
            "peer-invalid:after:bg-red-500"
          );

          inputField.current.classList.add("invalid:border-red-500");
        }
      }
    }
  };

  const getHelperText = () => {
    if (strHelpText && strHelpText.length) {
      return (
        <label htmlFor={strFieldId} className="mt-2 text-sm text-gray-500">
          {strHelpText}
        </label>
      );
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
          <input
            id={strFieldId}
            ref={inputField}
            className="peer rounded-md border-[1px] border-solid shadow-inner text-[100%] p-1 pl-2 w-full"
            type={strFieldType}
            autoComplete="none"
            onBlur={onFocusLost.bind(null, strFieldType)}
            defaultValue={strInitialValue}
            min={strMinDate}
            max={strMaxDate}
          />
          <span
            ref={spanMessage}
            className=" self-start relative hidden 
          after:absolute 
          after:whitespace-nowrap 
          after:text-white 
          after:text-[10px] 
          after:top-[-23px] 
          after:py-[2px] 
          after:px-2 
          after:rounded-md 
          after:align-top 
          after:bg-gray-600 
          after:content-['required'] 
          after:left-[-55px]           
          peer-required:peer-invalid:inline"
          ></span>
        </div>
        {getHelperText()}
      </div>
    </div>
  );
};

export { DateTimeField };
