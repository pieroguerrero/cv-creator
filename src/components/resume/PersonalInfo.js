import { DataField } from "./DataField";
// import uniqid from "uniqid";
import React, { useRef } from "react";
import { SampleComponent } from "./SampleComponent";
import PropTypes from "prop-types";

/**
 *
 * @param {{
 * onFirstNameChange:(newValue: string)=>void,
 * onLastNameChange:(newValue: string)=>void,
 * onEmailChange:(newValue: string)=>void,
 * onAboutChange:(newValue: string)=>void,
 * onPhoneChange:(newValue: string)=>void,
 * strFirstNameValue:string,
 * strLastNameValue:string,
 * strEmailValue:string,
 * strPhoneValue:string,
 * strAboutValue:string}} param0
 * @returns
 */
const PersonalInfo = ({
  onFirstNameChange,
  onLastNameChange,
  onEmailChange,
  onPhoneChange,
  onAboutChange,
  strFirstNameValue,
  strLastNameValue,
  strEmailValue,
  strPhoneValue,
  strAboutValue,
}) => {
  PersonalInfo.propTypes = {
    onFirstNameChange: PropTypes.func.isRequired,
    onLastNameChange: PropTypes.func.isRequired,
    onEmailChange: PropTypes.func.isRequired,
    onPhoneChange: PropTypes.func.isRequired,
    onAboutChange: PropTypes.func.isRequired,
    strFirstNameValue: PropTypes.string.isRequired,
    strLastNameValue: PropTypes.string.isRequired,
    strEmailValue: PropTypes.string.isRequired,
    strPhoneValue: PropTypes.string.isRequired,
    strAboutValue: PropTypes.string.isRequired,
  };
  const frmForm = useRef(null);

  //const objTest = { first: "", second: "" };

  const onBlurField = function (fnOnChangeValue, strValue) {
    // objTest.first = "+" + objTest.first;
    // console.log("objTest.first:", objTest.first);
    fnOnChangeValue(strValue);
  };

  return (
    <form ref={frmForm} autoComplete="none" className="bg-gray-100">
      <div className="flex flex-col gap-6 md:gap-0 md:grid md:grid-cols-[30%_70%] max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 sm:pr-8 sm:px-0">
          <h2 className="text-lg font-medium leading-6 text-gray-900">
            Personal Info
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida
            cum sociis natoque penatibus.
          </p>
        </div>
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="flex flex-col gap-5 px-4 py-5 bg-white sm:p-6">
            <div className="flex flex-col gap-4 gap-y-5 md:grid md:grid-cols-2 md:grid-rows-2">
              <DataField
                strFieldName={"First Name"}
                booIsRequired={true}
                onValueChange={onBlurField.bind(null, onFirstNameChange)}
                strInitialValue={strFirstNameValue}
                strInputType={"text"}
                strHelpText={""}
              />
              <DataField
                strFieldName={"Last Name"}
                booIsRequired={true}
                onValueChange={onBlurField.bind(null, onLastNameChange)}
                strInitialValue={strLastNameValue}
                strInputType={"text"}
                strHelpText={""}
              />
              <DataField
                strFieldName={"Email"}
                booIsRequired={true}
                onValueChange={onBlurField.bind(null, onEmailChange)}
                strInitialValue={strEmailValue}
                strInputType={"email"}
                strHelpText={""}
              />
              <DataField
                strFieldName={"Phone"}
                booIsRequired={true}
                onValueChange={onBlurField.bind(null, onPhoneChange)}
                strInitialValue={strPhoneValue}
                strInputType={"tel"}
                strHelpText={""}
              />
            </div>

            <DataField
              strFieldName={"About"}
              booIsRequired={false}
              onValueChange={onBlurField.bind(null, onAboutChange)}
              strInitialValue={strAboutValue}
              strInputType={"textarea"}
              strHelpText={"Brief description of your profile."}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export { PersonalInfo };
