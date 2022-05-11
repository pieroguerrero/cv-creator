import { DataField } from "./DataField";
import uniqid from "uniqid";
import { useRef } from "react";

/**
 *
 * @param {{
 * onFirstNameChange:(newValue: string)=>void,
 * onLastNameChange:(newValue: string)=>void,
 * onEmailChange:(newValue: string)=>void,
 * onAboutChange:(newValue: string)=>void,
 * onPhoneChange:(newValue: string)=>void}} param0
 * @returns
 */
const PersonalInfo = ({
  onFirstNameChange,
  onLastNameChange,
  onEmailChange,
  onPhoneChange,
  onAboutChange,
}) => {
  const frmForm = useRef(null);

  const onBlurField = function (fnOnChangeValue, strValue) {
    fnOnChangeValue(strValue);
  };

  return (
    <form ref={frmForm} autoComplete="none" className="bg-gray-100">
      <div className="flex flex-col gap-4 md:grid md:grid-cols-[30%_70%] md:gap-8  max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 sm:px-0">
          <h2 className="text-lg font-medium leading-6 text-gray-900">
            Personal Info
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida
            cum sociis natoque penatibus.
          </p>
        </div>
        <div className="flex-1 shrink-0 shadow sm:rounded-md sm:overflow-hidden">
          <div className="flex flex-col gap-5 px-4 py-5 bg-white sm:p-6">
            <div className="flex flex-col gap-4 gap-y-5 md:grid md:grid-cols-2 md:grid-rows-2">
              <DataField
                strFieldName={"First Name"}
                booIsRequired={true}
                onValueChange={onBlurField.bind(null, onFirstNameChange)}
                strInitialValue={""}
                strInputType={"text"}
                strHelpText={""}
              />
              <DataField
                strFieldName={"Last Name"}
                booIsRequired={true}
                onValueChange={onBlurField.bind(null, onLastNameChange)}
                strInitialValue={""}
                strInputType={"text"}
                strHelpText={""}
              />
              <DataField
                strFieldName={"Email"}
                booIsRequired={true}
                onValueChange={onBlurField.bind(null, onEmailChange)}
                strInitialValue={""}
                strInputType={"email"}
                strHelpText={""}
              />
              <DataField
                strFieldName={"Phone"}
                booIsRequired={true}
                onValueChange={onBlurField.bind(null, onPhoneChange)}
                strInitialValue={""}
                strInputType={"tel"}
                strHelpText={""}
              />
            </div>

            <DataField
              strFieldName={"About"}
              booIsRequired={false}
              onValueChange={onBlurField.bind(null, onAboutChange)}
              strInitialValue={""}
              strInputType={"textarea"}
              strHelpText={"Brief description of your profile."}
            />
          </div>
          <div className="flex justify-end px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export { PersonalInfo };
