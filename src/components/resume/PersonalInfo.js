import { DataField } from "./DataField";

/**
 *
 * @param {{onFieldValueChange:(objNewValue:{strFirstName: string,
 * strLastName: string,
 * strEmail: string,
 * strPhone:string})=>void}} param0
 * @returns
 */
const PersonalInfo = ({ onFieldValueChange }) => {
  const objPersonalInfo = {
    strFirstName: "",
    strLastName: "",
    strEmail: "",
    strPhone: "",
  };

  const onBlurField = (strPropName, strValue) => {
    objPersonalInfo[strPropName] = strValue;
    onFieldValueChange(objPersonalInfo);
  };

  //const save

  return (
    <form action="" autoComplete="off">
      <div>Personal Info</div>
      <div>
        <div className="flex gap-4">
          <DataField
            strFieldName={"First Name"}
            booIsRequired={true}
            onValueChange={onBlurField.bind(null, "strFirstName")}
            strInitialValue={""}
            strInputType={"text"}
          />
          <DataField
            strFieldName={"Last Name"}
            booIsRequired={true}
            //onValueChange={onChangeLastName}
            onValueChange={onBlurField.bind(null, "strLastName")}
            strInitialValue={""}
            strInputType={"text"}
          />
        </div>

        <DataField
          strFieldName={"Email"}
          booIsRequired={true}
          onValueChange={onBlurField.bind(null, "strEmail")}
          strInitialValue={""}
          strInputType={"email"}
        />
        <DataField
          strFieldName={"Phone"}
          booIsRequired={true}
          onValueChange={onBlurField.bind(null, "strPhone")}
          strInitialValue={""}
          strInputType={"tel"}
        />
      </div>
      <div></div>
    </form>
  );
};

export { PersonalInfo };
