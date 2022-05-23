import { DataField } from "./DataField";
import { UrlField } from "./UrlField";
// import uniqid from "uniqid";
import React, { useRef } from "react";

/**
 *
 * @param {{
 * onFirstNameChange:(newValue: string)=>void,
 * onLastNameChange:(newValue: string)=>void,
 * onEmailChange:(newValue: string)=>void,
 * onAboutChange:(newValue: string)=>void,
 * onPhoneChange:(newValue: string)=>void,
 * onMiddleNameChange:(newValue: string)=>void,
 * onHeadingChange:(newValue: string)=>void,
 * onPlaceOfResidenceChange:(newValue: string)=>void,
 * onPersonalWebPageChange:(newValue: string)=>void,
 * onLinkedURLChange:(newValue: string)=>void,
 * onOtherProfileURLChange:(newValue: string)=>void,
 * strFirstNameValue:string,
 * strLastNameValue:string,
 * strEmailValue:string,
 * strPhoneValue:string,
 * strAboutValue:string,
 * strMiddleNameValue:string,
 * strHeadingValue:string,
 * strPlaceOfResidenceValue:string,
 * strLinkedURLValue:string,
 * strPersonalWebPageValue:string,
 * strOtherProfileURLValue:string,
 * }} param0
 * @returns
 */
const PersonalInfo = ({
  onFirstNameChange,
  onLastNameChange,
  onEmailChange,
  onPhoneChange,
  onAboutChange,
  onMiddleNameChange,
  onHeadingChange,
  onPlaceOfResidenceChange,
  onPersonalWebPageChange,
  onLinkedURLChange,
  onOtherProfileURLChange,
  strFirstNameValue,
  strLastNameValue,
  strEmailValue,
  strPhoneValue,
  strAboutValue,
  strMiddleNameValue,
  strHeadingValue,
  strPlaceOfResidenceValue,
  strLinkedURLValue,
  strPersonalWebPageValue,
  strOtherProfileURLValue,
}) => {
  const frmForm = useRef(null);

  //const objTest = { first: "", second: "" };

  const onBlurField = function (fnOnChangeValue, strValue) {
    // objTest.first = "+" + objTest.first;
    console.log("PersonalInfo.onBlurField.strValue:", strValue);
    fnOnChangeValue(strValue);
  };

  return (
    <form ref={frmForm} autoComplete="none" className="bg-gray-100">
      <div className="flex flex-col gap-6 md:gap-0 md:grid md:grid-cols-[30%_70%] max-w-7xl mx-auto py-6 pt-11 sm:pt-12 sm:px-6 lg:px-8">
        <div className="px-4 sm:pr-8 sm:px-0">
          <h2 className="text-lg font-medium leading-6 text-gray-900">
            Personal Info
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            {
              "Provide the best way for Recruiters to contact you. Remember that pertinent info should be on the first page as the recruiter may not read beyond that."
            }
          </p>
        </div>
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="flex flex-col gap-5 px-4 py-5 bg-white sm:p-6">
            <div className="flex flex-col gap-4 gap-y-5 md:grid md:grid-cols-2">
              <DataField
                strFieldName={"First Name"}
                booIsRequired={true}
                onValueChange={onBlurField.bind(null, onFirstNameChange)}
                strInitialValue={strFirstNameValue}
                strInputType={"text"}
                strHelpText={""}
              />

              <DataField
                strFieldName={"Middle Name"}
                booIsRequired={true}
                onValueChange={onBlurField.bind(null, onMiddleNameChange)}
                strInitialValue={strMiddleNameValue}
                strInputType={"text"}
                strHelpText={""}
                strPlaceHolder={"Name or Initials"}
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
                strFieldName={"Heading"}
                booIsRequired={true}
                onValueChange={onBlurField.bind(null, onHeadingChange)}
                strInitialValue={strHeadingValue}
                strInputType={"text"}
                strHelpText={""}
                strPlaceHolder={"e.g. Lawyer, Product Manager, PhD Candidate"}
              />

              <DataField
                strFieldName={"Email"}
                booIsRequired={true}
                onValueChange={onBlurField.bind(null, onEmailChange)}
                strInitialValue={strEmailValue}
                strInputType={"email"}
                strHelpText={
                  "Do not provide an Email that includes jokes. Recruiters may not find it funny."
                }
              />

              <DataField
                strFieldName={"Place or Residence"}
                booIsRequired={true}
                onValueChange={onBlurField.bind(null, onPlaceOfResidenceChange)}
                strInitialValue={strPlaceOfResidenceValue}
                strInputType={"text"}
                strHelpText={
                  "Employers usually want to know the city and country you currently live in."
                }
                strPlaceHolder={"e.g. City, Country"}
              />

              <DataField
                strFieldName={"Phone"}
                booIsRequired={true}
                onValueChange={onBlurField.bind(null, onPhoneChange)}
                strInitialValue={strPhoneValue}
                strInputType={"tel"}
                strHelpText={""}
              />

              <UrlField
                strFieldName="Linkedin Profile"
                strHelpText={""}
                strInitialValue={strLinkedURLValue}
                strPattern={/.*\.?linkedin\.com.*/gm}
                strPlaceHolder={"www.linkedin.com/in/johndoe"}
                strPrefix={"https://"}
                onValueChange={onBlurField.bind(null, onLinkedURLChange)}
                booIsRequired={true}
              />

              <UrlField
                strFieldName="Other Online Profile"
                strHelpText={""}
                strInitialValue={strOtherProfileURLValue}
                strPattern={/(.*?)/gm}
                strPlaceHolder={"www.example.com/johndoe"}
                strPrefix={"https://"}
                onValueChange={onBlurField.bind(null, onOtherProfileURLChange)}
                booIsRequired={false}
              />

              <UrlField
                strFieldName="Personal Page"
                strHelpText={""}
                strInitialValue={strPersonalWebPageValue}
                strPattern={/(.*?)/gm}
                strPlaceHolder={"www.johndoe.com"}
                strPrefix={"https://"}
                onValueChange={onBlurField.bind(null, onPersonalWebPageChange)}
                booIsRequired={false}
              />
            </div>

            <DataField
              strFieldName={"Summary"}
              booIsRequired={false}
              onValueChange={onBlurField.bind(null, onAboutChange)}
              strInitialValue={strAboutValue}
              strInputType={"textarea"}
              strHelpText={
                "Make your summary sound stronger by writing it in the present tense. Focus on what you can do for a company, rather than what you did in the past."
              }
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export { PersonalInfo };
